// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = String(input[0].split(" ")[0]);

console.log(a.split("\r")[0] + "??!");
