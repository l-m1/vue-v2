<template>
    <div>
        <h2>{{message}}</h2>
        <h2 id="title">我是标题</h2>
        <button @click="btnclick">按钮</button>
    </div>  
</template>

<script>
export default {
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