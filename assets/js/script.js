"use strict";

let testName = "Cavid";
let newArr = [];

function reverseStr(name) {
    for (let i = 0; i < name.length; i++) {
        newArr.push(name[i]);
    }    
    var reversedArr = newArr.reverse();
    // console.log(reversedArr.join());
    console.log(reversedArr.toString().replaceAll(",", ""));
}
reverseStr(testName);

//#region ClassTask
// let date = new Date();
// console.log(date.getFullYear() + " " + date.getMonth() + " " + date.getDay());

// var name = "test";
// var name = "salam";
// console.log(name);

// if (true) {
//     var age = 60;
// }
// console.log(age);

// function test() {
//     var age = 55;
//     console.log(age);
// }
// test();

// let address = "ehmedli";
// console.log(address.length);
// console.log(address.includes("m"));

// function search(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "t") {
//             return true;
//         }
//     }   
//     return false;
// }
// console.log(search(address)? "Found":"not found!");

// console.log(address[0]);
// console.log(address.at[0]);
// console.log(address.charAt[1]);
// console.log(address.charCodeAt[0]);
// console.log(address.slice(1,3));
// console.log(address.substring(1,3));
// console.log(address.replace("Ehmedli", "hello sevda"));
// console.log(address.replaceAll("e", "hi"));
// console.log(address.toLocaleLowerCase());
// console.log(address.toUpperCase());
// let str = "hello";
// console.log(address.concat(str));
// console.log(address.trimStart());
// console.log(address.trimStart("e".toUpperCase()));  

// let name = "Musa";
// let surname = "Afandiyev";
// let email = "musaha@code.edu.az";
// let password = 12345;
// let emails = ["musaha@code.edu.az", "hello123@ada.edu.az", "afandiyev.m@gmail.com", "codeacademy@gmail.com"];
// function Login() {
//     for (let i = 0; i < emails.length; i++) {
//         if(emails[i] == email){
//             console.log("This email already used!");
//             break;
//         }else{
//             console.log("Registered succesfully!");
//             break;
//         }
//     }
// }
// Login();

// function Login() {
//     if (emails.includes(email)) {
//         return true;
//     }
//     return false;
// }
// console.log(Login() ? "This email already used!" : "Registered succesfully!");

// function Login() {
//     for (let i = 0; i < emails.length; i++) {
//         if(emails[i] == email){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(Login() ? "This email already used!" : "Registered succesfully!");

// let input = "hello";
// function makeuppercaseOfFirst(input) {
//     const newStr = input[0].toUpperCase() + input.slice(1);
//     return newStr;
// }
// console.log(makeuppercaseOfFirst(input));

// let names = ["Musa", "Murad", "Cavad", "Elvin", "Ferid"];

// console.log(names[0]);
// console.log(names[names.length-1]);
// console.log(names.reverse);
// console.log(names.sort());
// console.log(names);
// console.log(names.join(": "));
// console.log(names.toString());

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// function filterStr(numbers) {
//     let oddArr = numbers.filter(m=>m%2==1)
//     return oddArr;
// }
// console.log(filterStr(numbers));
//#endregion