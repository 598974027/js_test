import axios from 'axios'
import qs from 'qs'
import {Message, MessageBox, Notification} from 'element-ui'

import {getToken} from '../utils/auth.js'
import errorCode from '../utils/errorCode.js'
import loading from '../utils/Loading.js'

export var apiHost = 'http://localhost:8080/areaUser'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let service = axios.create({
    baseURL: apiHost,
    timeout: 15000,
    withCredentials: true,
    transformRequest: [function (data, headers) {
        if (!headers['Content-Type']) {
            return qs.stringify(data)
        }
        return data
    }],
})

// request拦截器
service.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer ' + getToken()
    return config
}, error => {
    Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(res => {
        loading.close()
        const code = res.data.code || 200
        const msg = res.data.msg || errorCode[code] || errorCode['default']
        if (code === 401) {
            MessageBox.confirm(
                '登录状态已过期，您可以继续留在该页面，或者重新登录',
                '系统提示',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                alert('LogOut')
            })
        } else if (code === 500) {
            Message({
                message: msg,
                type: 'error'
            })
            return Promise.reject(new Error(msg))
        } else if (code !== 200) {
            Notification.error({
                title: msg
            })
            return Promise.reject('error')
        } else {
            if (typeof res.data.data != 'undefined') {
                return res.data.data
            }
            return res.data
        }
    },
    error => {
        loading.close()
        let {message} = error
        if (message == "Network Error") {
            message = "系统接口连接异常"
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时"
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常"
        }
        Message({
            message: message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
