class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function printRange(root, left, right, result = []) {
    // console.log(root?.value ?? 'none', result);
    // Первым делом нужно среди товаров стоимостью больше или равно 2 рублям найти самый дешёвый.
    // Затем сделать LMR обход до элемента (не включая) который больше right
    if (!root) {
        return result;
    }
    if (root.value >= left) {
        printRange(root.left, left, right, result);
    }

    if (root.value >= left && root.value <= right) {
        result.push(root.value);
    }

    if (root.value <= right) {
        printRange(root.right, left, right, result)
    }

    return result;
}

function test() {
    var node100 = new Node(100, null, null);
    var node1 = new Node(2, null, null);
    var node19 = new Node(-19, null, null);
    var node16 = new Node(-16, node19, null);
    var node2 = new Node(1, node16, node1);
    var node3 = new Node(8, null, null);
    var node4 = new Node(8, null, node3);
    var node5 = new Node(9, node4, null);
    var node6 = new Node(10, node5, node100);
    var node7 = new Node(5, node2, node6);

    printRange(node7, 2, 8).forEach(x => console.log(x));
}

test();