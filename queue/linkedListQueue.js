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
put -34
put -23
get
size
get
size
get
get
put 80
size`;

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const solve = (_inputLines) => {
    const actionsAmount = Number(_inputLines[0]);
    const actions = _inputLines.slice(1);

    class MyLinkedListQueue {
        constructor() {
            this.head = null; // null | node
            this.tail = null; // null | node
            this._size = 0;
        }
        // вывести элемент в head и удалить его
        get() {
            if (this._size === 0) {
                console.log('error');

                return 'error';
            }

            const x = this.head;

            this.head = x.next;

            this._size -= 1;

            if (this._size === 0) {
                this.tail = null;
            }

            console.log(x.value);

            return x;
        }
        put(x) {
            const newNode = new Node(x);
            if (!this._size) {
                this.tail = newNode;
                this.head = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }

            this._size += 1;
        }

        size() {
            console.log(this._size);

            return this._size;
        }

        printList(vertex) {
            while (vertex) {
                process.stdout.write(`${vertex.value} -> `);
                vertex = vertex.next;
            }
            console.log('None');
        }
    }

    const linkedListQueue = new MyLinkedListQueue();

    for (let i = 0; i < actionsAmount; i++) {
        const [method, param] = actions?.[i]?.split(' ') ?? [];

        linkedListQueue[method]?.(Number(param));
    }
}

solve(input1.split('\n'));

// process.stdin.on('end', solve);



