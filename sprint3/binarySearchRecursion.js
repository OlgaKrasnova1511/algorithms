function binarySearch(arr, x, left = 0, right = arr.length) {
    if (right <= left) { // промежуток пуст
      return -1;
    }
    // промежуток не пуст
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) { // центральный элемент — искомый
      return mid;
    } else if (x < arr[mid]) { // искомый элемент меньше центрального значит следует искать в левой половине
      return binarySearch(arr, x, left, mid);
    } else { // иначе следует искать в правой половине
      return binarySearch(arr, x, mid + 1, right);
    }
  }

  // изначально мы запускаем двоичный поиск на всей длине массива
//   const index = binarySearch(arr, x, 0, arr.length);

function binarySearch (arr = [], target, left = 0, right = arr.length) {
    if (right <= left) {
        return -1;
    }

    let middle = Math.floor((right + left) / 2);

    if (arr[middle] === target) {
        return middle;
    }

    if (target > arr[middle]) {
        return binarySearch(arr, target, middle + 1, right)
    }

    return binarySearch(arr, target, left, middle)
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 1, 0, 11));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 2));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 3));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 4));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 5));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 6));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 7));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 8));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 9));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 10));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 11));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 12));
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 13));