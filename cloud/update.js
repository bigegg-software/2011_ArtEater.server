const Parse = require('parse/node');
Parse.initialize('8IXBcjIkgHNQ2v9k', '1uGXsOnrM70ElEuwWaxm1lp1zsE6nxJj', 'LoOjxcEQS35Sr9QnAV3bOUaassBzScwM')
Parse.serverURL = 'https://www.arteater.cn/api/1'
let DailyCourse = Parse.Object.extend('DailyCourse')
let ModuleAssociatedCourses = Parse.Object.extend('ModuleAssociatedCourses')
let NewCouponRecord = Parse.Object.extend('NewCouponRecord')
let User = Parse.Object.extend('_User')
const xlsx = require('node-xlsx');

async function importDailyCourse() {
    // console.log("count","==================");
    let q = new Parse.Query(ModuleAssociatedCourses);
    q.equalTo("subTitle","每日新知")
    let courses = await q.find()
    // console.log("count","=========2=========");
    let count = await q.count()
    courses = courses.map(item=>item.toJSON())
    console.log("count",count,courses);
    for (let i = 0; i < courses.length; i ++){
        let course = courses[i];
        let aDailyCourse = new DailyCourse();
        console.log("i",i)

        // return
        await aDailyCourse.save({
            "title":course.title,
            "surface":course.surface,
            "N":course.N,
            "baseNum":course.baseNum,
            "subTitle":course.subTitle,
            "course":course.course,
            "realNum":course.realNum,
            "updatedBy":course.updatedBy,
            "createdAt":course.createdAt,
            "updatedAt":course.updatedAt
        }, { useMasterKey: true })
    }
    
    // console.log("courses",courses);
}
async function updateDailyCourse() {
    let q = new Parse.Query(DailyCourse);
    let courses = await q.find()
    for (let i = 0; i < courses.length; i ++){
        let course = courses[i];
        let courseInfo = course.toJSON()
        let q = new Parse.Query(ModuleAssociatedCourses);
        q.equalTo("title",courseInfo.title)
        let courseAssio = await q.first()
        courseAssio = courseAssio.toJSON();
        console.log('courseAssio.createdAt',courseAssio.createdAt)
        // continue;
        await course.save({
            "created_at":courseAssio.createdAt,
            "updated_at":courseAssio.updatedAt
        }, { useMasterKey: true })
        return;
    }
    
    // console.log("courses",courses);
}

async function getNewCouponRecordList() {
    let data = {};
    let query1 = new Parse.Query(NewCouponRecord);
    let query2 = new Parse.Query(NewCouponRecord);
    console.log(new Date())
    
    if (data.search_keyword){
        query1.contains("couponName", data.search_keyword);
        query2.contains("sendBy", data.search_keyword);
    }
    let query = Parse.Query.or(query1,query2);
    if (data.search_type) {
        query.equalTo("couponRange", data.search_type);
    }
    if (data.search_start_date) {
        query.greaterThan("createdAt", new Date(data.search_start_date));
      }
    if (data.search_end_date) {
        query.lessThan("createdAt", new Date(new Date(data.search_end_date).getTime() + 24*60*60*1000));
    }
    // query.descending("createdAt");
    let array = []
    query.include("user");
    let counts = await query.count();
    for (let i = 0 ; i <= counts/1000; i ++){
        query.skip(i*1000)
        query.limit(1000)
        let newDatas = await query.find()
        array = array.concat(newDatas)
    }
    let couponList = [];
    let titles = ['序号','优惠券名称', '优惠券类型', '优惠券金额','发送时间',
    '操作人','使用人ID','使用人手机号','使用情况','使用时间'];
    couponList.push(titles);
    let i = 0;
    console.log(new Date())
    array.map(item=>{
        i ++;
        item = item.toJSON()
        let couponRange = getCouponRange(item.couponRange)
        let state = getCouponState(item.state)
        let useTime = item.state == 2 ? item.updatedAt : '--'
        let couponInfo = [i,item.couponName,couponRange,item.amount,item.createdAt,
        item.sendBy,item.user.objectId,item.user.phone,state,useTime,]
        couponList.push(couponInfo)
    })
    console.log(new Date())
    var buffer = xlsx.build([
        {
          name: 'sheet1',
          data: couponList
        }
      ])
    let xlsx_data = JSON.parse(JSON.stringify(buffer));
    var parseFile = new Parse.File('coupon_record_list.xlsx', xlsx_data.data);
    let file_url = await parseFile.save();

    console.log("======file_url====",file_url._url)
    // return file_url;
}
function getCouponState(state){
    let stateInfo = '--'
    switch(state){
        case 0:
            stateInfo = '未使用'
            break;
        case 1:
            stateInfo = '已过期'
            break;
        case 2:
            stateInfo = '已使用'
            break;
        default:
            stateInfo = '--'
            break;
    }
    return stateInfo
}

function getCouponRange(type){
    let typeInfo = ''
    switch(type){
        case 'all':
            typeInfo = '全部通用'
            break;
        case 'blackGold':
            typeInfo = '黑金'
            break;
        case 'platinum':
            typeInfo = '铂金'
            break;
        case 'silver':
            typeInfo = '白银'
            break;
        case 'blackGoldNew':
            typeInfo = '黑金拉新'
            break;
        case 'platinumGoldNew':
            typeInfo = '铂金拉新'
            break;
        case 'silverGoldNew':
            typeInfo = '白银拉新'
            break;
        case 'newUser':
            typeInfo = '注册新用户'
            break;
        case 'blackGoldPullNewUser':
            typeInfo = '黑金拉新用户'
            break;
        case 'silverPullNewUser':
            typeInfo = '白银拉新用户'
            break;
        case 'platinumPullNewUser':
            typeInfo = '铂金拉新用户'
            break;
        default:
            typeInfo = ''
            break;
    }
    return typeInfo
}


async function updateNewCouponUser() {
    
    let query = new Parse.Query(NewCouponRecord);
    let count = await query.count()
    console.log("count:",count)
    let i = 0;
    await query.each(async coupon=>{
        i ++
        item = coupon.toJSON()
        let openid = item.openid
        let userQ = new Parse.Query(User);
        userQ.equalTo("openid",openid)
        let userInfo = await userQ.first()
        await coupon.save({
            "user":userInfo
        },{useMasterKey:true})
        console.log("i:",i)

    })
}
setTimeout(async () => {
    // await importDailyCourse()
    // await updateDailyCourse();
    // await getNewCouponRecordList()
    // await updateNewCouponUser()

}, 2000);