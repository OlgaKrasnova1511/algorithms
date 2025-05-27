function findNode(root, value) {
    // Если мы пришли в поддерево, а его не существует,
    // значит, нужного элемента в дереве поиска нет
    if (root == null) {
      return null;
    }
    if (value < root.value) {
      return findNode(root.left, value);
    }
    if (value == root.value) {
      return root;
    }
    if (value > root.value) {
      return findNode(root.right, value);
    }
  } 