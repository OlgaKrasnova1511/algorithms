// Псевдокод для центрированного подхода выглядит так:
// Центрированный метод обхода подходит только для бинарных деревьев.
// при LMR-обходе данные будут отсортированы от меньшего элемента к большему,
// при RML-обходе данные будут отсортированы от большего элемента к меньшему.

function print_LMR(vertex) {
  if (vertex.left !== null) {
    print_LMR(vertex.left);
  }
  console.log(vertex.value);
  if (vertex.right !== null) {
    print_LMR(vertex.right);
  }
}