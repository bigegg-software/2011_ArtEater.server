var express = require('express');
var router = express.Router();
// const ParseServer = require('parse/node')

router.post('/login', async function (req, res, next) {
    console.log('req.params',req.params, req.body, req.query);
    let code = req.body.code;
    let access_token = await WeApp.getAccessToken();
    console.log("access_token",access_token);
    let openInfo = await WeApp.getOpenId(code);
    let open_id = openInfo.openid
    // open_id = 'oKyXV5OM1E6WdD5KT8b2_qbKoGsA' //todo：测试用的，正式后删除
    const query = new Parse.Query(Parse.User);
    query.equalTo("username",open_id);  // find all the women
    let count = await query.count();
    console.log("count",count);
    if(count == 0){
        const user = new Parse.User();
        user.setUsername(open_id);
        user.setPassword('123456');
        await user.signUp();
    }
    const userInfo = await Parse.User.logIn(open_id, "123456");
    console.log("userInfo",userInfo);
    res.send({code:200,data:userInfo});
});
router.post('/getOpenId', async function (req, res, next) {
    console.log('req.params',req.params, req.body, req.query);
    let code = req.body.code;
    let access_token = await WeApp.getAccessToken();
    console.log("access_token",access_token);
    let open_id = await WeApp.getOpenId(code);
    res.send({code:200,data:open_id});
});
router.post('/getwxcode', async function (req, res, next) {
    let scene = req.body.scene;
    let page = req.body.page;
    // sceneValue,curPage
    let access_token = await WeApp.getAccessToken();
    console.log("access_token",access_token);
    let wxcode = await WeApp.getwxcode(access_token,scene,page);
    res.send({code:200,data:wxcode});
});
module.exports = router;