<template>
    <div>
        <h2>{{message}}</h2>
        <h2 id="title">我是标题</h2>
        <button @click="btnclick">按钮</button>
        <!-- 使用cpn组件 -->
        <Cpn/>
    </div>
</template>

<script>
/* 导入cpn组件 */
import Cpn from './Cpn.vue'
export default {
    name: "App",
    /* 注册cpn组件 */
    components: {
        Cpn
    },
    data() {
        return{
            message: 'Hello Webpack'
        }
    },
    methods: {
        btnclick() {
            console.log("哈哈哈哈");
        }
    }
}
</script>

<style scoped>
#title{
    color: green;
}
</style>