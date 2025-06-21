function DFS(startV, color, adjacencyList, result) {
    let stack = [];
    stack.push([startV, false]);

    while (stack.length > 0) {
        const [v, exiting] = stack.pop();

        if (exiting) {
            color[v] = 'black';
            result.push(v);
            continue;
        }

        if (color[v] === 'white') {
            color[v] = 'gray';
            stack.push([v, true]);

            for (let i = adjacencyList[v].length - 1; i >= 0; i--) {
                const w = adjacencyList[v][i];

                if (color[w] === 'white') {
                    stack.push([w, false]);
                }
            }
        }
    }
}


function solve(_inputLines) {
    const [vAmount, eAmount] = _inputLines[0].trim().split(" ").map(num => Number(num));
    const edgesArr = _inputLines.slice(1, eAmount + 1).map(numsStr => {
        return numSubArr = numsStr.split(' ').map(s => Number(s));
    });

    const adjacencyList = {};

    for (let i = 1; i <= vAmount; i++) {
        adjacencyList[i] = [];
    }

    for (let [u, v] of edgesArr) {
        adjacencyList[u].push(v);
    }

    for (let i = 1; i <= vAmount; i++) {
        adjacencyList[i].sort((a, b) => a - b);
    }


    const color = new Array(vAmount + 1).fill('white');
    const result = [];
    // adjacencyList { '1': [], '2': [], '3': [], '4': [ 1 ], '5': [ 1 ], '6': [ 4 ] }


    for (let i = 1; i <= vAmount; i++) {
        if (color[i] === 'white') {
            DFS(i, color, adjacencyList, result);
        }
    }

    result.reverse();
    console.log(result.join(' '));
}

solve(`5 3
3 2
3 4
2 5`.split('\n')); // 1 3 2 4 5