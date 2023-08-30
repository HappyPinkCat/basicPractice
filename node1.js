const {log}=require('./logger')//防止被覆盖
import { EventEmitter } from 'node:events';
const path = require('node:path');
const fs = require('fs');
const os=require('os')
let a =1
console.log(a,'~~~');
// console.log(window);node没这个的
console.log(global.a);//undefined
console.log(module);
log('xxx')
console.log(__filename);
console.log(__dirname);
let pathObj=path.parse(__filename)
console.log('pathObj:',pathObj);
let totalMemory=os.totalmem()
console.log(`totalMemory:${totalMemory}`);

