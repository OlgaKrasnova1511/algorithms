/*
Алгоритм целиком:
    - В цикле, пока остались непосещённые вершины:
        - Выбираем ещё не посещённую вершину v.
        - Запускаем DFS(v)

DFS(v) делает следующее:
    - Помечает v как посещённую, но ещё не обработанную — серым цветом.
    - Рекурсивно запускает DFS(w) для каждой вершины w, к которой есть ребро из v.
    - Когда смежные вершины обработаны, помечает v как обработанную, то есть чёрным цветом.
*/

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

/*
1. Список смежности (adjacency list)
Каждой вершине сопоставляем список её соседей:

1: [2, 4]
2: [1, 3]
3: [2, 4]
4: [1, 3]

2. Матрица смежности (adjacency matrix)
Это квадратная матрица n x n (в данном случае 4×4), где на пересечении строки i и столбца j стоит 1, если есть ребро между i и j.

    1 2 3 4
  +--------
1 | 0 1 0 1
2 | 1 0 1 0
3 | 0 1 0 1
4 | 1 0 1 0

3. Список рёбер (edge list)
Просто список пар вершин, соединённых рёбрами:

[
    (3, 2),
    (4, 3),
    (1, 4),
    (1, 2)
]
*/

function DFS(startV, color, adjacencyList, result) {
    let stack = [];
    stack.push(startV);

    while (stack.length > 0) {
        const v = stack.pop();

        if (color[v] === 'white') {
            color[v] = 'gray';
            result.push(v);
            stack.push(v);

            for (let i = adjacencyList[v].length - 1; i >= 0; i--) {
                const w = adjacencyList[v][i];

                if (color[w] === 'white') {
                    stack.push(w);
                }
            }
        } else if (color[v] === 'gray') {
            color[v] = 'black';
        }

    }
}


function solve(_inputLines) {
    const [vAmount, eAmount] = _inputLines[0].trim().split(" ").map(num => Number(num));
    const edgesArr = _inputLines.slice(1, eAmount + 1).map(numsStr => {
        return numSubArr = numsStr.split(' ').map(s => Number(s));
    });
    const startV = +_inputLines[eAmount + 1];

    const adjacencyList = {};

    for (let i = 1; i <= vAmount; i++) {
        adjacencyList[i] = [];
    }

    for (let [u, v] of edgesArr) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u); // неориентированный граф
    }

    for (let i = 1; i <= vAmount; i++) {
        adjacencyList[i].sort((a, b) => a - b);
    }


    const color = new Array(vAmount + 1).fill('white');
    const result = [];

    DFS(startV, color, adjacencyList, result);

    console.log(result);
}

solve(`2 1
1 2
2`.split('\n')); // 4 1 2 3