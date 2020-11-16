<template>
    <div>
        <h1>{{ msg }}</h1>

        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label><br><br>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label><br>
        <span>Checked names: {{ checkedNames }}</span><br><br>

        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label><br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label><br>
        <span>Picked: {{ picked }}</span><br><br>

        <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span><br><br>

        <select v-model="selected2">
            <option v-for="option in options" :key="option.value">{{ option.text }}</option>
        </select>
        <span>Selected: {{ selected2 }}</span><br><br>

    </div>
</template>

<script>
    export default {
        name: 'component2',
        props: {
            msg: String
        },
        data() {
            return {
                message: '',
                checked: true,
                checkedNames: [],
                picked: '',
                selected: '',
                selected2: '',
                options: [
                    {text: 'One', value: 'A'},
                    {text: 'Two', value: 'B'},
                    {text: 'Three', value: 'C'}
                ]
            };
        },
    }

    import Vue from 'vue'

    const data = {a: 1};
    const vm = new Vue({data: data})
    // vm.$data === data //true
    // vm.$el === document.getElementById('example') //true
    // eslint-disable-next-line no-unused-vars
    vm.$watch('a', function (newVal, oldVal) {
        console.log('newVal:' + newVal)
    })
    vm.$data.a = 2
</script>

<style scoped>
</style>
