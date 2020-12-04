<template>
    <div>
        <div class="child">
            <h3>这里是子组件</h3>
            <!--匿名插槽-->
            <slot :data="data"></slot>
            <!--具名插槽-->
            <slot name="up" :data="data1"></slot>
            <slot name="down" :data="data2"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'component3',
        props: {},
        data() {
            return {
                data: ['zhangsan', 'lisi',],
                data1: ['wanwu', 'zhaoliu',],
                data2: ['tianqi', 'xiaoba'],
            };
        },
    }
</script>

<style scoped>
</style>
