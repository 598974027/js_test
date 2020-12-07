import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import i18n from './langs/i18n'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
