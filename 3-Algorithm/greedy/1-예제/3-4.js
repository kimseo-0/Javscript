let N, K;
let input = require("fs").readFileSync("../../test.txt").toString().split(" ");
N = parseInt(input[0]);
K = parseInt(input[1]);

let count = 0;
while (N > 1){
    if (N % K === 0) {
        N = Math.ceil(N / K);
    } else {
        N -= 1;
    }
    count += 1;
}

console.log(count)