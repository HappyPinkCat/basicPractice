// 复制数组
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice();
console.log(newArr); // [1, 2, 3, 4, 5]

const arr11 = [1, 2, 3, 4, 5];
const newArr11 = arr.slice(1, 4);
console.log(newArr11); // [2, 3, 4]前开后闭

// 最后3元素
const arr22 = [1, 2, 3, 4, 5];
const newArr22 = arr.slice(-3);
console.log(newArr22); // [3, 4, 5]