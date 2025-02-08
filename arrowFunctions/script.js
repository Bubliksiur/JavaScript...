const students = [
    { name: "Marian", score: 4.51, points: 19 },
    { name: "Ania", score: 4.23, points: 21 },
    { name: "Ala", score: 3.21, points: 21 },
    { name: "Katarzyna", score: 3.77, points: 32 },
    { name: "Józef", score: 4.21, points: 22 },
    { name: "Rafał", score: 3.43, points: 23 },
]

// normal functions
const list = students
    .filter(function (s) {
        return s.score >= 3.5;
    })
    .filter(function (s) {
        return s.points >= 20;
    })
    .map(function (s) {
        return s.name + ", " + s.score;
    })
    .forEach(function (str) {
        console.log(str);
    })

    // the same but with an arrow function 

    .filter(s => s.score >= 3.5)
    .filter(s => s.points >= 20)
    .map(s => s.name + ", " + s.score)
    .forEach(str => console.log(str))

// in this case the arrow function is simpler, shorter and better