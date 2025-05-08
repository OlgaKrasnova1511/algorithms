function comparation(str1, str2) {
	if (str1.length !== str2.length) return 'NO';

	const map1 = {};
	const map2 = {};

	for (let i = 0; i < str1.length; i++) {
		const str1Char = str1[i];
        const str2Char = str2[i];

		if (!(str1Char in map1) && !(str2Char in map2)) {
        	map1[str1Char] = str2Char;
			map2[str2Char] = str1Char;
		} else {
			if (map1[str1Char] !== str2Char) return 'NO';
			if (map2[str2Char] !== str1Char) return 'NO';
		}
	}

	return 'YES';
}

const result = comparation('aaa', 'xxx');

console.log(result);