let N = parseInt(require("fs").readFileSync("../../test.txt").toString().split("\n"));
let count = 0;
for (let i = 0; i < N+1 ; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            if ((i.toString() + j.toString() + k.toString()).search("3") !== -1) {
                count += 1;
            }
        }
    }
}
console.log(count)