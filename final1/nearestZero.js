https://contest.yandex.ru/contest/22450/run-report/136331317/
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function readNumber(i) {
    return Number(_inputLines[i]);
}

// так нормально или перегружено? неявности поправила, спасибо

const directions = {
    FORWARD: 1,
    BACKWARD: -1
};

const getNearestZeroDistances = (numbers, direction, result = []) => {
    let counter = -1;

    switch (direction) {
        case directions.FORWARD: {
            for (let i = 0; i < numbers.length; i++) {
                const num = numbers[i];

                if (num === 0) {
                    result[i] = 0;
                    counter = 1;
                } else if (num > 0) {
                    result[i] = counter;

                    if (counter !== -1) {
                        counter++;
                    }
                }
            }

            return result;
        }
        case directions.BACKWARD: {
            for (let i = result.length - 1; i >= 0; i--) {
                const num = result[i];
                const shouldUpdateNum = num < 0 || (counter < num && counter > 0);

                if (num === 0) {
                    counter = 1;
                } else if (shouldUpdateNum) {
                    result[i] = counter;
                    counter++;
                }
            }

            return result;
        }

        default:
            return [];
    }
}


function solve() {
    const numbers = _inputLines[1].trim().split(" ").map(num => Number(num));

    const afterForwadResult = getNearestZeroDistances(numbers, directions.FORWARD);
    const afterBackwardResult = getNearestZeroDistances(numbers, directions.BACKWARD, afterForwadResult);

    console.log(afterBackwardResult.join(' '));
}