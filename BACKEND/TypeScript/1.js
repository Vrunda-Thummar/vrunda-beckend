// let a : number = 101; 
// let a : any = 101; 
// let a : number[] = 101; 
// let a : Array<number> = [101]; 
// let a : Object = [101]; 
// console.log(a);
// let data : number[] = [11, 22, 33];
// let data : [string, number, string, number] = ["11" , 22 , "33" , 44];
// data.push(55);
// console.log(data);
// function sayHello(a: number, b: string) : number | string 
// {
//     return a + b;
// }
// console.log(sayHello(2, "5"));
// class hello{
//     a: number; b: boolean;
//     constructor(x: number, y: boolean){
//         this.a = x;
//         this.b = y;
//     }
// }
// interface person {
//     name ?: string;
//     gender ?: string;
//     email ?: string;
//     age ?: number;
// }
// let data : person = {
//     name: "jhon Peter",
//     age: 25,
//     gender: "Male",
//     email: "hello@test.in",
// }
var color;
(function (color) {
    color[color["sky"] = 0] = "sky";
    color[color["green"] = 1] = "green";
    color[color["orange"] = 2] = "orange";
    color[color["yellow"] = 3] = "yellow";
})(color || (color = {}));
var data = color.yellow;
