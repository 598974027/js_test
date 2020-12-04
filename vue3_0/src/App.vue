<template>
    <div id="app">
        <!--        <span ref="mySpan">{{ firstName}} </span><br/>-->
        <!--        <span>{{ lastName}} </span><br/>-->
        <!--        <span>{{ fullName}} </span>-->

        <!-- 父组件给子组件传值 -->
        <!--        <xxx ref="xxx1" msg="xxxxxx" @childEvent="method2"/>-->
        <!-- 父组件给子组件传变量 -->
        <!--        <xxx ref="xxx2" :msg="lastName" v-on:childEvent="method2"/>-->
        <!--        <button @click="method1">按钮</button>-->

        <child>
            <div class="tmpl" slot="up">
                <span>菜单1</span>
                <span>菜单2</span>
                <span>菜单3</span>
                <span>菜单4</span>
                <span>菜单5</span>
                <span>菜单6</span>
            </div>
            <div class="tmpl" slot="down">
                <span>菜单-1</span>
                <span>菜单-2</span>
                <span>菜单-3</span>
                <span>菜单-4</span>
                <span>菜单-5</span>
                <span>菜单-6</span>
            </div>
            <div class="tmpl">
                <span>菜单->1</span>
                <span>菜单->2</span>
                <span>菜单->3</span>
                <span>菜单->4</span>
                <span>菜单->5</span>
                <span>菜单->6</span>
            </div>
        </child>
        <!--第一次使用：用span展示数据-->
        <child>
            <template slot="up" slot-scope="user">
                <div class="tmpl">
                    <!--eslint-disable-next-line-->
                    <span v-for="item in user.data">{{ item }}</span>
                </div>
            </template>
        </child>
        <!--第二次使用：用列表展示数据-->
        <child>
            <template slot="down" slot-scope="user">
                <ul>
                    <!--eslint-disable-next-line-->
                    <li v-for="item in user.data">{{ item }}</li>
                </ul>
            </template>
        </child>
        <!--第三次使用：直接显示数据-->
        <child>
            <template slot-scope="user">
                {{ user.data }}
            </template>
        </child>
        <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
        <child>
            我就是模板
        </child>
    </div>
</template>

<script>
    import xxx from './components/component1.vue'
    import child from './components/component3.vue'

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
            child
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
            }
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
            }
        },
        beforeCreate() {
            console.log('beforeCreate' + this.firstName)
        },
        created() {
            console.log('created' + this.firstName)
        },
        beforeMount() {
            console.log('beforeMount' + this.firstName)
        },
        mounted() {
            console.log('mounted' + this.firstName)
        },
        beforeUpdate() {
            console.log('beforeUpdate' + this.firstName)
        },
        updated() {
            console.log('updated' + this.firstName)
        },
        activated() {//keep-alive 组件激活时调用
            console.log('activated' + this.firstName)
        },
        deactivated() {//keep-alive 组件停用时调用
            console.log('deactivated' + this.firstName)
        },
        beforeDestroy() {
            console.log('beforeDestroy' + this.firstName)
        },
        destroyed() {
            console.log('destroyed' + this.firstName)
        }
    }
</script>

<style>
</style>
