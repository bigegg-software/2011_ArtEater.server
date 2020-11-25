require('./model')
require('../utils/wx')

Parse.Cloud.define('ping', async (req) => {
  return 'pong';
})
