// Not done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const numbers = [];

// TODO: Fix numbers!
for (i = 0; i < input.length; i++) {
    if (input[i] != " ") {
        numbers.push(Number(input[i]))
    }
}

console.log(numbers)
