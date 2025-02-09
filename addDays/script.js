
//  a program that will add a specified number of days to a given date and display the new date.

let data = new Date(2025, 0, 27);
let daysToAdd = 18;

data.setDate(data.getDate() + daysToAdd);
console.log(data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate());