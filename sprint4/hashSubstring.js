// const _readline = require('readline');

// const _reader = _readline.createInterface({
//     input: process.stdin
// });

// const _inputLines = [];
// let _curLine = 0;

// _reader.on('line', line => {
//     _inputLines.push(line);
// });

// // Когда ввод закончится, будет вызвана функция solve.
// process.stdin.on('end', solve);

// function readNumber(i) {
//     return Number(_inputLines[i]);
// }

// const R = Math.pow(2, 32);
// const q = 1000000007;

// function polyHash(s, q, R, intervals) {
//     let hash = 0;
//     let arr = [];

//     for (let i = 0; i < s.length; i++) {
//         arr.push((hash * q + s.charCodeAt(i)) % R)
//         hash = (hash * q + s.charCodeAt(i)) % R;
//     }

//     intervals.forEach(str => {
//         const [l, r] = str.split(' ');

//         console.log(((arr[r] - arr[l - 1]) * Math.pow(q, r - l + 1) + R) % R);
//     });
// }

function polyHash(s, a, m, intervals) {
    const n = s.length;
    const prefixHash = new Array(n + 1).fill(0);
    const powers = new Array(n + 1).fill(1);

    for (let i = 1; i <= n; i++) {
        const code = s.charCodeAt(i - 1);
        prefixHash[i] = (prefixHash[i - 1] * a + code) % m;
        powers[i] = (powers[i - 1] * a) % m;
    }

    intervals.forEach(str => {
        const [lStr, rStr] = str.trim().split(' ');

        const l = Number(lStr);
        const r = Number(rStr);

        let hash = (prefixHash[r] - (prefixHash[l - 1] * powers[r - l + 1]) % m + m) % m;

        ша
        console.log(hash);
    });
}



function solve(_inputLines) {
    var a = Number(_inputLines[0].trim());
    var m = Number(_inputLines[1].trim());
    var str = _inputLines[2].trim();
    let len = Number(_inputLines[3].trim());
    const intervals = _inputLines.slice(4, len + 4);

    console.log(polyHash(str, a, m, intervals));
}

solve(`1000
1000009
abcdefgh
7
1 1
1 5
2 3
3 4
4 4
1 8
5 8`.split('\n'));