class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function printLinkedList(vertex) {
    while (vertex) {
        process.stdout.write(`${vertex.value} -> `);
        vertex = vertex.next;
    }
    console.log('None');
}

////////////////////////////////////////////////////////////////////////

function getNodeByIndex(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function insertNode(head, index, value) {
    const newNode = new Node(value);
    if (index === 0) {
        newNode.next = head;
        return newNode;
    }
    const previousNode = getNodeByIndex(head, index - 1);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return head;
}
// 0 1 2 3 4
function deleteNode(head, index) {
    // index === 0 - удаляем первый элемент +
    // node.next === null - удаляем последний элемент
    // else: удаляем из середины

    if (index === 0) {
        return head.next;
    }

    const previousNode = getNodeByIndex(head, index - 1);
    previousNode.next = previousNode.next?.next ?? null;
    return head;
}

const n3 = new Node('third');
const n2 = new Node('second', n3);
const n1 = new Node('first', n2);

let node = n1, index = 2, value = 'newNode';
let head = insertNode(node, index, value);
printLinkedList(head, ' inserted');
head = deleteNode(node, 3);
printLinkedList(head, ' deleted');
