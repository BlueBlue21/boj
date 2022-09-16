// 1000 - Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const numbers = [];

for (i = 0; i < input.length; i++) {
    if (input[i] != " ") {
        numbers.push(Number(input[i]));
    }
}

console.log(numbers[0] + numbers[1]);
