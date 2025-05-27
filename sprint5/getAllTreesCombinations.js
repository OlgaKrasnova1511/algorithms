// Само число Каталана выражается формулой C(n) = (2n)!/n!(n+1)!,
// https://habr.com/ru/articles/165295/
// соответствие c ПСП - открытая скобка - левая нода, закрытая скобка - правая нода

function getFactorial(n) {
    if (n <= 1) return 1;
    return n * getFactorial(n - 1);
}

function getCatalanNumber(n) {
    return (getFactorial(2*n))/(getFactorial(n)*getFactorial(n+1))
}

console.log(getCatalanNumber(1));
console.log(getCatalanNumber(2));
console.log(getCatalanNumber(3));
