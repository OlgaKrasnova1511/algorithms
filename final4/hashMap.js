// https://contest.yandex.ru/contest/24414/run-report/138206140/

// опишите принцип работы вашего алгоритма;
// есть класс HashTable, создающий хэш-таблицу размером с простое число 10**5 + 7
// для разрешения коллизий используется метод цепочек на связном списке
// коллизии разрешаются добавлением новых элементов в начало списка
// все операции используют простую хеш-функцию: key % size

// обоснуйте, почему он должен работать корректно;
// размером хэш-таблицы берется простое число, что снижает количество коллизий и делает вероятность попадания по ключу в конкретную корзину равномерной
// связные списки позволяют хранить несколько элементов с одинаковым хешом.
// методы put, get, delete работают аналогично стандартным операциям JS-объекта.

// оцените временную и пространственную сложность алгоритма.
// Средняя сложность операций в хеш-таблице равняется O(1+α)
// Память: O(N + M), где N — размер массива, M — количество всех элементов в таблице


const BIG_SIMPLE_NUM = 2654435761;

class Node {
    constructor(key=null, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size=10**5 + 7) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }
    put(key, value) {
        // Вычислить значение хеш-функции x=h(k) от ключа.
        const hash = this._getHash(key);
        // По значению хеш-функции получаем индекс корзины i=xmodlen(H).
        const i = hash % this.size;
        // Найти H[i] — ссылка на голову списка ключей.
        const head = this.table[i];
        // Выполнить поиск ключа в связном списке.
        const [node] = this._findByKey(head, key);

        if (node) {
            node.value = value;
        } else {
            this.table[i] = new Node(key, value, head);
        }
    }
    get(key) {
        // Вычислить значение хеш-функции x=h(k) от ключа.
        const hash = this._getHash(key);
        // По значению хеш-функции получаем индекс корзины i=xmodlen(H).
        const i = hash % this.size;
        // Найти H[i] — ссылка на голову списка ключей.
        const head = this.table[i];
        // Выполнить поиск ключа в связном списке.
        const [node] = this._findByKey(head, key);

        return node ? node.value : null;
    }
    delete(key) {
        // Вычислить значение хеш-функции x=h(k) от ключа.
        const hash = this._getHash(key);
        // По значению хеш-функции получаем индекс корзины i=xmodlen(H).
        const i = hash % this.size;
        // Найти H[i] — ссылка на голову списка ключей.
        const head = this.table[i];
        // Выполнить поиск ключа в связном списке и при необходимости удалить его.
        const [node, prev] = this._findByKey(head, key);

        if (prev) {
            prev.next = node.next
        } else {
            this.table[i] = node?.next ?? null;

        }


        return node ? node.value : null;
    }
    _getHash(key) {
        return key*BIG_SIMPLE_NUM % 2**32;
    }
    _findByKey(head, key) {
        let node = head;
        let prev = null;
        while (node) {
            if (key === node.key) {
                return [node, prev]
            } else {
                prev = node;
                node = node.next;
            }
        }
        return [null, null];
    }
}

const doAction = (a, map) => {
    let [action, ...params] = a.split(' ');
    params = params.map(i => Number(i));

    switch (action) {
        case 'get':
            const result = map.get(...params);
            console.log(!result ? 'None' : result);

            break;
        case 'put':
            map.put(...params);

            break;
        case 'delete':
            const deleted = map.delete(...params);
            console.log(!deleted ? 'None' : deleted);

            break;

        default:
            break;
    }
}

const solve = (_inputLines) => {
    const actions = _inputLines.slice(1);
    const map = new HashTable();

    actions.forEach(a => doAction(a, map));
}

solve(`10
get 1
put 1 10
put 2 4
get 1
get 2
delete 2
get 2
put 1 5
get 1
delete 2`.split('\n'));
/*
None
None
1
2
3
*/