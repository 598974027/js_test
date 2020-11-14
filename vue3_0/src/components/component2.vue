<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'component2',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
</style>
