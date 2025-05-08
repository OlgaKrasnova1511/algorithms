function maxLengthRope(lengths, k) {
    let left = 0;
    let right = Math.max(...lengths);
    let EPS = 1e-4;


  // Функция проверки: можно ли получить хотя бы k кусков длиной >= mid?
  function canCut(mid) {
    let count = 0;
    for (let len of lengths) {
      count += Math.floor(len / mid);
    }

    return count >= k;
  }

  // Бинарный поиск
  while (right - left > EPS) {
    let mid = (left + right) / 2;

    if (canCut(mid)) {
      left = mid; // пробуем больше
    } else {
      right = mid; // пробуем меньше
    }
  }


//   return left.toFixed(2);
  // Если длина слишком мала — значит невозможно
  return left < EPS ? 0 : left.toFixed(2);
}

// Примеры
console.log(maxLengthRope([1, 1, 1], 3)); // → 0.00 (невозможно)
// console.log(maxLengthRope([1, 1], 2)); // → 1.00
// console.log(maxLengthRope([5, 5, 5], 4)); // → 3.75
// console.log(maxLengthRope([4, 7, 9], 5)); // → 3.00
// console.log(maxLengthRope([2, 3, 5], 10)); // → 1.00