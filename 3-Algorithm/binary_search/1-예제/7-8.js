let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N, M;
[N, M] = input[0].toString().split(' ')
let productList = input[1].toString().split(' ').map(x => parseInt(x));

let start = 0;
let end = Math.max(...productList)
let mid, sum;
let result = 0;

while (start <= end) {
    mid = Math.floor((start + end) / 2);
    sum = 0
    for (const productElement of productList) {
        if (mid < productElement) {
            sum += (productElement - mid)
        }
    }
    if (M <= sum) {
        result = mid;
        start = mid + 1
    } else {
        end = mid - 1
    }
}

console.log(result)