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

// ==========================================================

function getOutgoingEdges(edgesArr) {
    const adjacencyList = {};

    for (let i = 0; i < edgesArr.length; i++) {
        const [from, to] = edgesArr[i];

        adjacencyList[from] = adjacencyList[from] ? [...adjacencyList[from], to] : [to]
    }

    Object.keys(adjacencyList).forEach(i => {
        adjacencyList[i].sort((a, b) => a - b);
    })

    return adjacencyList;
}

function DFS(v, outgoingEdgesMap, color, time, entry, leave) {
    entry[v] = time.value;
    time.value += 1;
    color[v] = 'gray';

    const outgoingEdges = outgoingEdgesMap[v] ?? [];

    for (let w of outgoingEdges) {
        if (color[w] === 'white') {
            DFS(w, outgoingEdgesMap, color, time, entry, leave)
        }
    }

    leave[v] = time.value;
    time.value += 1;
    color[v] = 'black';
}

const S = 1;

function solve(_inputLines) {
    const [vAmount, _] = _inputLines[0].trim().split(" ").map(num => Number(num));
    const edgesArr = _inputLines.slice(1).map(d => {
        return d.split(' ').map(i => Number(i))
    });

    const outgoingEdges = getOutgoingEdges(edgesArr);

    const color = Array.from({ length: vAmount + 1}, () => 'white');
    let entry = Array.from({ length: vAmount + 1}, () => null);
    let leave = Array.from({ length: vAmount + 1}, () => null);
    const time = { value: 0 };

    DFS(S, outgoingEdges, color, time, entry, leave);

    const result = [];

    for (let i = 1; i <= vAmount; i++) {
        result.push(`${entry[i]} ${leave[i]}`);
    }

    return result;
}

const result = solve(`3 2
1 2
2 3`.split('\n'));
// const result = solve(`6 8
// 2 6
// 1 6
// 3 1
// 2 5
// 4 3
// 3 2
// 1 2
// 1 4`.split('\n'));

console.log(result);


/*
1 - 0 11
2 - 1 6
3 - 8 9
4 - 7 10
5 - 2 3
6 - 4 5
*/

/*
Ввод
3 2
1 2
2 3

Вывод
0 5
1 4
2 3
*/