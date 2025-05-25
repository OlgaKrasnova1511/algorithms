// class Node {
//     constructor(obj, left = null, right = null) {
//         this.obj = obj;
//         this.left = left;
//         this.right = right;
//     }
// }

// if (process.env.REMOTE_JUDGE !== 'true') {
    class CNode {
        constructor(value, id = 'none') {
            this.value = value;
            this.id = id;
            this.left = null;
            this.right = null;
        }
    }
// }


function recursion(node, currMax = Number.NEGATIVE_INFINITY) {
    if (!node) return currMax;

    currMax = Math.max(currMax, node.value);
    currMax = recursion(node.left, currMax);
    currMax = recursion(node.right, currMax);

    return currMax;
}


// function recursion(node, currMax = node.value) {
//     // console.log(node.id);

//     if (node.value > currMax) {
//         currMax = node.value;
//     }
//     if (!node.left && !node.right) {
//         return currMax;
//     }

//     if (node.left) {
//         currMax = recursion(node.left, currMax);
//     }
//     if (node.right) {
//         currMax = recursion(node.right, currMax);
//     }

//     return currMax;
// }

function solution(root) {
    // тут мне нужно просто пройтись по всем нодам от рута
    // и найти максимальное value
    let max = recursion(root);

    console.log(max, 'max');

    return max;
}

function test() {
    // var node1 = new CNode(1);
    // var node2 = new CNode(-5);
    // var node3 = new CNode(3);
    // node3.left = node1;
    // node3.right = node2;
    // var node4 = new CNode(2);
    // node4.left = node3;
    // console.assert(solution(node4) === 3);
    const node0 = new CNode(0, 0);
    const node1 = new CNode(2, 1);
    const node2 = new CNode(2, 2);
    const node3 = new CNode(3, 3);
    const node4 = new CNode(3, 4);
    const node5 = new CNode(0, 5);
    const node6 = new CNode(0, 6);
    const node7 = new CNode(111, 7);
    const node8 = new CNode(0, 8);
    const node9 = new CNode(111, 9);
    const node55 = new CNode(111, 55);
    node0.left = node1;
    node0.right = node2;
    node1.left = node3;
    node2.right = node4;
    node3.left = node5;
    node3.right = node6;
    node4.left = node7;
    node4.right = node8;
    node8.right = node9;
    node1.right = node55;
    solution(node0)
// 0 0 1 2
// 1 2 3 None
// 2 2 None 4
// 3 3 5 6
// 4 3 7 8
// 5 0 None None
// 6 0 None None
// 7 111 None None
// 8 0 None 9
// 9 111 None None
}

test();