function getLongestDraw(scores) {
	let longest = 0;
    const map = new Map([[0, -1]]); // sum - fistMeetIndex
    let currentScore = 0;

    scores.forEach((score, index) => {
        if (score === '1') {
            currentScore += 1;
        } else if (score === '0') {
            currentScore -= 1;
        }

        if (typeof map.get(currentScore) === 'number') {
            let diff = index - map.get(currentScore);

            if (diff > longest) {
                longest = diff;
            }
        } else {
            map.set(currentScore, index);
        }
	});

    return longest;
}


function solve(_inputLines) {
	// const len = Number(_inputLines[0]);
    var scores = _inputLines[1].trim().split(" ");


    console.log(getLongestDraw(scores));
}

solve([0, '']);



























// const PLAYERS = 2;

// function competition(scores) {
// 	let longest = 0;
//     const map = new Map([[0, -1]]); // sum - fistMeetIndex
//     let currentScore = 0;

//     for (let index = 0; index < scores.length; index++) {
//         const score = scores[index];

//     	if (score === '1') {
// 			currentScore += 1;
//         } else if (score === '0') {
// 			currentScore -= 1;
// 		}


// 		if (typeof map.get(currentScore) === 'number') {
//         	let diff = index - map.get(currentScore);
// 			if (diff > longest) {
// 				longest = diff;
// 			}
// 		} else {
//         	map.set(currentScore, index + 1);
//         }
//         console.log(map, score);
// 	};



//     return longest;
// }

// const result = competition('1'); // 6

// console.log(result);