<template>
    <div>
        <h1>{{ zam }}3</h1>
        <h2>{{ $route.params.id }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'v3',
        components: {},
        props: {},
        data() {
            return {
                zam: 'zam'
            };
        },
        methods: {
            methods() {
            }
        }
    }
</script>

<style scoped>
</style>
