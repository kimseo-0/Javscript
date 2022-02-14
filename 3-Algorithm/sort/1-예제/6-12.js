let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N, K;
[N, K] = input[0].toString().split(" ").map((x) => {return parseInt(x)});
let list_A = [];
for (const inputElement of input[1]) {
    list_A.push(inputElement.toString().split(" ").map((x) => {return parseInt(x)}));
}
let list_B = [];
for (const inputElement of input[2]) {
    list_B.push(inputElement.toString().split(" ").map((x) => {return parseInt(x)}));
}

list_A.sort();
list_B.sort().reverse();

for (let i = 0; i < K; i++) {
    if (list_A[i] >= list_B[i]) {
        break;
    }
    list_A[i] = list_B[i];
}

const reducer = (accumulator, curr) => accumulator + curr;
console.log(list_A.reduce(reducer))

// js 배열 합
// https://www.delftstack.com/ko/howto/javascript/javascript-sum-of-array/#:~:text=reduce()%20%EB%A9%94%EC%84%9C%EB%93%9C%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC%20JavaScript%20%EB%B0%B0%EC%97%B4%EC%9D%98%20%EB%B0%B0%EC%97%B4%20%ED%95%A9%EA%B3%84,-reduce()%20%EB%A9%94%EC%86%8C%EB%93%9C&text=%EB%88%84%EC%82%B0%EA%B8%B0%EB%8A%94%20%EB%B0%B0%EC%97%B4%EC%9D%84%20%ED%86%B5%ED%95%B4,%ED%95%A9%EA%B3%84%EB%A5%BC%20%EC%96%BB%EC%9D%84%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.