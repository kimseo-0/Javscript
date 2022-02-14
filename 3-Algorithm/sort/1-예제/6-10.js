let num = [];
let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N = input[0];
for (const inputElement of input.slice(1)) {
    num.push(parseInt(inputElement));
}

num.sort().reverse();
for (const numElement of num) {
    console.log(numElement)
}