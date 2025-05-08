// function bubbleSortConcept1(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       for (let j = 0; j < i; j++) {
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//         console.log(arr);

//       }
//     }
//   }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr);
//             if (arr[j] > arr[j + 1]) {
//                 const tmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = tmp
//             }
//         }
//     }

//     console.log('result', arr);

// }

/*
Её алгоритм следующий (сортируем по неубыванию):

На каждой итерации проходим по массиву, поочередно сравнивая пары соседних элементов. Если элемент на позиции i больше элемента на позиции i + 1, меняем их местами. После первой итерации самый большой элемент всплывёт в конце массива.
Проходим по массиву, выполняя указанные действия до тех пор, пока на очередной итерации не окажется, что обмены больше не нужны, то есть массив уже отсортирован.
После не более чем n – 1 итераций выполнение алгоритма заканчивается, так как на каждой итерации хотя бы один элемент оказывается на правильной позиции.
*/

function bubbleSort(arr) {
let changed = false;
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
            changed = true;
        }
    }
    if (swapped) {
        console.log(arr.join(' '));
    } else {
        break;
    }
}

if (!changed) {
    console.log(arr.join(' '));
}
}


bubbleSort([12, 8, 9, 10, 11]);