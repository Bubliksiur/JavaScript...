//  a program that will calculate how many days have passed since the user's birthday.
//  The date should be entered in the format YYYY-MM-DD.

let birthday = new Date(2024, 5, 7);
let date = new Date();

let difference = date.getTime() - birthday.getTime();
let daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log(`${daysValue} days have passed since your birthday`);