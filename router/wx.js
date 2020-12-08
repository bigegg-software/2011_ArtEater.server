var express = require('express');
var router = express.Router();
const { validateSign } = require("../utils/wxUtils");
const wxpay = require("../utils/wxpay");
let Order = Parse.Object.extend("Order");

router.post('/login', async function(req, res, next) {
    console.log('req.params', req.params, req.body, req.query);
    let code = req.body.code;
    let access_token = await WeApp.getAccessToken();
    console.log("access_token", access_token);
    let openInfo = await WeApp.getOpenId(code);
    let open_id = openInfo.openid
    // open_id = 'oKyXV5OM1E6WdD5KT8b2_qbKoGsA' //todo：测试用的，正式后删除
    const query = new Parse.Query(Parse.User);
    query.equalTo("username", open_id); // find all the women
    let count = await query.count();
    console.log("count", count);
    if (count == 0) {
        const user = new Parse.User();
        user.setUsername(open_id);
        user.setPassword('123456');
        await user.signUp();
    }
    const userInfo = await Parse.User.logIn(open_id, "123456");
    console.log("userInfo", userInfo);
    res.send({ code: 200, data: userInfo });
});
router.post('/getOpenId', async function(req, res, next) {
    console.log('req.params', req.params, req.body, req.query);
    let code = req.body.code;
    let access_token = await WeApp.getAccessToken();
    console.log("access_token", access_token);
    let open_id = await WeApp.getOpenId(code);
    res.send({ code: 200, data: open_id });
});
router.post("/pay_notification", wxpay.useWXCallback(async (msg, req, res, next) => {
    // 处理商户业务逻辑
    validateSign(msg);
    //更新订单
    if (msg.result_code == 'SUCCESS'){
        let orderQ = new Parse.Query(Order);
        orderQ.equalTo("orderNo",msg.out_trade_no)
        let orderList = await orderQ.find()
        if(orderList.length > 0){
            let orderInfo = orderList[0];
            orderInfo.set('wechatPayOrderId',msg.transaction_id)
            await orderInfo.save(null,{ useMasterKey: true })
        }
    }
    
}));


module.exports = router;