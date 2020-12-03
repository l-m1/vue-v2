export default {
    template: `
    <div>
        <h2>{{message}}</h2>
        <h2>我是标题</h2>
        <button @click="btnclick">按钮</button>
    </div>
    `,
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