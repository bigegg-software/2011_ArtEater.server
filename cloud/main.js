require('./model')
require('../utils/wx')

Parse.Cloud.define('ping', async (req) => {
  return 'pong';
})
//获取商户号，实现微信支付功能
