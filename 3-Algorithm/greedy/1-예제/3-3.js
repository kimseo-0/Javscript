let card = [];
let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
for (const inputElement of input) {
    card.push(inputElement.toString().split(" ").map((x) => {return parseInt(x)}))
}

// 최대 최소 구하기 (1)
// let max = 0;
// let min;
// for (const cardElement of card) {
//     min = cardElement.reduce( function (previous, current) {
//         return previous > current ? current:previous;
//     });
//     if (min > max) {
//         max = min
//     }
// }

// 최대 최소 구하기 (2)
// Math.min(value1, value2, ...) > parameter로 array가 아님을 주의하자
let minList = card.map((x) => Math.min(...x))
let max = Math.max(...minList)
console.log(max)

// js Math.min : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
// js에서 최대 최소 구하기 : https://programmingsummaries.tistory.com/108