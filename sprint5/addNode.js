class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function print_LMR(vertex) {
    if (vertex.left !== null) {
        print_LMR(vertex.left);
    }
    console.log(vertex.value);
    if (vertex.right !== null) {
        print_LMR(vertex.right);
    }
    }

// ищем пустое место куда можно вставить key
function insert(node, key, parentNode = null, head = node) {
    if (!node) {
        if (parentNode !== null) {
            if (parentNode.value > key) {
                parentNode.left = new Node(key);
            } else {
                parentNode.right = new Node(key);
            }
        } else {
            head = new Node(key);
        }

        return head;
    }
    if (node.value > key) {
        insert(node.left, key, node, head);
    }
    if (node.value <= key) {
        insert(node.right, key, node, head);
    }

    return head;
}

function test() {
    var node1 = new Node(7, null, null);
    var node2 = new Node(8, node1, null);
    var node3 = new Node(7, null, node2);
    var newHead = insert(node3, 6);
    console.assert(newHead === node3);
    console.assert(newHead?.left?.value === 6);
    print_LMR(newHead)
}

test()