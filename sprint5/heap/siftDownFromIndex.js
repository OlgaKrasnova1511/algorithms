function siftDown(heap, idx) {
    const size = heap.length;
    while(2 * idx < size) {
        const left = 2 * idx;
        const right = 2 * idx + 1;
        const largest = idx;

        if (left < size && heap[left] > heap[largest]) {
            largest = left;
        }
        if (right < size && heap[right] > heap[largest]) {
            largest = right;
        }

        if (largest === idx) {
            break;
        }

        [heap[largest], heap[idx]] = [heap[idx], heap[largest]];
        idx = largest;
    }
}

function test() {
    var sample = [-1, 12, 1, 8, 3, 4, 7];
    console.assert(siftDown(sample, 2) == 5);
}

test();