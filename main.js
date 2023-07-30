// console.log(Number.isNaN(NaN));
// console.log(isFinite(Infinity));
// console.log(parseInt('100ps'));
// console.log(Math.pow(3,3))
// let a='asd'
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())

//let myTxt="hello, my name elestun"
// console.log(myTxt.includes('my'));
// console.log(myTxt.startsWith("qhello"))
// console.log(myTxt.replace('hello','elbrus'))
// console.log(myTxt.slice(0,4));

//Array  Array   Array////
// let myarry=[1,2,3,4];
// console.log(myarry.at(-3));
// console.log(myarry.includes(3));
// myarry.push(5);
// console.log(myarry)

let num = [1, 2, 3, 4, 5];
//console.log(num)
// any(num)
// console.log(num)
// function any(numbers){
//     numbers[2]=55;
// }

// for(let number of num){
//     console.log(number);
// }
// let myArry= new Array(1,3,4,6,7,8)
// console.log(myArry);
// let myArry=[2,3,4,5,6,7,8]
// let myArry2=[20,21,23]
// myArry.splice(3,3,99,101,7);
// console.log(myArry.concat(myArry2));
// console.log(myArry)
// console.log(myArry.join('-'))
// let myArry=[2,4,1,3,5,6];
// myArry.sort();
// myArry.reverse();
// console.log(myArry)
// function reversed(arr){
//     let reverse=[];
//     for(let i=arr.length-1;i>=0;i--){
//         reverse.push(arr[i]);
//     }
//     return reverse;
// }
// console.log(reversed([1,2,3,4,5]))

// let sum= (a,b)=>{
//     return a+b;

// }
// let multiply = (a,b) =>{
//    return a*b;
// }
// let substract =(a,b) =>{
//     return a-b;
// }
// let doOperation=(a,b,operation) =>{
//     console.log(operation(a,b));

// }

// doOperation(6,3,sum);
// doOperation(3,4,multiply);

// let a=[5,9,11,13,15,2];
// a.sort((a,b)=>a-b);

// console.log(a)

// let b=[4,3,17,99,76];
// b.sort(function(a,b){
//     return a-b;
// })

// console.log(b)

// let c=[4,7,16,3,2];
// c.sort((a,b) =>{
//     return a-b;
// })
// console.log(c)
// let arr =[2,3,4,5,6];
// // arr.forEach((element,i,array)=>{
// // console.log(element,i,array);
// // });
// let ar=arr.map((elment,i,a)=>{
//     console.log(elment,i,a)
// return elment*2;
// })
// console.log(ar)

// let arr=[2,4,17,1];
// let ar=arr.map((element)=>{
//     return element*2

// });
// console.log(ar)
let student = {
  name: " elbrus",
  payment: 2000,
  age: 11,
  sur: "ss",
};
// console.log(student.payment ?? "odenis tapilmadi");

// let a = 12;
// let b = 13;
// let [c, f, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest);
// [a, b] = [b, a];
// console.log(a);
let { name, ...rst } = student;
console.log(name, rst);
sum(1, 2, 2, 3, 4);
function sum(a, ...numbers) {
  console.log(a, numbers);
}

let a = [1, 23, 4];
let b = [2, 4, 5, ...a];
console.log(b);
document.body.childNodes[1].style.color = "red";
document.body.firstElementChild.style.color = "blue";
