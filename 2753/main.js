// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0].split(" ")[0]);

console.log((a % 4 == 0 && a % 100 != 0) || a % 400 == 0 ? 1 : 0);
