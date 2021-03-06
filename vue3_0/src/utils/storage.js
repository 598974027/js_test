const localStorage = window.localStorage

/**
 * localStorage 设置
 * @param {String} key 键
 * @param {String} val 值
 */
export function set(key, val) {
    try {
        if (!key) {
            return
        } else {
            return localStorage.setItem(key, val)
        }
    } catch (err) {
        return ''
    }
}

/**
 * localStorage 获取
 * @param {String} key 键
 * @return {string} key 对应 localStorage 的值
 */
export function get(key) {
    try {
        if (!key) {
            return ''
        } else {
            return localStorage.getItem(key)
        }
    } catch (err) {
        return ''
    }
}

/**
 * 清除 localStorage，若不填参数 key ，则清除所有 localStorage
 * @param {String} key 键
 * @return {Boolean} 是否清除成功
 */
export function remove(key) {
    try {
        if (typeof key === 'undefined') {
            return localStorage.clear()
        } else {
            return localStorage.removeItem(key)
        }
    } catch (err) {
        return false
    }
}

/**
 * 检查是否支持 localStorage
 * @return {Boolean} 当前浏览器是否支持 localStorage
 */
export function support() {
    try {
        localStorage.setItem('key', 'value')
        if (localStorage.getItem('key') === 'value') {
            localStorage.removeItem('key')
            return true
        } else {
            return false
        }
    } catch (err) {
        return false
    }
}

export default {
    get,
    set,
    remove,
    support
}