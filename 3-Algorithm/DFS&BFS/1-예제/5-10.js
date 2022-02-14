function DFS(graph, x, y) {
    if (x <= -1 || x >= N || y <= -1 || y >= M) {
        return false;
    }
    if (graph[x][y] === 0) {
        graph[x][y] = 1
        DFS(graph, x + 1, y);
        DFS(graph, x - 1, y);
        DFS(graph, x, y + 1);
        DFS(graph, x, y - 1);
        return true;
    }
}


let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let [N, M] = input[0].toString().split(" ")
    .map((x) => {
        return parseInt(x)
    });
// 다시 하기
let iceBox = input.slice(1)
    .map((row) => {
        return row.trim().toString().split("").map((x) => {
            return parseInt(x);
        });
    });

let count = 0
let result
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (iceBox[i][j] === 0) {
            result = DFS(iceBox, i, j);
            if (result === true) {
                count += 1;
            }
        }
    }
}

console.log(count)
