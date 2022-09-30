// Baekjoon project generator!

const fs = require("fs");
const path = require("path");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function setColor(string, color) {
    let escapeColor = "\033[0m";
    if (color == "red") return "\033[31m" + string + escapeColor;
    if (color == "yellow") return "\033[33m" + string + escapeColor;
    if (color == "blue") return "\033[34m" + string + escapeColor;
    return setColor("Must need color or wrong color!", "red");
}

if (process.platform != "win32")
    console.log(setColor("If you not using windows, some have bugs!", "red"));

console.log(setColor("Baekjoon project generator!", "blue"));

readline.question(
    setColor("What is folder name? : ", "yellow"),
    (folderName) => {
        const folderPath = path.join(__dirname, `/${folderName}`);

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            fs.writeFileSync(
                path.join(__dirname, `/${folderName}/input.txt`),
                ""
            );
            fs.writeFileSync(
                path.join(__dirname, `/${folderName}/main.js`),
                '// Not done!\n\nconst fs = require("fs");\n\nconst filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";\nconst input = fs.readFileSync(filePath).toString().split("\\n");\n\nconst a = Number(input[0].split(" ")[0]);\n'
            );
            fs.writeFileSync(
                path.join(__dirname, `/${folderName}/run.bat`),
                "@echo off\necho Created by baekjoon project generator!\nnode --stack-size=65536 main.js\n"
            );
            console.log(
                setColor(`\nDone!\n\ncd ${folderPath}\n\n.\\run.bat`, "blue")
            );
        } else {
            console.log(setColor(`\nFolder exists!\n${folderPath}`, "red"));
        }
        readline.close();
    }
);
