import request from './server.js'

export function select(params) {
    return request({
        url: '/device/dept/select',
        method: 'get',
        params: params
    })
}

export function insert(params) {
    return request({
        url: '/api/test/insert',
        method: 'post',
        data: params
    })
}