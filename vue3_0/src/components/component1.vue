<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1>{{ zam }}</h1>
        <button @click="methods">子组件按钮</button>
        <hello msg="优秀"></hello>
    </div>
</template>

<script>
    import hello from './component2.vue'

    export default {
        name: 'component1',
        components: {
            hello
        },
        props: {
            msg: {
                type: String, //指定传入的类型
                default: 'abc', //指定默认的值
                required: true, //是否必须
                isValid: function (value) { //验证
                    alert(value)
                    return value;
                }
            },
            prop2: Number
        },
        data() {
            return {
                zam: 'zam'
            };
        },
        methods: {
            methods() {
                this.zam = 'ttt' + Math.floor(Math.random() * 10)
                //子组件给父组件传值
                this.$emit('childEvent', this.zam)
            }
        },
        computed: {},
        watch: {},
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        activated() {
        },
        deactivated() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>
</style>
