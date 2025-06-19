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

    const result = new Map();

    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i]; // [1, 3]
        const [fromV, toV] = subArr; // 1 3

        if (!result.has(fromV)) {
            result.set(fromV, [toV]);
        } else {
            result.set(fromV, [...result.get(fromV), toV]);
        }
    }

    for (let i = 1; i <= vAmount; i++) {
        if (!result.has(i)) {
            console.log(0);
            continue;
        }

        const subArr = result.get(i);
        console.log(subArr.length, ...subArr)
    }
}

// solve(`5 4
// 1 3
// 2 3
// 5 2
// 5 3`.split('\n'));

// 1 3
// 1 3
// 0
// 0
// 2 2 3