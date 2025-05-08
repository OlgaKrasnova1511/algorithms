function merge_sort(arr, left, right) { // [3,4,2], 0, 3, уходим вглубь 1: [3,4,2], 0 ,1// уходим вглубь 2: [3,4,2], 1, 3
    if (right - left <= 1) { // 1 проход - false // 2 проход - true
        return;
    }

    const mid = Math.floor((left + right) / 2); // 1

    merge_sort(arr, left, mid); // уходим вглубь 1 // после 2 проход - true идем ниже
    merge_sort(arr, mid, right); // уходим вглубь 2 // после 3 проход - true идем ниже
    console.log(arr, 'left, mid, right', left, mid, right, arr.slice(left, mid), arr.slice(mid, right));

    merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
    let result = [];
    let i = left;
    let j = mid;

    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            result.push(arr[i]);
            i++;
        } else {
            result.push(arr[j]);
            j++;
        }
    }

    while (i < mid) {
        result.push(arr[i]);
        i++;
    }

    while (j < right) {
        result.push(arr[j]);
        j++;
    }

    console.log(result);

    for (let k = 0; k < result.length; k++) {
        arr[left + k] = result[k];
    }
}

// function merge(arr, left, mid, right) {
//     const result = new Array(arr.length).fill(0);

//     let l = 0, r = mid, k = 0;

//     while(l < mid - left && r < right) {
//         if (arr[l] <= arr[r] ) {
//             result[k] = arr[l];
//             l++;
//         } else {
//             result[k] = arr[r];
//             r++;
//         }
//         k++;
//     }

//     while(l < mid) {
//         result[k] = arr[l];
//         l++;
//         k++;
//     }

//     while (r < arr.length) {
//         result[k] = arr[r];
//         r++;
//         k++;
//     }

//     return result;
// }

function test() {
	var a = [1, 4, 9, 2, 10, 11];

	var expected = [1, 2, 4, 9, 10, 11];

	var c = [7,6,5,4,3,2,1,0];
	merge_sort(c, 0, 8)

	expected = [1, 1, 2, 2, 4, 10];
}

test();