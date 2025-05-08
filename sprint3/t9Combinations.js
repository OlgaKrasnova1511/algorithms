

const DICT = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

function print(nums, index, prefix = '', result) {
    if (index === nums.length) {

        result.push(prefix);
        return;
    }

    const letters = DICT[nums[index]];

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];

        print(nums, index + 1, prefix + letter, result);
    }
}


function solve(_inputLines) {
    var nums = _inputLines[0].split('');
    const result = [];

    print(nums, 0, '', result);

    console.log(result.join(' '));

}

solve(['92']);







// function solve(input) {
//     const digitToLetters = {
//         '2': 'abc',
//         '3': 'def',
//         '4': 'ghi',
//         '5': 'jkl',
//         '6': 'mno',
//         '7': 'pqrs',
//         '8': 'tuv',
//         '9': 'wxyz'
//     };

//     const digits = input.trim();
//     const result = [];

//     if (!digits) {
//         console.log('');
//         return;
//     }

//     function backtrack(index, path) {
//         if (index === digits.length) {
//             // очередная строка собрана, например с 9
//             result.push(path);
//             console.log(path);

//             return;
//         }

//         const letters = digitToLetters[digits[index]];
//         for (let letter of letters) {
//             backtrack(index + 1, path + letter);
//         }
//     }

//     backtrack(0, '');
//     console.log(result.sort().join(' '));
// }

// solve('2');