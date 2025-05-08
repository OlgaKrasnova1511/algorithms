// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
    }
}
// }

function printLinkedList(node) {
    let printText = '';
    while (node) {
        printText += `${node.value} -> `;
        node = node.next;
    }
    printText += 'null';
    console.log(printText);
}

// function solution(node) {
//     let current = node;
//     let newHead = null;

//     while(current) {
//         let tmp = current.next;
//         current.next = current.prev;
//         current.prev = tmp;


//         newHead = current;
//         current = current.prev;
//     }

//     return newHead;
// }

function solution(node) {
    let current = node;
    let newHead = null;

    while (current) {
        let tmp = current.prev;
        current.prev = current.next;
        current.next = tmp;

        newHead = current;
        current = current.prev;
    }

    return newHead;
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
    printLinkedList(node0);
    var newHead = solution(node0);
    printLinkedList(newHead);

    /*
    result is newHead === node3
    node0.prev === node1
    node1.next === node0
    node1.prev === node2
    node2.next === node1
    node2.prev === node3
    node3.next === node2
    */
}

test();