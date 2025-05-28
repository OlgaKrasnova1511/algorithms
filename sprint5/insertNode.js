class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function insertNode(root, key) {
    if (root === null) {
        return new Node(key);
    }

    if (key < root.key) {
        root.left = insertNode(root.left, key);
    } else if (key >= root.key) {
        root.right = insertNode(root.right, key);
    }

    return root;
}