<template>
    <div id="app">
        <!--        <span ref="mySpan">{{ firstName }} </span><br/>-->
        <!--        <span>{{ lastName }} </span><br/>-->
        <!--        <span>{{ fullName }} </span>-->
        <!--        <span>父组件给子组件传值 </span>-->
        <!--        <xxx ref="xxx1" msg="xxxxxx" @childEvent="method2"/>-->
        <!--        <span>父组件给子组件传变量  </span>-->
        <!--        <xxx ref="xxx2" :msg="lastName" v-on:childEvent="method2"/>-->
        <!--        <button @click="method1">按钮</button>-->

        <!--        <child>-->
        <!--            <div class="tmpl" slot="up">-->
        <!--                <span>菜单1</span>-->
        <!--                <span>菜单2</span>-->
        <!--                <span>菜单3</span>-->
        <!--                <span>菜单4</span>-->
        <!--                <span>菜单5</span>-->
        <!--                <span>菜单6</span>-->
        <!--            </div>-->
        <!--            <div class="tmpl" slot="down">-->
        <!--                <span>菜单-1</span>-->
        <!--                <span>菜单-2</span>-->
        <!--                <span>菜单-3</span>-->
        <!--                <span>菜单-4</span>-->
        <!--                <span>菜单-5</span>-->
        <!--                <span>菜单-6</span>-->
        <!--            </div>-->
        <!--            <div class="tmpl">-->
        <!--                <span>菜单->1</span>-->
        <!--                <span>菜单->2</span>-->
        <!--                <span>菜单->3</span>-->
        <!--                <span>菜单->4</span>-->
        <!--                <span>菜单->5</span>-->
        <!--                <span>菜单->6</span>-->
        <!--            </div>-->
        <!--        </child>-->
        <!--        <child>-->
        <!--            <template slot="up" slot-scope="user">-->
        <!--                <div class="tmpl">-->
        <!--                    <span v-for="item in user.data">{{ item }}</span>-->
        <!--                </div>-->
        <!--            </template>-->
        <!--        </child>-->
        <!--        <child>-->
        <!--            <template slot="down" slot-scope="user">-->
        <!--                <ul>-->
        <!--                    <li v-for="item in user.data">{{ item }}</li>-->
        <!--                </ul>-->
        <!--            </template>-->
        <!--        </child>-->
        <!--        <child>-->
        <!--            <template slot-scope="user">-->
        <!--                {{ user.data }}-->
        <!--            </template>-->
        <!--        </child>-->
        <!--        <child>-->
        <!--            我就是模板-->
        <!--        </child>-->

        <!--        <h3>{{ this.$store.state.count }}</h3>-->
        <!--        <h3>{{ this.$store.state.changeShow }}</h3>-->
        <!--        <h3>{{ this.$store.getters.getCount }}</h3>-->
        <!--        <h3>{{ this.$store.getters.isShow }}</h3>-->
        <!--        <h3>{{ abc }}</h3>-->
        <!--        <h3>{{ getCount }}</h3>-->
        <!--        <h3>{{ isShow }}</h3>-->
        <!--        <button @click="add">+</button>-->
        <!--        <button @click="del">-</button>-->

        <!--        <router-link to="/p1">跳转1</router-link>-->
        <!--        <br/>-->
        <!--        <router-link to="/p2">跳转2</router-link>-->
        <!--        <br/>-->
        <!--        <router-link :to="{ name: 't1'}">跳转</router-link>-->
        <!--        <br/>-->
        <!--        <router-link to="/p3/k1">跳转3</router-link>-->
        <!--        <br/>-->
        <!--        <router-link to="/p4/bob">跳转4</router-link>-->
        <!--        <br/>-->
        <!--        <router-link to="/p4/evan#foo">/p4/evan#foo</router-link>-->
        <!--        <br/>-->
        <!--        <router-link :to="{ path: '/p4/evan', query: { foo: 'bar', baz: 'qux' }}">/p4/evan?foo=bar&baz=qux</router-link>-->
        <!--        <br/>-->
        <!--        <router-link :to="{ name: 'xxx', params: { username: 'lbj' }}">xxx</router-link>-->
        <!--        <br/>-->
        <!--        <router-view></router-view>-->

        <lbj></lbj>
    </div>
</template>

<script>
    import xxx from './components/component1.vue'
    import child from './components/component3.vue'
    import lbj from './components/component4.vue'

    //使用辅助函数
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

    /**
     * 计算属性和属性监听的区别：
     * 1.计算属性变量在computed中定义，属性监听在data中定义。
     * 2.计算属性是声明式的描述一个值依赖了其他值，依赖的值改变后重新计算结果更新DOM。属性监听的是定义的变量，当定义的值发生变化时，执行相对应的函数。
     */

    export default {
        name: 'App',
        components: {//该组件的子实例
            // eslint-disable-next-line vue/no-unused-components
            xxx,
            // eslint-disable-next-line vue/no-unused-components
            child,
            lbj
        },
        props: {//用于父子组件的eventbus传值，是数组或对象，props的成员是子组件接收的来自父组件的数据
        },
        data() {//Vue实例的数据对象，Vue将会递归将data的属性转换为getter/setter，从而让data的属性能够响应数据变化
            return {
                firstName: 'lbj',
                lastName: 'goat',
            };
        },
        computed: {//Vue的计算属性，将被混入到Vue实例中。所有getter和setter的this上下文自动地绑定为Vue实例
            fullName: function () {
                console.log('computed')
                return this.firstName + ' ' + this.lastName
            },
            ...mapState({
                abc: state => state.count
            }),
            ...mapGetters([
                'getCount',
                'isShow'
            ]),
            ...mapMutations([]),
            ...mapActions([])
        },
        watch: {//整个为一个对象，键是需要观察的表达式，值是对应回调函数
            firstName: function () {
                console.log('watch')
                this.method()
            }
        },
        methods: {//methods将被混入到Vue实例中，可以直接通过VM实例访问这些方法，或者在指令表达式中使用。方法中的this自动绑定为Vue实例
            method() {
                // eslint-disable-next-line no-debugger
                this.$refs.xxx1._data.zam = 'hello'
                console.log('****************')
            },
            method1: function () {
                console.log('method1')
                this.firstName = new Date()
                // this.lastName = Math.floor(Math.random() * 10)
            },
            method2: function (data) {
                alert(this.$refs.xxx1._data.zam)
                console.log('method2')
                this.lastName = data
            },
            add: function () {
                this.$store.commit('addCount', 1)
                this.$store.dispatch('getAddCount', 1)
            },
            del: function () {
                this.$store.commit('delCount', 1)
                this.$store.dispatch('getDelCount', 1)
            },
        },
        beforeCreate() {
            // console.log('beforeCreate' + this.firstName)
        },
        created() {
            // console.log('created' + this.firstName)
        },
        beforeMount() {
            // console.log('beforeMount' + this.firstName)
        },
        mounted() {
            // console.log('mounted' + this.firstName)
        },
        beforeUpdate() {
            // console.log('beforeUpdate' + this.firstName)
        },
        updated() {
            // console.log('updated' + this.firstName)
        },
        activated() {//keep-alive 组件激活时调用
            // console.log('activated' + this.firstName)
        },
        deactivated() {//keep-alive 组件停用时调用
            // console.log('deactivated' + this.firstName)
        },
        beforeDestroy() {
            // console.log('beforeDestroy' + this.firstName)
        },
        destroyed() {
            // console.log('destroyed' + this.firstName)
        }
    }
</script>

<style>
</style>
