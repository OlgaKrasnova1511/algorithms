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

function binarySearch(days = [], price, left = 0, right = days.length) {

    console.log(days, price, left, right);

	if (right < left) {
		return -1;
	}

	const middle = Math.floor((left + right) / 2);

	if (days[middle] >= price) {
		if (middle === 0 || days[middle - 1] < price) {
            return middle + 1;
        } else {
            return binarySearch(days, price, left, middle - 1)
        }
	} else  {
    	return binarySearch(days, price, middle + 1, right)
    }
}


function solve(_inputLines) {
 const len = Number(_inputLines[0]);
 const days = _inputLines[1].trim().split(" ").map(num => Number(num));
 const price = Number(_inputLines[2]);

 const firstBike = binarySearch(days, price, 0, len);
 const secondBike = binarySearch(days, price * 2, 0, len);


 console.log([firstBike, secondBike].join(' '));
}

solve(`6
1 2 4 4 4 4
1`.split('\n'));