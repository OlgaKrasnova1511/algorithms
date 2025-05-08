// https://contest.yandex.ru/contest/22781/run-report/136512911/

// * опишите принцип работы вашего алгоритма; //
// тут была взята за основу односторонняя очередь на кольцевом буфере с ограниченным размером
// мне необходимо было обагатить тот алгоритм методами push_front и pop_back, чтобы превратить его в дек (все то же самое, только очередь двусторонняя)
// и самое главное сделать так, чтобы мы не вышли за пределы массива (отрицательный индекс или индекс больше maxSize - 1),
// для этого был добавлен метод getSafeIndex

// *  обоснуйте, почему он должен работать корректно; //
// потому что есть проверки перед добавлением что еще есть место для элемента
// потому что есть проверки перед удалением что дек не пустой (size не ноль)
// потому что мы не выйдем за пределы кольца благодаря getSafeIndex

// * оцените временную и пространственную сложность алгоритма. //
// сложность всех вставок и удалений что в конец, что в начало - О(1),
// так как мы не аффектим другие элементы, они все по тем же индексам находятся
// память это => new Array(maxSize).fill(null) => соответственно О(maxSize) то есть О(N)


const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function readNumber(i) {
    return Number(_inputLines[i]);
}
/////////////////////////////////

class Deque {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.size = 0;
        this.deque = new Array(maxSize).fill(null);
        this.head = 0;
        this.tail = 0;
    }

    pushBack(value){
        if (this.isFull()) {
            throw new Error('push is anavailible: deque is full');
        }

        this.deque[this.tail] = value;
        this.tail = this.getSafeIndex(this.tail + 1);
        this.size += 1;
    }
    pushFront(value) {
        if (this.isFull()) {
            throw new Error('push is anavailible: deque is full');
        }

        const insertIndex = this.getSafeIndex(this.head - 1);

        this.deque[insertIndex] = value;
        this.head = insertIndex;

        this.size += 1;
    }
    popBack() {
        if (this.isEmpty()) {
            throw new Error('pop is anavailible: deque is empty');
        }

        const lastElIndex= this.getSafeIndex(this.tail - 1);
        const x = this.deque[lastElIndex];

        this.deque[lastElIndex] = null;
        this.tail = lastElIndex;
        this.size -= 1;

        return x;
    }
    popFront() {
        if (this.isEmpty()) {
            throw new Error('pop is anavailible: deque is empty');
        }

        const x = this.deque[this.head];

        this.deque[this.head] = null;
        this.head = this.getSafeIndex(this.head + 1);
        this.size -= 1;

        return x;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSafeIndex(index) {
        // остатком от деления держим в рамках "кольца"
        index = index % this.maxSize;

        // если индекс пришел отрицательный значит идем от 0 индекса против часовой стрелки
        // если больше, то все ок - это индекс нужный
        if (index < 0) {
            index += this.maxSize;
        }

        return index;
    }
}

function solve() {
    const maxSize = Number(_inputLines[1]);
    const actions = _inputLines.slice(2);

    const deque = new Deque(maxSize);

    for (let action of actions) {
        const [method, param] = action.split(' ');

        try {
            switch (method) {
                case 'push_front':
                    deque.pushFront(Number(param));
                    break;
                case 'push_back':
                    deque.pushBack(Number(param));
                    break;
                case 'pop_front':
                    console.log(deque.popFront());
                    break;
                case 'pop_back':
                    console.log(deque.popBack());
                    break;
                default:
                    return;
            }
        } catch (e) {
            console.log('error');
        }
    }
}


// solve(`4
// 4
// push_front 861
// push_front -819
// pop_back
// pop_back`.split('\n'));

// solve(`7
// 10
// push_front -855
// push_front 0
// pop_back
// pop_back
// push_back 844
// pop_back
// push_back 823`.split('\n'));