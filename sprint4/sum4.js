function getSumOf4(target, arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);

    const len = sortedArr.length;

    const quads = new Set();

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;
		for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && sortedArr[j] === sortedArr[j - 1]) continue;

            let left = j + 1;
            let right = len - 1;

            while(left < right) {
                let sum = sortedArr[i] + sortedArr[j] + sortedArr[left] + sortedArr[right];

                if (sum === target) {
                    quads.add(`${sortedArr[i]} ${sortedArr[j]} ${sortedArr[left]} ${sortedArr[right]}`);

                    while(left < right && sortedArr[left + 1] === sortedArr[left]) left++;
                    while(left < right && sortedArr[right + 1] === sortedArr[right]) right--;

                    left++;
                    right--;
				} else if (sum < target) {
                    left++;
				} else {
                    right--;
				}
			}
		}
	}

    return quads;
}

// findQuadruples(381350422, [...'-142721627 206575381 564131650 -648707194 995752548 393312490 435642014 -9069088 326565756 140484837 -533059899 488966447 0 -780815037 699133600 -268205879 -70733143 496260289 -777196728 85424651'.split(' ')]);
// const quads = getSumOf4(10, [2, 3, 2, 4, 1, 10, 3, 0]);
const quads = getSumOf4(0, [1, 0, -1, 0, 2, -2]);
// const quads = getSumOf4(4, [1,1,1,1,1]);

console.log(quads.size);

for (let q of quads) {
    console.log(q);
}


