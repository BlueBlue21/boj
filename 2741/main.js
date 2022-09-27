// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0].split(" ")[0]);

let numbers = [];

for (let i = 1; i < a + 1; i++) {
    numbers.push(i);
}

console.log(numbers.toString().replace(/,/g, "\n"));
