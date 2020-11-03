// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";

Vue.config.productionTip = false
Vue.use(VueRouter)

var Home = Vue.extend({
  template: '<div>' +
    '<h1>Home</h1>' +
    '<p>{{msg}}</p>' +
    '<p>' +
    '<router-link to="/home/phone">手机 </router-link>' +
    '<router-link to="/home/tablet">平板 </router-link>' +
    '<router-link to="/home/computer">电脑 </router-link>' +
    '</p>' +
    '<router-view></router-view>' +
    '</div>',
  data: function () {
    return {
      msg: 'Hello, vue router!'
    }
  }
});
//子路由组件
var phone = Vue.extend({
  template: '<div>This is phone</div>'
});
var tablet = Vue.extend({
  template: '<div>This is tablet</div>'
});
var computer = Vue.extend({
  template: '<div>This is computer</div>'
});
var About = Vue.extend({
  template: '<div>' +
    '<h1>About</h1>' +
    '<p>This is the tutorial about vue-router.</p>' +
    '</div>'
});
var User = Vue.extend({
  template: '<div>' +
    '<h1>User</h1>' +
    '<p>我是user组件,动态部分是{{dynamic}}</p>' +
    '</div>',
  computed: {
    dynamic: function () {
      return this.$route.params.id
    }
  },
  watch: {
    //利用watch来监听$route的变化,可以进行更多的操作。to表示的是你要去的那个组件，from表示的是你从哪个组件过来的，它们是两个对象。
    $route: function (to, from) {
      console.log("to:" + to)
      console.log("from:" + from)
    }
  }
});
var router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          name: 'phone',
          path: "phone",
          component: phone
        },
        {
          name: 'tablet',
          path: "tablet",
          component: tablet
        },
        {
          path: "computer",
          component: computer
        },
        //当进入到home时，下面的组件显示
        {
          path: "",
          component: phone
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
});
//路由跳转执行
router.beforeEach((to, from, next) => {
  console.log('beforeEach  ' + to.fullPath)
  next()
});
router.afterEach((to, from) => {
  console.log('afterEach  ' + from.fullPath)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})


