// Done!

const fs = require("fs");

const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const a = String(input[0].split(" ")[0]);

let strings = [];

for (let i = 0; i < a.length; i++) {
    strings.push(
        a[i] == a[i].toUpperCase() ? a[i].toLowerCase() : a[i].toUpperCase()
    );
}

console.log(strings.join(""));
