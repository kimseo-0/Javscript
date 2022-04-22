// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587


function solution1(priorities, location) {
    let answer = 0;

    let curIndex = 0;
    let priorityList = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < priorities.length; i++) {
        priorityList[priorities[i]].push(i)
    }

    for (let i = 9; i > 0 ; i--) {
        if (priorityList[i].length === 0) {
            continue;
        }
        priorityList[i].sort(function (a, b) {
            let indexA = (a - curIndex) <= 0 ? priorityList[i].length - curIndex + a + 1 : (a - curIndex)
            let indexB = (b - curIndex) <= 0 ? priorityList[i].length - curIndex + b + 1 : (b - curIndex)
            if (indexA < indexB) {
                return -1
            } else if (indexA > indexB) {
                return 1
            }
        })
        // console.log(priorityList[i])
        for (const index of priorityList[i]) {
            answer++;
            if (index === location) {
                // console.log(answer)
                return answer
            }
        }
        curIndex = priorityList[i][priorityList[i].length - 1]
    }
}

function solution(priorities, location) {
    let answer = 0;

    let prioritiesList = priorities.map((v, index) => {return index})

    let i = 0;
    let max = Math.max(...priorities);
    while (priorities.length > 0) {
        if (priorities[i] === max) {
            answer ++;
            if (prioritiesList[i] === location) {
                break
            }

            priorities.splice(i, 1);
            prioritiesList.splice(i, 1);
            max = Math.max(...priorities);

            if (i === priorities.length) {
                i = 0
            }
        } else {
            i = (i + 1) % priorities.length
        }
    }
    console.log(answer)
    return answer
}

// solution([2, 1, 3, 2], 2)
solution([1, 1, 9, 1, 1, 1], 0)