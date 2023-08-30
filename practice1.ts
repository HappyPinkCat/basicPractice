// =========================================函数
function add(a:number,b:number,c?:string):number{//string,boolean,any //可选参数c
    console.log(c)
    return a+b
}
add(1,2)
function sayHi():void{//没有返回值
    alert('hi~')
}
// =========================================类型推断
let a1=1,b='初始值有类型推断功能'
// =========================================数组
let arr13:number[]
arr13=[1,2,3,4]
let arr21:number[][]
arr21=[[1],[2],[3]]
// =========================================元组
let x: [string, number];
x = ['hello', 1]; // OK

let point:[number,number,number?]
point=[1,2,3]
point=[1,2]
// =========================================限定值可选范围
let color:number|string
let gender:'male'|'female'
let index:3|4|5
// =========================================接口-对象
interface User{
    name:string;
    id:number;
}
function getUserName(callback:(data:string)=>void){
}
getUserName((data)=>{
     alert(data*2)
})
// =========================================类型别名!!!
type UserID=number|string
function getUserID(userId:UserID){}