<template>
    <div>
        <h2>我是cpn组件</h2>
        <p>我是组件的内容，哈哈哈哈哈哈</p>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
/* 创建并导出cpn组件 */
export default {
    name: "Cpn",
    data() {
        return{
            message: 'cpn组件的信息'
        }
    }
}
</script>
<style scoped>

</style>