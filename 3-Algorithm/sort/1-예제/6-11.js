
let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N = input[0];
let student = [];
for (const inputElement of input.slice(1)) {
    num.push(inputElement.toString().split(' ').map((x, index) => {
            if (index === 1) {
                return parseInt(x)
        }
    }));
}

num.sort(function (a, b) {
    return a[1] - b[1];
})

for (const numElement of num) {
    console.log(numElement)
}