const wxpay = require("./wxpay");
const axios = require("axios");

const validateSign = results => {
  const sign = wxpay.sign(results);
  if (sign !== results.sign) {
    const error = new Error("微信返回参数签名结果不正确");
    error.code = "INVALID_RESULT_SIGN";
    throw error;
  }
  return results;
};

const handleError = results => {
  if (results.return_code === "FAIL") {
    throw new Error(results.return_msg);
  }
  if (results.result_code !== "SUCCESS") {
    const error = new Error(results.err_code_des);
    error.code = results.err_code;
    throw error;
  }
  return results;
};

// 格式化时间
const formatTime = time => {
  const format = "___-_-_ _:_:__";

  new Date(
    time
      .split("")
      .map((value, index) => value + format[index])
      .join("")
      .replace(/_/g, "")
  );
};

// 发送模板消息
const sendTemplateMessage = (
  access_token, //接口调用凭证
  touser, //接收者（用户）的 openid
  template_id, //所需下发的模板消息的id
  page, //点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
  form_id, //表单提交场景下，为 submit 事件带上的 formId；支付场景下，为本次支付的 prepay_id
  data, //模板内容，不填则下发空模板。具体格式请参考示例。
  emphasis_keyword //模板需要放大的关键词，不填则默认无放大
) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        method: "post",
        url: `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${access_token}`,
        data: {
          touser,
          template_id,
          page,
          form_id,
          data,
          emphasis_keyword
        }
      });
      console.log("sendTemplateMessage success", res);
      resolve(res);
    } catch (error) {
      console.log("sendTemplateMessage error", error);
      reject(error);
    }
  });

// 从 Global 中获取 access——token
const getAccessToken = global =>
  JSON.parse(global.attributes.value).access_token;

// 发送订阅消息
// POST https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=ACCESS_TOKEN
const sendSubscribeMessage = (access_token, touser, template_id, page, data) =>
  new Promise(async (resolve, reject) => {
    try {
      const res = await axios({
        method: "post",
        url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${access_token}`,
        data: {
          touser,
          template_id,
          page,
          data
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  validateSign,
  handleError,
  formatTime,
  sendTemplateMessage,
  getAccessToken,
  sendSubscribeMessage
};
