
class Node {
    constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
    }
}

let log = ''

function printLinkedList(node) {
    while (node) {
        log = log + node.value + ' --> '
        node = node.next;
    }
    log = log + 'null';
    console.log(log);
    log = '';
}

function getNodeByIndex(node, index) {
    while (index) {
        node = node.next;
        index--;
    }
    return node;
}

function deleteNodeById(head, index) {
    //
    const nodeToDelete = getNodeByIndex(head, index);

    if (index === 0) {
        const next = getNodeByIndex(head, index + 1);
        console.log(next.value);

        delete nodeToDelete;
        head = next;
        console.log(head.value);

        return;
    } else {
        const prev = getNodeByIndex(head, index - 1);

        prev.next = nodeToDelete.next;

        delete nodeToDelete;
    }
}

function solution(head, index) {
    // Your code
    // ヽ(´▽`)/
    deleteNodeById(head, index);
    printLinkedList(head);
}

function test() {
    var node4 = new Node("node4");
    var node3 = new Node("node3", node4);
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);

    const head = node0;

    solution(head, 2);
    solution(head, 0);
    solution(head, 3)
    /*
    Output is:
    node0
    node1
    node2
    node3
    */
}

test()