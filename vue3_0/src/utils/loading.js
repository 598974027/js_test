import {Loading} from 'element-ui';

export default class MLoading {
    static show(text) {
        let loadingInstance = Loading.service({
            fullscreen: true,
            spinner: '',
            text: text,
            background: 'rgba(0, 0, 0, 0.7)',
        });
        MLoading.loadingInstance = loadingInstance
    }

    static close() {
        if (typeof MLoading.loadingInstance == 'undefined' || MLoading.loadingInstance == null) {
            MLoading.loadingInstance = Loading.service({});
        }
        MLoading.loadingInstance.close()
    }
} 