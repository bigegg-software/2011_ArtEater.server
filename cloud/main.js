// require('./model');
require('../utils/wx');
const Data = require("../utils/data.js");
const Api = require("../utils/api.js");
const wxpay = require("../utils/wxpay");

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
                tradeId:wechatPay.tradeId
            };

            payload.paySign = wxpay.sign(payload);

            const result = {
                payload: payload,
                weChatPayId: wechatPay.objectId
            };
            console.log("initiatePayment success", result);
            resolve(result);
        } catch (error) {
            console.log("initiatePayment error", error);
            reject(error);
        }
    });
})




// Parse.Cloud.run('initiatePayment', {
//     price: 10,
// },{sessionToken: 'r:c62ec7d6a9c71a46c8f40b49b2ca7fb9'})



//获取商户号，实现微信支付功能
