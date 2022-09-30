// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let numbers = [];
let strings = [];

for (let i = 0; i < input.length; i++) {
    let nowInput = input[i];
    if (nowInput != "") numbers.push(nowInput.split(" "));
}

for (let i = 0; i < numbers.length; i++) {
    const a = Number(numbers[i][0]);
    const b = Number(numbers[i][1]);

    if (a != 0 && b != 1) strings.push(a > b ? "Yes" : "No");
}

console.log(strings.join("\n"));
