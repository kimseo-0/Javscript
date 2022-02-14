function binary_search(array, target, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2)

    if (start === end) {
        return mid
    } else if (target < array[mid]) {
        return binary_search(array, start, mid - 1);
    } else {
        return binary_search(array, mid + 1, end);
    }
}


let input = require("fs").readFileSync("../../test.txt").toString().split("\n");
let N, M;
N = parseInt(input[0])
let product = [];
for (const inputElement of input[1]) {
    product.push(inputElement.toString().split(" ").map((x) => {return parseInt(x)}));
}

M = parseInt(input[2])
let order = [];
for (const inputElement of input[3]) {
    order.push(inputElement.toString().split(" ").map((x) => {return parseInt(x)}));
}

product.sort()

let answer;
for (const orderElement of order) {
    let result = binary_search(product, orderElement, 0, N - 1)

    if (result === -1 ) {
        answer += 'no '
    }
    else {
        answer += 'yes '
    }
}

