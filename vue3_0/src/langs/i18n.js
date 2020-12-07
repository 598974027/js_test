import Vue from 'vue'
import vueI18n from 'vue-i18n'
import enLocale from './en'
import cnLocale from './cn'
import eleEnLocale from 'element-ui/lib/locale/lang/en'
import eleCnLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(vueI18n)

export default new vueI18n({
    locale: 'en',
    messages: {
        'cn': {
            ...cnLocale,
            ...eleCnLocale
        },
        'en': {
            ...enLocale,
            ...eleEnLocale
        }
    }
})