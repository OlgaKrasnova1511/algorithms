// const _readline = require('readline');

// const _reader = _readline.createInterface({
//     input: process.stdin
// });

// const _inputLines = [];
// let _curLine = 0;

// _reader.on('line', line => {
//     _inputLines.push(line);
// });

// process.stdin.on('end', solve);

// function readNumber(i) {
//     return Number(_inputLines[i]);
// }

// const CHARS_AMOUNT = 2;

// function print(n, prefix, openedCount = 0, closedCount = 0) {
// 	if (n === 0) {
// 		console.log(prefix);
// 	} else {
//         if (openedCount < (n + prefix.length) / CHARS_AMOUNT) {
//             print(n - 1, prefix + '(', openedCount + 1, closedCount);
//         }

//         if (!!prefix && openedCount - closedCount > 0) {
//             print(n - 1, prefix + ')', openedCount, closedCount + 1);
//         }
//     }
// }


// function solve(_inputLines) {
//     var num = Number(_inputLines);
//     let prefix = '';

//     print(CHARS_AMOUNT * num, prefix);
// }

// solve('4');


function generateParentheses(n, prefix = '', open = 0, close = 0) {
    if (prefix.length === 2 * n) {
        console.log(prefix);
        return;
    }

    if (open < n) {
        generateParentheses(n, prefix + '(', open + 1, close);
    }

    if (close < open) {
        generateParentheses(n, prefix + ')', open, close + 1);
    }
}

function solve(input) {
    const n = Number(input);
    generateParentheses(n);
}

solve('4');