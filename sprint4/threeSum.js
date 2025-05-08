function naiveSolutionWithSort(A, x) {
    const n = x.length;
    const triples = new Set();

    for (let i1 = 0; i1 < n; i1++) {
        console.log('level1');
        for (let i2 = i1 + 1; i2 < n; i2++) {
            console.log('level2');
            for (let i3 = i2 + 1; i3 < n; i3++) {
                console.log('level3');
                console.log(x[i1], x[i2], x[i3]);

                if (x[i1] + x[i2] + x[i3] === A) {
                    const sortedTriple = [x[i1], x[i2], x[i3]].sort((a, b) => a - b);
                    triples.add(sortedTriple);
                }
            }
        }
    }

    return triples;
}

// const res = naiveSolutionWithSort(10, [5, 2, 8, 1, 1, 3, 4, 4]);

// console.log(res);

function effectiveSolution(A, arr) {
    let history = new Set();
    let len = arr.length;
    let sortedX = [...arr];
    sortedX.sort((a, b) => a - b);
    let triples = new Set();

    console.log('sortedX', sortedX);
    

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            console.log(sortedX[i], sortedX[j]);
            console.log('history', history);

            let target = A - sortedX[i] - sortedX[j];
            if (history.has(target)) {
                // Заметим, что тут тройка уже отсортирована за счёт предварительной
                // сортировки всего массива.
                let triple = [target, sortedX[i], sortedX[j]];
                triples.add(triple);
            }
        }
        history.add(sortedX[i]);
    }

    return triples;
}

const res2 = effectiveSolution(10, [5, 2, 8, 1, 1, 3, 4, 4]);

console.log(res2);