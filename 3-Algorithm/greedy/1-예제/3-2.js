let N, M, K;
let Num;
let input = require("fs").readFileSync("../../test.txt").toString().split("\n");

[N, M, K] = input[0].toString().split(" ");
M = parseInt(M)
K = parseInt(K)
Num = input[1].toString().split(" ");
Num = Num.map((x) => {return parseInt(x)});

Num.sort()

first_num = parseInt(Num[Num.length - 1])
second_num = parseInt(Num[Num.length - 2])

let result = ((first_num * K) + second_num) * Math.floor(M / (K + 1))
result += first_num * (M % (K + 1))

console.log(result)