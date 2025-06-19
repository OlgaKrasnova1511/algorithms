const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function readNumber(i) {
    return Number(_inputLines[i]);
}


function solve(_inputLines) {
    const [vAmount] = _inputLines[0].trim().split(" ").map(num => Number(num));
    const arr = _inputLines.slice(1).map(d => {
        return d.split(' ').map(i => Number(i))
    });

    const result = [];

    for (let i = 0; i < vAmount; i++) {
        result[i] = [];
        for (let j = 0; j < vAmount; j++) {
            result[i][j] = 0;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        const [i, j] = arr[index];

        result[i - 1][j - 1] = 1;
    }

    result.forEach(row => {
        console.log(...row);

    })
}

solve(`5 4
1 3
2 3
5 2
5 3`.split('\n'));

// 1 3
// 1 3
// 0
// 0
// 2 2 3