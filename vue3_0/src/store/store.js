import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 23,
        changeShow: true,
    },
    getters: {
        getCount(state) {
            return state.count
        },
        isShow(state) {
            return state.changeShow
        }
    },
    mutations: {
        addCount(state, num) {
            state.count = state.count + num
        },
        delCount(state, num) {
            if (state.count > 0) {
                state.count = state.count - num
            } else {
                state.count = 0
            }
        },
    },
    actions: {
        getAddCount(context, num) {
            context.commit('addCount', num)
        },
        getDelCount(context, num) {
            context.commit('delCount', num)
        },
    }
})