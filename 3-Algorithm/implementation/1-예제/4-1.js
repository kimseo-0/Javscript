let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N = input[0]; // 5
let move_direction = input[1].toString().split(" "); //["R", "R", "R", "U", "D", "D"];

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let x = 1;
let y = 1;
let nx, ny;
for (const move of move_direction) {
    nx = move === "L" ? x + dx[0] :
         move === "R" ? x + dx[1] :
         move === "U" ? x + dx[2] : x + dx[3]
    ny = move === "L" ? y + dy[0] :
         move === "R" ? y + dy[1] :
         move === "U" ? y + dy[2] : y + dy[3]
    if (nx >= 1 && nx <= N && ny >= 1 && ny <= N) {
        x = nx;
        y = ny;
    }

}
console.log(x + ' ' + y)