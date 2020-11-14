<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="methods">子组件按钮</button>
    </div>
</template>

<script>
    export default {
        name: 'component1',
        comments: {},
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
            console.log('beforeCreate' + this.zam)
        },
        created() {
            console.log('created' + this.zam)
        },
        beforeMount() {
            console.log('beforeMount' + this.zam)
        },
        mounted() {
            console.log('mounted' + this.zam)
        },
        beforeUpdate() {
            console.log('beforeUpdate' + this.zam)
        },
        updated() {
            console.log('updated' + this.zam)
        },
        activated() {
            console.log('activated' + this.zam)
        },
        deactivated() {
            console.log('deactivated' + this.zam)
        },
        beforeDestroy() {
            console.log('beforeDestroy' + this.zam)
        },
        destroyed() {
            console.log('destroyed' + this.zam)
        }
    }
</script>

<style scoped>
</style>
