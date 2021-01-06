

const CronJob = require('cron').CronJob;
const fetch = require('node-fetch')
const crypto = require('crypto')
const FormData = require('form-data');
const fs = require('fs')
const path = require('path')
const request = require('request')
var https = require("https");

class Store {
    constructor() {

    }
    set(key, value, cb) {
        this[key] = value
        cb()
    }
    get(key, cb) {
        cb(this[key])
    }
}

class WeApp {

    constructor(opt) {

        this.appid = opt.appid;
        this.secret = opt.secret;
        this.messageToken = opt.token;
        this.isStore = opt.isStore;
        this.key = opt.key || 'WEAPP_TOKEN_REDIS';
        if (opt.redis) {
            this.store = opt.redis
        } else {
            this.store = new Store()
        }
        this._init()


    }

    async _init() {
        this.getAccessToken()
        let job = new CronJob('1 */10 * * * *', () => {
            this.getAccessToken()
        }, null, true, 'America/Los_Angeles');
        job.start()
    }

    _saveToken(value) {
        return new Promise(resolve => {
            this.store.set(this.key, value, () => {
                resolve()
            });
        })
    }
    _getToken() {
        return new Promise(resolve => {
            this.store.get(this.key, (v) => {
                resolve(v)
            });
        })
    }



    checkSignature(params) {
        var key = [this.messageToken, params.timestamp, params.nonce].sort().join('');
        var sha1 = crypto.createHash('sha1');
        sha1.update(key);
        return sha1.digest('hex') === params.signature;
    }

    async getOpenId(code){
        let data = await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${this.appid}&secret=${this.secret}&js_code=${code}&grant_type=authorization_code`)
        let result = await data.json()
        console.log("getOpenId",result)
        // await this._saveToken(result.openid)
        return result
    }

    async getAccessToken() {
        let data = await fetch(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.appid}&secret=${this.secret}`)
        let result = await data.json()
        await this._saveToken(result.access_token)
        return result.access_token
    }
    async getwxcode(access_token,sceneValue,curPage) {

        return new Promise((resolve, reject)=>{
            var data =  {"scene": sceneValue,
                            "page": curPage,
                            "width": 300,
                            'is_hyaline': true
                        }
            data = JSON.stringify(data);
            var options = {
                method: "POST",
                host: "api.weixin.qq.com",
                path: '/wxa/getwxacodeunlimit?access_token=' + access_token,
                headers: {
                    "Content-Type": "application/json",
                    "Content-Length": data.length
                }
            };
            var req = https.request(options, function (res) {
                res.setEncoding("binary");
                var imgData = "";
                res.on('data', function (chunk) {
                    imgData += chunk;
                });
                res.on("end", function () {
                    resolve(imgData)
                });
            });
            req.write(data);
            req.end();
        })


        let result = await fetch(`https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`, {
            method: 'POST',
            // headers: {
            //     accept: '*/*',
            // },
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                scene: sceneValue,
                page:curPage,
                width: 430
            }),
            responseType: 'stream'
        })
        console.log('sceneValue',sceneValue)
        console.log('curPage',curPage)
        console.log('curPage',result.body)
        
        return result.body


        let url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${access_token}`
        return new Promise((resolve, reject) => {
            const req = request.post(
                {
                    url,
                    headers: {
                        accept: '*/*',
                    },
                    data: {
                        "scene":sceneValue,
                        "page":curPage
                    }
                },
                (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    try {
                        console.log("wechat code",res);
                        const resData = JSON.parse(res.body); // 里面带有返回的media_id

                        resolve(resData);
                    } catch (e) {
                        console.log(e)
                    }
                },
            );

            const form = req.form();
            form.append('media', imgStram);
            form.append('hack', ''); // 微信服务器的bug，需要hack一下才能识别到对象
        });
        // await this._saveToken(result.access_token)
        // return result
    }

    async sendMessage(body) {
        let token = await this._getToken()
        let data = await fetch(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${token}`, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        let result = await data.json()
        return result
    }

    async updateMedia(imagePath) {

        let imgStram = fs.createReadStream(imagePath);
        let token = await this._getToken();
        if (!token) {
            token = await this.getAccessToken()
        }
        const url = `https://api.weixin.qq.com/cgi-bin/media/upload?access_token=${token}&type=image`;
        return new Promise((resolve, reject) => {
            const req = request.post(
                {
                    url,
                    headers: {
                        accept: '*/*',
                    },
                },
                (err, res) => {
                    if (err) {
                        reject(err);
                    }
                    try {
                        const resData = JSON.parse(res.body); // 里面带有返回的media_id

                        resolve(resData);
                    } catch (e) {
                        console.log(e)
                    }
                },
            );

            const form = req.form();
            form.append('media', imgStram);
            form.append('hack', ''); // 微信服务器的bug，需要hack一下才能识别到对象
        });


    }

    async set(key, value) {
        return new Promise(resolve => {
            this.store.set(key, value, () => {
                resolve()
            });
        })
    }
    async get(key) {
        return new Promise(resolve => {
            this.store.get(key, (v) => {
                resolve(v)
            });
        })
    }
}
module.exports = WeApp
