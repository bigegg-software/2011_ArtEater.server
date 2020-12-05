// 获取传入数据
const getRequestData = (request, key) => request.params[key];

// 获取请求云函数的用户
const getRequestUser = request => request.user;

// 获取请求地址
const getRequestIP = request => {
 
    return request.ip
}

module.exports = {
  getRequestData,
  getRequestUser,
  getRequestIP
};