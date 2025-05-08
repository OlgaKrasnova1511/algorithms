const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function readNumber(i) {
    return Number(_inputLines[i]);
}


function solve() {
    const actions = _inputLines.slice(1);

    class StackMax {
        constructor() {
            this.items = [];
            this.maxItems = [];
        }

        _isEmpty() {
            return !this.items.length;
        }

        push(x) {
            this.items.push(x);

            if (x >= (this.maxItems[this.maxItems.length - 1] ?? -Infinity)) {
                this.maxItems.push(x);
            }
        }

        pop() {
            if (this._isEmpty()) {
                console.log('error');

                return 'error';
            }

            let poped = this.items.pop()

            if (this.maxItems[this.maxItems.length - 1] === poped) {
                this.maxItems.pop();
            }


            return poped;
        }

        get_max() {
            if (this._isEmpty()) {
                console.log('None');

                return 'None';
            }

            console.log(this.maxItems[this.maxItems.length - 1])

            return this.maxItems[this.maxItems.length - 1];
        }

        top() {
            console.log(this.items[this.items.length - 1]);
            return this.items[this.items.length - 1];
        }
    }

    const stack = new StackMax();

    for (let action of actions) {
        const [method, param] = action.split(' ');

        stack[method]?.(Number(param));
    }

}