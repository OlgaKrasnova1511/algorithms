class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
const rawNodes = [
    [0, 5, 1, 2],
    [1, 4, 3, 4],
    [2, 6, 5, 6],
    [3, 2, null, null],
    [4, 6, null, null],
    [5, 4, null, null],
    [6, 8, null, null],
];

// Шаг 1: создаём узлы по индексам
const nodes = {};
for (let [index, value] of rawNodes) {
    nodes[index] = new CNode(value);
}

// Шаг 2: связываем детей
for (let [index, value, left, right] of rawNodes) {
    if (left !== null) nodes[index].left = nodes[left];
    if (right !== null) nodes[index].right = nodes[right];
}

function getIsNodeCorrect(root) {
    let isLeftChildCorrect = !root.left || root.value > root.left.value;
    let isRightChildCorrect = !root.right || root.value < root.right.value;

    return isLeftChildCorrect && isRightChildCorrect;
}

function isBinaryTree(root, isBinary = true) {
    console.log(root?.value);

    if (!root) {
        return isBinary;
    }
    if (getIsNodeCorrect(root)) {
        isBinary = isBinaryTree(root.right);
        isBinary = isBinaryTree(root.left);
    } else {
        return false;
    }

    return isBinary;
}

function solution(root) {
    // Пройтись по всем нодам и проверить что дети корректные - нет! нужно еще учитывать текущий минимум и максимум
    return isBinaryTree(root);
}

function test() {
    console.log(solution(nodes[0]))
//  2
// 5  3
    // var node1 = new CNode(5, null, null);
    // var node2 = new CNode(3, null, null);
    // var node0 = new CNode(2, node1, node2);
    // console.log(!solution(node0));
    // node0.value = 4;
    // node1.value = 3;
    // node2.value = 5;
    // console.log(solution(node0));
    // var node1 = new CNode(1, null, null);
    // var node2 = new CNode(4, null, null);
    // var node3 = new CNode(3, node1, node2);
    // var node4 = new CNode(8, null, null);
    // var node5 = new CNode(5, node3, node4);
    // console.assert(solution(node5));
    // node4.value = 5;
    // console.assert(!solution(node5));
}
/*
       5
   3       8
1       4
*/

test();