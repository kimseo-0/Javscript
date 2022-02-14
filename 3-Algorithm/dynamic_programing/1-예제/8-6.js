let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N = parseInt(input[0])
let foodList = input[1].toString().split(' ').map(x => parseInt(x))

let DP;
(DP = []).length = N;
DP.fill(0);

DP[0] = foodList[0]
DP[1] = Math.max(foodList[1], foodList[0])

for (let i = 2; i < N; i++) {
    DP[i] = Math.max(DP[i - 1], DP[i - 2] + foodList[i])
}

console.log(DP[N - 1])