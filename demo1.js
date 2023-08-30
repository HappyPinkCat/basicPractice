// ===================================================8.17
// 创建数组
let arr0 = [1, 2, 3, 4, 5];
let arr1 = new Array(1, 2, 3, 4, 5);
let arr2 = new Array(5).fill(0);


// slice使用
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice();
console.log(newArr); // [1, 2, 3, 4, 5]复制数组

const arr11 = [1, 2, 3, 4, 5];
const newArr11 = arr.slice(1, 4);
console.log(newArr11); // [2, 3, 4]前开后闭

const arr22 = [1, 2, 3, 4, 5];
const newArr22 = arr.slice(-3);
console.log(newArr22); // [3, 4, 5]// 最后3元素