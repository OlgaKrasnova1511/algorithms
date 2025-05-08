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
        // if (this._isEmpty()) return 'error';
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
        // if (this._isEmpty()) return 'None';
        if (this._isEmpty()) {
            console.log('None');

            return 'None';
        }

        console.log(this.maxItems[this.maxItems.length - 1])

        return this.maxItems[this.maxItems.length - 1];
    }
}

const stack = new StackMax();

let input = `7
// get_max
// pop
// pop
// pop
// push 10
// get_max
// push -9`

// a = input.split('\n')

const actions = a.slice(1)

for (let action of actions) {
    const [method, param] = action.split(' ');

    stack[method]?.(param);
}










// stack.get_max()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.push(10)
// stack.get_max()
// stack.push(-9)

// stack.get_max()
// stack.push(7)
// stack.pop()
// stack.push(-2)
// stack.push(-1)
// stack.pop()
// stack.get_max()
// stack.get_max()


