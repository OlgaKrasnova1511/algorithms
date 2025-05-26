// Попробуй переписать рекурсивную функцию поиска через цикл while, чтобы избежать переполнения стека.


class CNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function search(node, target) {
    while (node) {
        if (node.value === target) {
            return node;
        }
        if (node.value < target) {
            node = node.right;
        }
        if (node.value > target) {
            node = node.left;
        }
    }

    return 'none';
}

function solution(root, value) {
    let node = search(root, value);

    console.log(node, 'node');

    return node;
}

function test() {
    const node3 = new CNode(3);
    const node12 = new CNode(12);
    const node99 = new CNode(99);
    const node146 = new CNode(146);
    const node34 = new CNode(34);
    const node57 = new CNode(57);
    const node7 = new CNode(7);
    const node8 = new CNode(8);
    const nodeNeg4 = new CNode(-4);
    const node0 = new CNode(0);
    const nodeNeg2 = new CNode(-2);
    const nodeNeg16 = new CNode(-16);
    node3.right = node12;
    node3.left = nodeNeg4;
    node12.right = node99;
    node12.left = node7;
    node99.right = node146;
    node99.left = node34;
    node34.right = node57;
    node7.right = node8;
    nodeNeg4.left = nodeNeg16;
    nodeNeg4.right = node0;
    node0.left = nodeNeg2;

    const target = 0;

    solution(node3, target)
}

test();