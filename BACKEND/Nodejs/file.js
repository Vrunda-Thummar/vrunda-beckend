// File system module 
 
const fs = require("fs"); //common js 
// import * as fs from "fs"; //ESM 
 
// file open , close , delete , rename , read , write , append , update 
 
// Open file 
 
// fs.open("./practice.txt" , (err , result) => { 
//     if(err){ 
//         console.log(err); 
//     } 
//     else{ 
//         console.log("File Open Successful"); 
//     } 
// }) 
 
// fs.openSync("./practice.c"); 
// console.log("File open successfull"); 
 
// Write 
 
// fs.writeFile('./hello.txt' , 'Hello, how are you?????' , (err) => { 
//     if(err){ 
//         console.log(err); 
//     } 
//     else{ 
//         console.log("File write successfully"); 
//     } 
// }) 
 
let data =  'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello'; 
 
// fs.writeFileSync('./hey.c' , data) 
// console.log('file run successfully'); 
 
// function add(a, b) { 
//   return a + b; 
// } 
 
// function sub(a, b) { 
//   return a - b; 
// } 
 
// read 
 
// let t1 = performance.now(); 
// console.log("start time: =======>", t1); 
// console.log("Addition ========>", add(10, 20)); 
// fs.readFile("./hello.txt", "utf-8", (err, data) => { 
//   if (err) { 
//     console.log(err); 
//   } else { 
//     console.log(data); 
//   } 
// }); 
 
// let t1 = performance.now(); 
// console.log("start time: =======>", t1); 
// let aa = fs.readFileSync('./hello.txt' , 'utf-8') 
// console.log(aa); 
// console.log("substraction ===============================> " , sub(10,20)); 
// let t2 = performance.now(); 
// console.log("end time ============> " , t2); 
// console.log("differences time ==============> " , t2 - t1); 
 
 
// Append method 
 
// fs.appendFile("./hello.txt" ,'utf-8' , (err) => { 
//     if(err){ 
//         console.log(err); 
//     } 
//     else{ 
//         console.log(data); 
//     } 
// }) 
 
// fs.appendFileSync('./hello.txt' , data) 
// console.log('Append success'); 
 
// rename 
 
// fs.rename('./hello.txt' , './jishu.txt' , () => { 
//     console.log('successfully renamed'); 
// }) 
 
// fs.renameSync('./hey.c' , './palak.c'); 
// console.log('successfully renamed'); 
 
// delete file  
 
// fs.unlink('./jishu.txt' , (err) => { 
//     if(err){ 
//         console.log(err); 
//     } 
//     else{ 
//         console.log('file deleted'); 
//     } 
// }) 
 
fs.unlinkSync('./palak.c'); 
console.log('file deleted');


// const fs = require('fs');

// let data = `
// #include<stdio.h>
// int main(){
//     printf("vrunda");
//     return 0;
// }
// `

// Append
// fs.appendFile('./hello.txt', data, (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("append successfully");
// })

// fs.appendFileSync('./hello.txt', data)
// console.log("append successfully");

// rename
// fs.rename('./hello.txt', "./vrunda.txt", (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("Rename successfully");
// })

// delete
// fs.unlink('./vrunda.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("delete.....");
// })