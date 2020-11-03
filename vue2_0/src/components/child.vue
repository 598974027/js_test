<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{message2}}</h3>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    data() {
      return {
        message2: ''
      }
    },
    created() {
      console.log("created");
    },
    mounted() {
      console.log("mounted");
      this.$emit('zhishi', '我是父组件啊啊啊')
    },
    methods: {
      setMessage(m) {
        this.message2 = m;
      }
    },
    watch: {},
    computed: {}
  }
</script>

<style scoped>
</style>
