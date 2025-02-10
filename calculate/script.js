
//  a program that will calculate how many days remain until the end of the current year

const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let secounds = date.getSeconds();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

const nextYear = new Date(2025, 11, 31, 23, 59, 59,);
let obliczenia = nextYear.getTime() - date.getTime();
let daysValue = Math.floor(obliczenia / (1000 * 60 * 60 * 24));
console.log(`${daysValue} days left until the end of this year`);
