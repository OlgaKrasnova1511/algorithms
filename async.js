console.log(1); //

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve(3).then(console.log); //

new Promise(
    resolve => setTimeout(resolve, 0))
    .then(() => console.log(4));

Promise.reject(5).catch(console.log);

console.log(6); //

setTimeout(() => {
    console.log(7);
}, 0);

// 1 6 3 5 2 4 7