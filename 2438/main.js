// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = Number(input[0].split(" ")[0]);

let stars = [];

for (let i = 1; i < a + 1; i++) {
    stars.push("*".repeat(i));
}

console.log(stars.toString().replace(/,/g, "\n"));
