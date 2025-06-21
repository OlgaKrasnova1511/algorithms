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

function getAdjacencyList(edges, vAmount) {
    const result = Array.from({length: vAmount + 1 }, () => []);

    edges.forEach(([from, to]) => {
        result[from].push(to);
        result[to].push(from);
    });

    result.forEach((subArr) => {
        subArr.sort((a, b) => a - b);
    });

    return result;
}

function DFS(i, color, componentCount, adjList) {
    color[i] = componentCount;

    const neighbours = adjList[i];

    for (let neighbour of neighbours) {
        if (color[neighbour] === -1) {
            DFS(neighbour, color, componentCount, adjList);
        }
    }

    color[i] = componentCount;
}

function solve(_inputLines) {
    const [vAmount, eAmount] = _inputLines[0].trim().split(" ").map(num => Number(num));
    const edgesArr = _inputLines.slice(1).map(d => {
        return d.split(' ').map(i => Number(i))
    });

    const color = Array.from({length: vAmount + 1 }, () => -1);
    let componentCount = 0;

    const adjList = getAdjacencyList(edgesArr, vAmount);

    for (let i = 1; i < color.length; i++) {
        if (color[i] === -1) {
            DFS(i, color, componentCount, adjList)
            componentCount += 1;
        }
    }

    const components = Array.from({ length: componentCount }, () => []);

    for (let i = 1; i <= vAmount; i++) {
        components[color[i]].push(i);
    }

    components.forEach(c => c.sort((a, b) => a - b));
    components.sort((a, b) => a[0] - b[0]);

    console.log(components.length);
    components.forEach(c => console.log(c.join(' ')));
}

solve(`6 3
1 2
6 5
2 3`.split('\n'));

// 3
// 1 2 3
// 4
// 5 6