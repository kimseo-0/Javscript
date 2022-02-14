let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let [N, M] = input[0].toString().split(" ")
    .map((x) => {
        return parseInt(x)
    });
let [x, y, d] = input[1].toString().split(" ")
    .map((x) => {
        return parseInt(x)
    });
// 다시 하기
let map_list = input.slice(2)
    .map((row) => {
        return row.toString().split(" ").map((x) => {
            return parseInt(x);
        });
    });

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];
d_type = [0, 1 , 2, 3];

let nx, ny;


map_list[x][y] = 2;
let count = 1
while (true) {
    let movable = false;
    for (let i = 0; i < 4 ; i++) {
        d = (d + 1) % 4
        nx = x + dx[d];
        ny = y + dy[d];

        if (map_list[nx][ny] === 0) {
            map_list[nx][ny] = 2;
            x = nx;
            y = ny;
            count += 1;
            movable = true;
        }
    }

    if (!movable) {
        nx = x + dx[(d + 2) % 4];
        ny = y + dy[(d + 2) % 4];
        if (map_list[nx][ny] === 1) {
            break;
        } else {
            x = nx
            y = ny
        }
    }
}

console.log(count)