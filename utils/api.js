const wxpay = require("./wxpay");
const Utils = require("./wxUtils.js");
const uuid = require("uuid/v4");
const WechatPay = Parse.Object.extend('WechatPay')


// 创建 WechatPay
const createWechatPay = (user, price, ip) => {
    return new Promise(async (resolve, reject) => {
        try {
            const wechatPay = {};
            wechatPay.tradeId = uuid().replace(/-/g, "");
            wechatPay.status = "INIT";
            wechatPay.user = user;
            wechatPay.productDescription = "支付";
            wechatPay.amount = Number(price);
            wechatPay.ip = ip;
            if (
                !(wechatPay.ip && /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(wechatPay.ip))
            ) {
                wechatPay.ip = "127.0.0.1";
            }
            wechatPay.tradeType = "JSAPI";

            //   const acl = new AV.ACL(); //权限
            //   // 只有创建订单的用户可以读，没有人可以写
            //   acl.setPublicReadAccess(false);
            //   acl.setPublicWriteAccess(false);
            //   acl.setReadAccess(user, true);
            //   acl.setWriteAccess(user, false);
            //   wechatPay.setACL(acl);

            wxpay.createUnifiedOrder({
                    openid: wechatPay.user.get("openid"),
                    body: wechatPay.productDescription,
                    out_trade_no: wechatPay.tradeId,
                    total_fee: wechatPay.amount,
                    spbill_create_ip: wechatPay.ip,
                    notify_url: process.env.CUSTOM_PAY_CALLBACK,
                    trade_type: wechatPay.tradeType
                },
                async function(err, result) {
                    console.log("utils/api==",result)
                    wechatPay.prepayId = result.prepay_id
                    let info =  await new WechatPay(wechatPay).save( null, { useMasterKey: true })            
                    resolve(info.toJSON());
                }
            );

        } catch (error) {
            console.log("createWechatPay error", error);
            reject(error);
        }
    });
};

// 修改 WechatPay 为支付成功
const successWechatPay = (
    result_code,
    err_code,
    err_code_des,
    out_trade_no,
    time_end,
    transaction_id,
    bank_type
) => {
    return new Promise(async (resolve, reject) => {
        try {
            // 根据 tradeId 查询 WechatPay
            const wechatPay = await new Prase.Query('WechatPay')
                .include("user")
                .equalTo("tradeId", out_trade_no)
                .first({ useMasterKey: true });

            // 如果找不到该订单，则说明传入数据有误
            if (!wechatPay) {
                throw `找不到订单${out_trade_no}`;
            }

            // 如果是已完成订单，则没必要修改
            if (wechatPay.status === "SUCCESS") {
                resolve(wechatPay);
            }

            // 修改订单信息为已成功
            await wechatPay.save({
                status: result_code,
                errorCode: err_code,
                errorCodeDes: err_code_des,
                paidAt: Utils.formatTime(time_end),
                transactionId: transaction_id,
                bankType: bank_type
            }, {
                useMasterKey: true
            });
            resolve(wechatPay);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createWechatPay,
    successWechatPay
};