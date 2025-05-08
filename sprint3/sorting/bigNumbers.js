// function solve(_inputLines) {
//     var len = Number(_inputLines[0]);
//     var numbers = _inputLines[1].trim().split(" ").map(num => num);

//     function comparator(str2, str1) {
//         return str1 + str2 > str2 + str1;
//     }

//     function sortByKeys(arr, fn) {
//         for (let i = 1; i < len; i++) {
//             const itemToInsert = arr[i];
//             let j = i;

//             while (j > 0 && fn(arr[j - 1], itemToInsert )) {
//                 arr[j] = arr[j - 1];
//                 j--;

//             }
//             arr[j] = itemToInsert;
//         }

//     }

//     sortByKeys(numbers, comparator);
//     console.log(numbers.join(''))
// }

function solve(_inputLines) {
    const numbers = _inputLines[1].trim().split(" ");

    numbers.sort((a, b) => {
        const ab = a + b;
        const ba = b + a;
        return ba.localeCompare(ab);
    });

    let result = numbers.join('');
    if (result[0] === '0') result = '0';

    console.log(result);
}

solve(`5
15 56 2 11 99`.split('\n'));