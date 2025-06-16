// https://contest.yandex.ru/contest/24810/run-report/139350245/

// * опишите принцип работы вашего алгоритма;
/*
В первой фазе из исходных данных строится куча.

Во второй фазе куча преобразуется в отсортированный массив путём многократного удаления наибольшего/наименьшего элемента из кучи (т.е. корня) и помещения его в конец массива. После каждого удаления куча перестраивается, чтобы сохранить своё свойство. Когда все элементы будут удалены из кучи, получится отсортированный массив.
*/

/*
Шаги:

Вызвать функцию heapify() для массива. Это построит кучу из массива за O(n) операций.

Обменять первый элемент массива (наибольший в куче) с последним элементом кучи. Уменьшить размер рассматриваемой части кучи на один.

Вызвать функцию siftDown() для массива, чтобы переместить новый первый элемент на его правильное место в куче.

Повторять шаг (2), пока в оставшейся куче не останется один элемент.
*/

// ===============================================================================================

// * обоснуйте, почему он должен работать корректно;
/*
- После построения кучи (heapify) корень кучи гарантированно содержит максимальный/минимальный элемент в рассматриваемой части массива.
- При обмене корня с последним элементом и исключении этого элемента из кучи, массив частично отсортирован в конце.
- Процедура siftDown гарантирует, что после удаления корня свойство кучи восстанавливается.
- Повторение этих действий для всех элементов массива приводит к упорядоченному массиву.
*/
// Сравнение участников сделано по правилам задачи: приоритет выше у того, кто решил больше задач с минимум штрафов или по алфавиту
//
// ============================================================================================

// * оцените временную и пространственную сложность алгоритма.
// Сложность пирамидальной сортировки в худшем случае — O(nlogn)
// Функция heapify() выполняется один раз и имеет сложность O(n). Функция siftDown() вызывается n раз, и каждый раз требует O(log n), так как проход начинается с корня. Следовательно, общая сложность алгоритма составляет O(n + n log n) = O(n log n)
// Память. In-place - O(1)

function compare(a, b) {
    if (a.points !== b.points) return a.points > b.points;
    if (a.fee !== b.fee) return a.fee < b.fee;
    return a.login < b.login;
}

function siftDown(heap, idx, heapSize, compare, isDesc) {
    while (2 * idx + 1 < heapSize) {
        let left = 2 * idx + 1;
        let right = 2 * idx + 2;
        let player = idx;

        if (left < heapSize) {
            if (isDesc ? !compare(heap[left], heap[player]) : compare(heap[left], heap[player])) {
                player = left;
            }
        }
        if (right < heapSize) {
            if (isDesc ? !compare(heap[right], heap[player]) : compare(heap[right], heap[player])) {
                player = right;
            }
        }

        if (player === idx) break;

        [heap[idx], heap[player]] = [heap[player], heap[idx]];
        idx = player;
    }
}

function iParent(i) {
    return Math.floor((i - 1) / 2);
}

function heapify(array, compare, isDesc) {
    let count = array.length;
    let start = iParent(count - 1);

    while (start >= 0) {
        siftDown(array, start, count, compare, isDesc);
        start--;
    }
}


function heapSort(array, compare, isDesc = true) {
    heapify(array, compare, isDesc);

    for (let end = array.length - 1; end > 0; end--) {
        [array[0], array[end]] = [array[end], array[0]];
        siftDown(array, 0, end, compare, isDesc);
    }

    return array;
}

function solve(inputLines) {
    const n = parseInt(inputLines[0]);
    const participants = [];

    for (let i = 1; i <= n; i++) {
        const [login, points, fee] = inputLines[i].split(" ");
        participants.push({
            login,
            points: Number(points),
            fee: Number(fee),
        });
    }

    heapSort(participants, compare, true);

    for (let p of participants) {
        console.log(p.login);
    }
}

solve(
    `5
alla 4 100
gena 6 1000
gosha 2 90
rita 2 90
timofey 4 80`.split("\n")
);
