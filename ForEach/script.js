
let arrayOfCharacters = ['SpongeBob', 'Donald Duck', 'Mickey Mouse', 'Bugs Bunny', 'Daffy Duck'];
let numbers = [1, 2, 3, 4, 5, 6, 7];

// all values ​​from the array will be printed
arrayOfCharacters.forEach(function (item) {
    return item;
})

// square of numbers from the array
numbers.forEach(function numbersSquare(num) {
    square = num * num;
    return square;
})

// a comma after each value in the array except the last one
arrayOfCharacters.forEach(function commas(element, index) {
    if (index !== arrayOfCharacters.length - 1) element += ',';
    return element;
})

