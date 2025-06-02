// https://new.contest.yandex.ru/contests/24810/problem?id=51450%2F2021_02_03%2FgYENJEG2f3&tab=submissions&submissionId=10000068-3df9-51ed-5024-284dff8fc48e
//
// опишите принцип работы вашего алгоритма;
// мы используем свойства бинарного дерева чтобы найти быстро ноду для удаления и удаляем ее
// в зависимости от количества детей у удаляемого узла действуем по одному из трёх сценариев
// есть 2 ребенка
// есть 1 ребенок
// удаляемая нода - лист без детей

// для случая где у удаляемой ноды 2 ребенка мы ищем "ноду-наследника" с минимальным значением в правом поддереве, то есть самую левую ноду в поддереве,(можно еще искать наибольшего слева), и переносим его значение в "удаляемую" ноду, а затем к родителю ноды с минимальным значением в правом поддереве мы справа или слева подсоединяем детей "перенесенной" ноды с минимальным значением, как бы удаляя ее

// если ребенок один, мы соединяем родителя удаляемой ноды и ее ребенка

// если нет детей, просто удаляем ноду, записав родителю, если он есть в left или right свойство значение null
// ===============================================================================================

// обоснуйте, почему он должен работать корректно;
// потому что сохраняется правильный порядок значений нод благодаря тому что мы ищем на замену минимальное значение в правом поддереве удаляемой ноды, мы вставляем это значение в ноду которую надо удалить, этот элемент гарантированно больше всех значений в левом поддереве и меньше всех значений в правом

// ============================================================================================

// оцените временную и пространственную сложность алгоритма.
// Память O(n) - стек при дереве в виде связного списка и O(x) - x - количество нод (размер бинарного дерева)
// Сложность алгоритма - на произвольном дереве поиска операции поиска, вставки и удаления в худшем случае будут работать за О(n), в сбалансированном дереве это O(logn)


// if (process.env.REMOTE_JUDGE !== 'true') {
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
//   }

function remove(node, key, parent = null, head = node) {
    if (!node) {
        return head;
    }

    if (key < node.value) {
        head = remove(node.left, key, node, head);
    } else if (key > node.value) {
        head = remove(node.right, key, node, head);
    } else {
        // лист
        if (!node.left && !node.right) {
            if (!parent) {
                return null;
            }
            if (parent.right === node) {
                parent.right = null;
            } else if (parent.left === node) {
                parent.left = null;
            }
            // один ребенок
        } else if ((node.left && !node.right) || (!node.left && node.right)) {
            const child = node.left ?? node.right;

            if (!parent) {
                return child;
            }

            if (parent.right === node) {
                parent.right = child;
            } else if (parent.left === node) {
                parent.left = child;
            }
            // два ребенка
        } else {
            let minParent = node;
            let minFromRightSubTree = node.right;

            while (minFromRightSubTree.left) {
                minParent = minFromRightSubTree;
                minFromRightSubTree = minFromRightSubTree.left;
            }

            node.value = minFromRightSubTree.value;

            if (minParent.left === minFromRightSubTree) {
                minParent.left = minFromRightSubTree.right;
            } else {
                minParent.right = minFromRightSubTree.right;
            }
        }
    }

    return head;
}

function test() {
    var node12 = new Node(12, null, null);

    var node1 = new Node(2, null, null);
    var node2 = new Node(3, node1, null);
    var node3 = new Node(1, null, node2);
    var node4 = new Node(6, null, null);
    var node5 = new Node(8, node4, null);
    var node6 = new Node(10, node5, node12);
    var node7 = new Node(5, node3, node6);
    var newHead = remove(node7, 10);
    console.assert(newHead.value === 5);
    console.assert(newHead.right === node5);
    console.assert(newHead.right.value === 8);
    function printForward(vertex) {
        console.log(vertex?.value ?? null);
        if (vertex?.left) {
            printForward(vertex.left);
        }
        if (vertex?.right) {
            printForward(vertex.right);
        }
    }
    printForward(newHead);
}
//         5
//   1          10 <-- delete
//     3      8    12
//   2      6

test();
