// Not done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0].split(" ")[0]);
const b = Number(input[0].split(" ")[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
