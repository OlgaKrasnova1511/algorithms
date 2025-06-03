// из теории
//  function siftUp(heap, index) {
//     if (index === 1) {
//         return;
//     }

//     const parentIndex = Math.floor(index / 2);
//     if (heap[parentIndex] < heap[index]) {
//         [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
//         siftUp(heap, parentIndex);
//     }
// }

// function heapAdd(heap, key) {
//     heap.push(key);
//     const index = heap.length - 1;
//     siftUp(heap, index);
// }
// ================================================
// итеративный   вариант
// function siftUp(heap, idx) {
//     while (idx > 1 && heap[idx] > heap[Math.floor(idx / 2)]) {
//         // Меняем местами элемент и его родителя
//         [heap[idx], heap[Math.floor(idx / 2)]] = [heap[Math.floor(idx / 2)], heap[idx]];
//         idx = Math.floor(idx / 2);
//     }
//     return idx;
// }

function siftUp(heap, idx) {
    if (idx === 1) {
        return idx;
    }
    const parentIdx = Math.floor(idx/2);

    if (heap[parentIdx] < heap[idx]) {
        [heap[parentIdx], heap[idx]] = [heap[idx], heap[parentIdx]];
        return siftUp(heap, parentIdx);
    }

    return idx;
}
//         5
//     1       3
//   2   12  8   6

function test() {
    var sample = [-1, 12, 6, 8, 3, 15, 7];
    console.log(sample);
    console.assert(siftUp(sample, 5) == 1);
    console.log(sample);

}

test()