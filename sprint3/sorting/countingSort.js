function countingSort(array, k) {
    console.log(array, 'arrayarrayarray');

    const countedValues = new Array(k).fill(null);
    for (const value of array) {
      countedValues[value]++;
    }

    let index = 0;
    for (let value = 0; value < k; value++) {
      for (let amount = 0; amount < countedValues[value]; amount++) {
        array[index] = value;
        index++;
      }
    }
    return array;
  }

  const RANGE = 3;

  function solve(_inputLines) {
      var len = Number(_inputLines[0]);
      var array = _inputLines[1].split(' ').map(n => {
        console.log(n);

        return Number(n)
      });

      const result = countingSort(array, RANGE)

      console.log(result.join(' '))
  }

  solve(`0
0`.split('\n'));