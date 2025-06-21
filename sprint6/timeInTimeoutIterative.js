function getOutgoingEdges(edgesArr, vAmount) {
    const adjacencyList = Array.from({ length: vAmount + 1 }, () => []);

    for (let [from, to] of edgesArr) {
        adjacencyList[from].push(to);
    }

    for (let i = 1; i <= vAmount; i++) {
        adjacencyList[i].sort((a, b) => a - b);
    }

    return adjacencyList;
}

function DFSIterative(start, outgoingEdges, entry, leave) {
    const color = Array(entry.length).fill('white');
    const time = { value: 0 };

    const stack = [[start, false]];

    while (stack.length > 0) {
        const [v, isExiting] = stack.pop();

        if (isExiting) {
            leave[v] = time.value++;
            color[v] = 'black';
            continue;
        }

        if (color[v] === 'white') {
            entry[v] = time.value++;
            color[v] = 'gray';
            stack.push([v, true]);

            const neighbors = outgoingEdges[v];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const u = neighbors[i];
                if (color[u] === 'white') {
                    stack.push([u, false]);
                }
            }
        }
    }
}

function solve(inputLines) {
    const [vAmount, eAmount] = inputLines[0].trim().split(" ").map(Number);
    const edgesArr = inputLines.slice(1).map(line => line.split(' ').map(Number));

    const outgoingEdges = getOutgoingEdges(edgesArr, vAmount);
    const entry = Array(vAmount + 1).fill(null);
    const leave = Array(vAmount + 1).fill(null);

    const START = 1;
    DFSIterative(START, outgoingEdges, entry, leave);

    for (let i = 1; i <= vAmount; i++) {
        console.log(`${entry[i]} ${leave[i]}`);
    }
}
