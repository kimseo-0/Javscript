let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let col = input.toString().charCodeAt(0) - "a".charCodeAt(0);
let raw = parseInt(input[1]);

let dx = [2, 2, 1, 1, -1, -1, -2, -2]
let dy = [1, -1, 2, -2, 2, -2, 1, -1];

let x = 1;
let y = 1;
let nx, ny;

let count = 0
for (let i = 0; i < 8; i++) {
    nx = x + dx[i];
    ny = y + dy[i]
    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) {
        count += 1;
    }
}
console.log(count)