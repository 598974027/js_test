<template>
    <div>
        <el-input placeholder="请输入内容" v-model="input" maxlength="10" show-word-limit clearable/>

        属性方式：
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1">
        </el-input>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
            <template slot="prepend">Http://</template>
        </el-input>
        slot方式：
        <el-input placeholder="请选择日期" v-model="input3">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
        </el-input>
        <el-input placeholder="请输入内容" v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <template slot="append">.com</template>
        </el-input>

        <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea">
        </el-input>

    </div>
</template>

<script>
    export default {
        name: 'component4',
        props: {},
        data() {
            return {
                input: '',
                input1: null,
                input2: null,
                input3: null,
                input4: null,
                textarea: '123456',
            };
        },
    }
</script>

<style scoped>
</style>
