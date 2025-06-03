// * опишите принцип работы вашего алгоритма;
// Сначала строим кучу, добавляя всех участников по одному и просеивая вверх (siftUp), чтобы поддерживалось свойство максимальной кучи по нашим правилам сравнения, что уже были ранее в задачах на сортировки

// Затем по одному извлекаются и добавляются в массив sorted верхние, то есть максимальные, элементы из кучи (popMax). На вершину пирамиды добавляется последний участник и просеивается вниз  (siftDown)
// В результате получается массив, отсортированный по убыванию.
// Так как я вытаскиваю сначала самых приоритетных, финальный массив и будет отсортирован в нужном порядке.

// ===============================================================================================

// * обоснуйте, почему он должен работать корректно;
// - при добавлении элемента в кучу используется siftUp, чтобы восстановить порядок необходимых для данной структуры данных
// - при удалении максимального элемента вызывается siftDown, чтобы после перемещения последнего элемента на вершину
// Сравнение участников сделано по правилам задачи: приоритет выше у того, кто решил больше задач с минимум штрафов или по алфавиту
//
// ============================================================================================

// * оцените временную и пространственную сложность алгоритма.
// Сложность пирамидальной сортировки в худшем случае — O(nlogn)
// Память. Для описанной реализации алгоритма пирамидальной сортировки нужно выделить память под массив из n элементов, т.е. потребуется O(n) дополнительной памяти. Также создаётся массив для результата, тоже O(n).



function compare(a, b) {
    if (a.points !== b.points) return a.points > b.points;
    if (a.fee !== b.fee) return a.fee < b.fee;
    return a.login < b.login;
}

function siftUp(heap, idx) {
    while (idx > 1) {
        const parent = Math.floor(idx / 2);
        if (compare(heap[idx], heap[parent])) {
            [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
            idx = parent;
        } else {
            break;
        }
    }
}

function heapAdd(heap, item) {
    heap.push(item);
    siftUp(heap, heap.length - 1);
}

function siftDown(heap, idx) {
    const size = heap.length;

    while (2 * idx < size) {
        let left = 2 * idx;
        let right = 2 * idx + 1;
        let largest = idx;

        if (left < size && compare(heap[left], heap[largest])) {
            largest = left;
        }
        if (right < size && compare(heap[right], heap[largest])) {
            largest = right;
        }

        if (largest === idx) break;

        [heap[idx], heap[largest]] = [heap[largest], heap[idx]];
        idx = largest;
    }
}

function popMax(heap) {
    if (heap.length <= 1) return null;
    const max = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();
    siftDown(heap, 1);
    return max;
}

function heapSort(array) {
    const heap = [null];

    for (const item of array) {
        heapAdd(heap, item);
    }

    const sorted = [];
    while (heap.length > 1) {
        sorted.push(popMax(heap));
    }
    return sorted;
}

function solve(inputLines) {
    const n = parseInt(inputLines[0]);
    const participants = [];

    for (let i = 1; i <= n; i++) {
        const [login, points, fee] = inputLines[i].split(' ');
        participants.push({
            login,
            points: Number(points),
            fee: Number(fee)
        });
    }

    const sorted = heapSort(participants);
    console.log(sorted.map(p => p.login).join('\n'));
}

solve(`5
alla 4 100
gena 6 1000
gosha 2 90
rita 2 90
timofey 4 80`.split('\n'))