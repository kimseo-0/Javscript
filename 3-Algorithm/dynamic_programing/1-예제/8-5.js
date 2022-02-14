
let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N = parseInt(input[0])

let DP = new Array(N).fill(0);

for (let i = 3; i < N + 1; i++) {
    DP[i] = DP[i - 1] + 1
    if (i % 2 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1)
    }
    if (i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1)
    }
    if (i % 5 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 5] + 1)
    }
}

console.log(DP[N])