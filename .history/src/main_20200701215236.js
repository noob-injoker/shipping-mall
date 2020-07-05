import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './http/api'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Dialog } from 'vant';
import { Toast } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Rate } from 'vant';
import { ImagePreview } from 'vant';
import { Tab, Tabs } from 'vant';


Vue.use(Tab);
Vue.use(Tabs);

// 全局注册
Vue.use(ImagePreview);

Vue.use(Rate);

Vue.use(AddressEdit);

Vue.use(AddressList);

Vue.use(Checkbox);
Vue.use(CheckboxGroup)

Vue.use(Toast);

// 全局注册
Vue.use(Dialog);

Vue.use(Vant);





Vue.prototype.$api = api

Vue.prototype.$checkLogin =  ()=>{

 
    Dialog.confirm({
      title: '登录后才可启用此功能',
      message: '是否跳转登录/注册页面',
    })
      .then(() => {
        router.push({name:'login'})
      })
      .catch(() => {
        // on cancel
      });
  

}





Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')