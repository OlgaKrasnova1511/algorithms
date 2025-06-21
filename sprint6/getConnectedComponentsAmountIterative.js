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
    const result = Array.from({ length: vAmount + 1 }, () => []);

    edges.forEach(([from, to]) => {
        result[from].push(to);
        result[to].push(from);
    });

    result.forEach((subArr) => {
        subArr.sort((a, b) => a - b);
    });

    return result;
}

function iterativeDFS(start, color, componentCount, adjList) {
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (color[node] !== -1) continue;

        color[node] = componentCount;

        for (let neighbor of adjList[node]) {
            if (color[neighbor] === -1) {
                stack.push(neighbor);
            }
        }
    }
}

function solve() {
    const [vAmount, eAmount] = _inputLines[0].trim().split(" ").map(Number);
    const edgesArr = _inputLines.slice(1).map(line => line.split(' ').map(Number));

    const color = Array.from({ length: vAmount + 1 }, () => -1);
    let componentCount = 0;

    const adjList = getAdjacencyList(edgesArr, vAmount);

    for (let i = 1; i <= vAmount; i++) {
        if (color[i] === -1) {
            iterativeDFS(i, color, componentCount, adjList);
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
