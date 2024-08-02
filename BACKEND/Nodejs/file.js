const fs = require('fs');

let data = `
#include<stdio.h>
int main(){
    printf("vrunda");
    return 0;
}
`

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