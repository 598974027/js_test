<template>
    <div id="app">
        <span ref="mySpan">{{ firstName}} </span><br/>
        <span>{{ lastName}} </span><br/>
        <span>{{ fullName}} </span>
        <!-- 父组件给子组件传值 -->
        <xxx ref="xxx1" msg="xxxxxx" @childEvent="methods2"/>
        <!-- 父组件给子组件传变量 -->
        <xxx ref="xxx2" :msg="lastName" v-on:childEvent="methods2"/>
        <button @click="methods1">按钮</button>
    </div>
</template>

<script>
    import xxx from './components/component1.vue'

    /**
     * 计算属性和属性监听的区别：
     * 1.计算属性变量在computed中定义，属性监听在data中定义。
     * 2.计算属性是声明式的描述一个值依赖了其他值，依赖的值改变后重新计算结果更新DOM。属性监听的是定义的变量，当定义的值发生变化时，执行相对应的函数。
     */

    export default {
        name: 'App',
        components: {//该组件的子实例
            xxx
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
                this.methods()
            }
        },
        methods: {//methods将被混入到Vue实例中，可以直接通过VM实例访问这些方法，或者在指令表达式中使用。方法中的this自动绑定为Vue实例
            methods() {
                // eslint-disable-next-line no-debugger
                debugger
                console.log('****************')
            },
            methods1: function () {
                console.log('methods1')
                this.firstName = new Date()
                // this.lastName = Math.floor(Math.random() * 10)
            },
            methods2: function (data) {
                alert(this.$refs.xxx1._data.zam)
                console.log('methods2')
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
