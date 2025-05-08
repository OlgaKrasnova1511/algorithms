https://contest.yandex.ru/contest/22450/run-report/136330692/
const { get } = require('http');
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});
// map просто синтаксисом нравится чистым, а стение как и у объекта за О(1) что круто, но поменяю на объект
// константа и была вынесена изначально при решении и капсом по-классике, не знаю чего не перенесла в финальное решение, спасибо
const PLAYERS = 2;

const getFinalScore = (totalFingers, charUsage) => {
    let score = 0;

    for (let key in charUsage) {
        if (totalFingers >= charUsage[key]) score++;
    }

    return score;
}

const solve = () => {
    const fingers = Number(_inputLines[0]);
    const totalFingers = fingers * PLAYERS;
    const boardData = _inputLines.slice(1).join('');

    const charUsage = {};

    for (let i = 0; i < boardData.length; i++) {
        const char = boardData[i];

        if (char === '.') continue;

        if (char in charUsage) {
            charUsage[char] = charUsage[char] + 1;
        } else {
            charUsage[char] = 1;
        }
    }

    console.log(getFinalScore(totalFingers, charUsage));

    return getFinalScore(totalFingers, charUsage);
}

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function readNumber(i) {
    return Number(_inputLines[i]);
}

