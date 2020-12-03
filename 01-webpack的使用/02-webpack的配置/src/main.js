
//commonjs导入
const {sum,mul} = require('./mathUtils.js')


console.log(sum(20,30));
console.log(mul(20,30));

//ES6导入
import {age,name,height} from './info.js'

console.log(name);
console.log(age);
console.log(height);