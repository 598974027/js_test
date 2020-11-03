<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}, {{fullName}}</h1>
    <child message="我是子组件一"></child>
    <child v-bind:message="a+b"></child>
    <child v-bind:message="msg"></child>
    <child ref="zzz"></child>
    <child @zhishi="showMsg"></child>
    <div>
      <header>
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/user/123">User123</router-link>
        <router-link to="/user/456">User456</router-link>
      </header>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import child from './components/child'
  import axios from 'axios'

  const http = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

  export default {
    data() {
      return {
        title: '',
        a: '我是子组件二',
        b: 123456,
        msg: '我是子组件三' + Math.random(),
        firstName: 'lbj',
        lastName: '23'
      }
    },
    created() {
      console.log("parent-created");
    },
    mounted() {
      console.log("parent-mounted");
      this.$refs.zzz.setMessage('你是子组件，挺好的');
      this.firstName = '小号';
      this.fullName = 'lbj mvp';
      this.getData();
    },
    components: {
      child
    },
    methods: {
      showMsg(title) {
        this.title = title;
      },
      getData() {
        axios.get('/static/zam.txt').then(function (res) {
          console.log(res);
        }).catch(function (error) {
          alert(error);
        });
      }
    },
    computed: {
      fullName: {
        get() {
          return this.firstName + ' ' + this.lastName
        },
        set(val) {
          const names = val.split(' ');
          this.firstName = names[0];
          this.lastName = names[1];
        }
      }
    },
    watch: {
      firstName: function (val) {
        console.log('firstName:' + val);
      },
      lastName: function (val) {
        console.log('lastName:' + val);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
