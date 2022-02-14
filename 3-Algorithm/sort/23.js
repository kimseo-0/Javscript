function compare(a, b) {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
        if (a[2] < b[2]) return -1;
        else if (a[2] > b[2]) return 1;
        else {
            if (a[3] < b[3]) return 1;
            else if (a[3] > b[3]) return -1;
            else {
                if (a[0] < b[0]) return -1;
                else if (a[0] > b[0]) return 1;
                else return 0
            }
        }
    }
}


input = require("fs").readFileSync("../../test.txt").toString().split("\n");
N = parseInt(input[0])
student = []
for (let i = 1; i < N + 1; i++) {
    student.push(input[i].toString().split(" ").map((x, index) => {
        if(index === 1 || index === 2 || index === 3) {
            return parseInt(x)
        } else {
            return x
        }
    }))
}

student.sort(compare)

let result = '';
for (const studentElement of student) {
    result += studentElement[0] + '\n'
}

console.log(result)