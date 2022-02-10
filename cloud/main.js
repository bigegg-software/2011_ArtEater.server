require('./model');
require('../utils/wx');
const Data = require("../utils/data.js");
const Api = require("../utils/api.js");
const wxpay = require("../utils/wxpay");
let NewCouponRecord = Parse.Object.extend('NewCouponRecord')
let User = Parse.Object.extend('_User')
const xlsx = require('node-xlsx');

Parse.Cloud.define('psng', async (req) => {
  return 'pong';
})



//发起支付
Parse.Cloud.define('initiatePayment', async (request) => {

    return new Promise(async (resolve, reject) => {
        try {
            // 初始状态
            const REQUEST_DATA_PRICE = "price";
            const ERROR_USER_NOT_LOGIN = "用户未登录";
            const ERROR_USER_NOT_MINIPROGRAM = "当前用户不是小程序用户";
            const REQUEST_DATA_USER = "user";

            // 获取传入参数
            const price = Data.getRequestData(request, REQUEST_DATA_PRICE);
            const requestUser = Data.getRequestUser(request);
            const requestIP = Data.getRequestIP(request);

            // 检测传入参数
            if (!requestUser) {
                throw ERROR_USER_NOT_LOGIN;
            }

            // if (!Check.isMiniProgramUser(requestUser)) {
            //     throw ERROR_USER_NOT_MINIPROGRAM;
            // }

            // 创建微信支付
            
            const wechatPay = await Api.createWechatPay(
                requestUser,
                price,
                requestIP
            );

            // 打印信息
            console.log(
                `预订单创建成功：订单号 [${wechatPay.tradeId}] prepayId [${wechatPay.prepayId}]`
            );

            // 创建 payload
            const payload = {
                appId: process.env.WEIXIN_APPID,
                timeStamp: String(Math.floor(Date.now() / 1000)),
                package: `prepay_id=${wechatPay.prepayId}`,
                signType: "MD5",
                nonceStr: String(Math.random()),
            };

            payload.paySign = wxpay.sign(payload);

            const result = {
                payload: payload,
                weChatPayId: wechatPay.objectId,
                tradeId:wechatPay.tradeId
            };
            console.log("initiatePayment success", result);
            resolve(result);
        } catch (error) {
            console.log("initiatePayment error", error);
            reject(error);
        }
    });
})

//获取优惠券记录列表
Parse.Cloud.define('getNewCouponRecordList', async (req) => {
    let data = req.params;
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
        let createdAt = new Date(item.createdAt);
        createdAt = dateFormat(createdAt,"yyyy-MM-dd HH:mm:ss")
        let updatedAt = new Date(item.updatedAt);
        updatedAt = dateFormat(updatedAt,"yyyy-MM-dd HH:mm:ss")
        let useTime = item.state == 2 ? updatedAt : '--'
        let couponInfo = [i,item.couponName,couponRange,item.amount,createdAt,
        item.sendBy,item.user.objectId,item.user.phone,state,useTime]
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
    return {status:200,url:file_url._url}
})

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
const dateFormat = (date, fmt)=> {
    let ret;
    const opt = {
      "y+": date.getFullYear().toString(),        // 年
      "M+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "m+": date.getMinutes().toString(),         // 分
      "s+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  }
//获取学生列表
Parse.Cloud.define('getStudentList', async (req) => {
    let data = req.params;
    let userQ1 = new Parse.Query(User);
    if (data.search_keyword){
        userQ1.contains("realname", data.search_keyword);
    }
    let userQ2 = new Parse.Query(User);
    if (data.search_keyword){
        userQ2.contains("nickName", data.search_keyword);
    }
    let userQ3 = new Parse.Query(User);
    if (data.search_keyword){
        userQ3.contains("objectId", data.search_keyword);
    }
    let query = Parse.Query.or(userQ1,userQ2,userQ3);
    query.equalTo("role","student")
    if (data.label){
        query.contains("label", data.label)
    }
    if (data.search_start_date) {
        query.greaterThan("createdAt", new Date(data.search_start_date));
    }
    if (data.search_end_date) {
        query.lessThan("createdAt", new Date(new Date(data.search_end_date).getTime() + 24*60*60*1000));
    }
    query.descending("createdAt");
    let array = []
    // query.include("user");
    let counts = await query.count();
    for (let i = 0 ; i <= counts/1000; i ++){
        query.skip(i*1000)
        query.limit(1000)
        let newDatas = await query.find()
        array = array.concat(newDatas)
    }
    let userList = [];
    let titles = ['ID','昵称', '标签', '姓名','手机号',
    '注册时间','消费金额','积分'];
    userList.push(titles);
    let i = 0;
    console.log(new Date())
    array.map(item=>{
        i ++;
        item = item.toJSON()
        let createdAt = new Date(item.createdAt);
        createdAt = dateFormat(createdAt,"yyyy-MM-dd HH:mm:ss")
        let userInfo = [item.objectId,item.nickName,item.label,item.realname,item.phone,
            createdAt,item.amount,item.score]
        userList.push(userInfo)
    })
    console.log(new Date())
    var buffer = xlsx.build([
        {
          name: 'sheet1',
          data: userList
        }
      ])
    let xlsx_data = JSON.parse(JSON.stringify(buffer));
    var parseFile = new Parse.File('student_list.xlsx', xlsx_data.data);
    let file_url = await parseFile.save();
    return {status:200,url:file_url._url}
})



//获取商户号，实现微信支付功能
