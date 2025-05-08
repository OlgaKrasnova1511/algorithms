// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
    }
}
// }

function getNodeByIndex(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function solution(node, valueToFind) {
    let index = 0;

    while (node.next !== null) {
        console.log('index', index);
        if (node.value === valueToFind) {
            return index;
        }
        node = node.next;
        index ++;
    }

    return -1;
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    var idx = solution(node0, "node6");
}

test();