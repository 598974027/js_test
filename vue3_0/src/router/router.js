import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '*',
            meta: {
                title: "404"
            },
            component: () => import('@/views/404')
        },
        {
            path: '/',
            meta: {
                title: "home"
            },
            component: () => import('@/views/home')
        },
        {
            path: '/p1',
            name: 't1',
            meta: {
                title: "视图1"
            },
            component: () => import('@/views/view1')
        },
        {
            path: '/p2',
            name: 't2',
            meta: {
                title: "视图2"
            },
            component: () => import('@/views/view2')
        },
        {
            path: '/p3/:id',
            meta: {
                title: "视图3"
            },
            component: () => import('@/views/view3')
        },
        {
            path: '/p4',
            meta: {
                title: "视图4"
            },
            component: () => import('@/views/users'),
            children: [{
                path: ':username',
                name: 'xxx',
                component: () => import('@/views/user')
            }]
        },
    ]
})
