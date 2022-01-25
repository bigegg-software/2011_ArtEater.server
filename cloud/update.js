const Parse = require('parse/node');
Parse.initialize('8IXBcjIkgHNQ2v9k', '1uGXsOnrM70ElEuwWaxm1lp1zsE6nxJj', 'LoOjxcEQS35Sr9QnAV3bOUaassBzScwM')
Parse.serverURL = 'https://www.arteater.cn/api/1'
let DailyCourse = Parse.Object.extend('DailyCourse')
let ModuleAssociatedCourses = Parse.Object.extend('ModuleAssociatedCourses')

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
        continue;
        await course.save({
            "createdAt":courseAssio.createdAt,
            "updatedAt":courseAssio.updatedAt
        }, { useMasterKey: true })
    }
    
    // console.log("courses",courses);
}
setTimeout(async () => {
    // await importDailyCourse()
    await updateDailyCourse();

}, 2000);