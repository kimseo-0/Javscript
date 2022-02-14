function BFS(graph, x, y) {
    let queue = new Array([x, y]);

    let dx = [1, -1, 0 ,0];
    let dy = [0 ,0 , 1, -1]

    while (queue.length !== 0) {
        let [x, y] = queue.shift()
        for (let i = 0; i < 4 ; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx <= -1 || nx >= N || ny <= -1 || ny >= M) {
                continue;
            }
            if (graph[nx][ny] === 0) {
                continue;
            }
            if (graph[nx][ny] === 1) {
                graph[nx][ny] = graph[x][y] + 1

                if ((nx === N - 1) && (ny === M - 1)) {
                    return;
                }
                queue.push([nx, ny])
            }
        }
    }
}


let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let [N, M] = input[0].toString().split(" ")
    .map((x) => {
        return parseInt(x)
    });
// 다시 하기
let map_list = input.slice(1)
    .map((row) => {
        return row.trim().toString().split("").map((x) => {
            return parseInt(x);
        });
    });

BFS(map_list, 0, 0);
// console.log(map_list)
console.log(map_list[N - 1][M - 1]);