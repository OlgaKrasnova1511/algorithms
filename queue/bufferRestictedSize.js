// const _readline = require('readline');

// const _reader = _readline.createInterface({
//     input: process.stdin
// });

// const _inputLines = [];
// let _curLine = 0;

// _reader.on('line', line => {
//     _inputLines.push(line);
// });

// function readNumber(i) {
//     return Number(_inputLines[i]);
// }

const input1 = `10
1
push 1
size
push 3
size
push 1 // err2
pop
push 2
pop
push 3
push 3`;

const solve = (_inputLines) => {
    const actionsAmount = Number(_inputLines[0]);
    const maxSize = Number(_inputLines[1]);
    const actions = _inputLines.slice(2);

    class MyQueueSized {
        constructor(maxSize) {
            this.maxSize = maxSize;
            this.queue = new Array(maxSize).fill(null);
            this.head = 0;
            this.tail = 0;
            this._size = 0;
        }

        push(x) {
            if (this._size === this.maxSize) {
                console.log('error');
                return 'error';
            }
            // кладем в конец
            this.queue[this.tail] = x;
            // сдвигаем на 1 тейл
            this.tail = (this.tail + 1) % this.maxSize;
            this._size += 1;
        }

        pop() {
            if (this.isEmpty()) {
                console.log('None');
                return 'None';
            }
            const x = this.queue[this.head];
            this.queue[this.head] = null;
            this.head = (this.head + 1) % this.maxSize;
            this._size -= 1;

            console.log(x);

            return x;
        }

        peek() {
            if (this.isEmpty()) {
                console.log('None');
                return 'None';
            }

            console.log(this.queue[this.head]);

            return this.queue[this.head];
        }

        size() {
            console.log(this._size);

            return this._size;
        }

        isEmpty() {
            return this._size === 0;
        }
    }

    const queue = new MyQueueSized(maxSize);

    for (let i = 0; i < actionsAmount; i++) {
        const [method, param] = actions[i].split(' ');

        queue[method]?.(Number(param));
    }
}

solve(input1.split('\n'));

// process.stdin.on('end', solve);



