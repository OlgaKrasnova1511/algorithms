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

function polyHash(s, q = 1000, R = 123987123) {
    let hash = 0;

    for (let i = 0; i < s.length; i++) {
      hash = (hash * q + s.charCodeAt(i)) % R;
    }
    return hash;
  }


  function solve(_inputLines) {
      var a = Number(_inputLines[0].trim());
      var m = Number(_inputLines[1].trim());
      var str = _inputLines[2].trim();



      console.log(polyHash(str, a, m));
  }

solve(`1000
1000009
abcde`.split('\n'));
// solve(`1000
// 123987123
// abcdef`.split('\n'));


/*
№	Вердикт	Ресурсы	Баллы
1	presentation-error	56ms / 6.42Mb	-
Тест 1
Входной файл
123
100003
a
Вывод программы
NaN
Правильный ответ
97
2	presentation-error	56ms / 6.42Mb	-



Тест 2
Входной файл
123
100003
hash
Вывод программы
NaN
Правильный ответ
6080

*/