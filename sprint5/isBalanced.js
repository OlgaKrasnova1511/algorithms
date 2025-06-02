class CNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function printReversed(vertex) {
    // console.log(vertex);

    // vertex.children?.forEach(child => printReversed(child));
    if (vertex.left) {
        printReversed(vertex.left);
    }
    if (vertex.right) {
        printReversed(vertex.right);
    }
    console.log(vertex.value);
}
//критерий 1
//  У любой вершины количество потомков в правом и левом детях различается не более, чем на единицу.
// критерий 2 - зде реализовываем
// * У любой вершины высота правого и левого поддеревьев различается не более, чем на единицу.

function getIsBalanced(node, counterL = 0, counterR = 0) {
    if (!node) {
        return { height: 0, isBalanced: true };
    }
    // console.log(node.value, '1');

    let left = getIsBalanced(node.left);

    // console.log(left, node.value, '2 left');

    if (!left.isBalanced) {
        return { height: 0, isBalanced: false };
    }

    let right = getIsBalanced(node.right);
    // console.log(right, node.value, '2 right');

    if (!right.isBalanced) {
        return { height: 0, isBalanced: false };
    }

    const height = 1 + Math.max(left.height, right.height);
    const isBalanced = Math.abs(left.height - right.height) <= 1;
    // console.log(left.height, right.height, node.value, '3');
    // console.log(height, isBalanced, node.value, '4');

    return { height, isBalanced };
}

function solution(root) {
    const { isBalanced: result } = getIsBalanced(root)

    return result;
}

function test() {
    // var node1 = new CNode(1);
    // var node2 = new CNode(-5);
    // var node3 = new CNode(3);
    // node3.left = node1;
    // node3.right = node2;
    // var node4 = new CNode(10);
    // var node5 = new CNode(2);
    // node5.left = node3;
    // node5.right = node4;
    // console.log(solution(node5));


    var node100 = new CNode(100, null, null);
    var node1 = new CNode(2, null, null);
    var node19 = new CNode(-19, null, null);
    var node16 = new CNode(-16, node19, new CNode(-14, null, null));
    var node2 = new CNode(1, node16, node1);
    var node3 = new CNode(8, null, null);
    var node4 = new CNode(8, null, node3);
    var node5 = new CNode(9, node4, null);
    var node6 = new CNode(10, node5, node100);
    var node7 = new CNode(5, node2, node6);

        // var node100 = new CNode(100, null, null);
    // var node1 = new CNode(2, null, null);
    // var node19 = new CNode(-19, null, null);
    // var node16 = new CNode(-16, node19, new CNode(-14, null, null));
    // var node2 = new CNode(1, node16, node1);
    // var node = new CNode(55, null, null);
    // var node3 = new CNode(-7, null, null);
    // var node4 = new CNode(-8, node3, null);
    // var node5 = new CNode(-9, node4, null);
    // var node6 = new CNode(-10, node5, null);
    // var node7 = new CNode(5, node6, node);
    console.log(solution(node7));

    // printReversed(node7);
}
//             5
//        1           10
//   -16     2     9     100
// -19  -14      8
//                 8
test();