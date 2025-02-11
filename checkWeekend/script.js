// a program that will check whether the date specified by the user falls on a weekend.
// The date should be entered in the format YYYY-MM-DD.

let date = new Date(2025, 1, 2);

if (date.getDay() == 0 || date.getDay() == 6) console.log('Weekend!');
else if (date.getDay() != 0 || date.getDay() != 6) console.log("It's not the weekend");