function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));

    const result = new Array(arr.length).fill([]);

    let l = 0, r = 0, k = 0;

    while (l < left.length && r < right.length) {
        if (left[l][0] <= right[r][0]) {
            result[k] = left[l];
            l++;
            k++;
        } else {
            result[k] = right[r];
            r++;
            k++;
        }
    }

  // Если один массив закончился раньше, чем второй, то
  // переносим оставшиеся элементы второго массива в результирующий
    while(l < left.length) {
        result[k] = left[l]; // перенеси оставшиеся элементы left в result
        l++;
        k++;
    }

    while (r < right.length) {
        result[k] = right[r]; // перенеси оставшиеся элементы right в result
        r++;
        k++;
    }

    return result;
}

function solve(_inputLines) {
    const rangesArr = _inputLines.slice(1).map(r => r.split(' ').map(str => Number(str)));

    // отсоритивать слиянием начала интервалов
    // потом соединять их если надо
    const sortedRanges = mergeSort(rangesArr);

    let result = [];
    let [currStart, currEnd] = sortedRanges[0];

    for (let i = 1; i < sortedRanges.length; i++) {
        const [nextStart, nextEnd] = sortedRanges[i];

        if (nextStart <= currEnd) {
            currEnd = Math.max(currEnd, nextEnd);
        } else {
            result.push([currStart, currEnd]);
            [currStart, currEnd] = [nextStart, nextEnd];
        }
    }

    result.push([currStart, currEnd]);

    result.forEach(([start, end]) => console.log(`${start} ${end}`));
}

solve(`1
68 87`.split('\n'));