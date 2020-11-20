require('./model')

Parse.Cloud.define('ping', async (req) => {
  return 'pong';
})
