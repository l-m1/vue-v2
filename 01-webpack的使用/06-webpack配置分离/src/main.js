//commonjs导入
const {sum,mul} = require('./js/mathUtils.js')


console.log(sum(20,30));
console.log(mul(20,30));

//ES6导入
import {age,name,height} from './js/info.js'

console.log(name);
console.log(age);
console.log(height);  


//依赖css文件 不需要写变量  
require('./css/style.css')

//依赖less文件
require('./css/special.less')
document.writeln('你好啊');

//依赖图片文件
require('./css/img.css')


//使用Vue进行开发 
import Vue from 'vue'
//import App from './vue/app.js' 
import App from './vue/App.vue'


new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})