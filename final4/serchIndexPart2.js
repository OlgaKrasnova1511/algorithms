// https://contest.yandex.ru/contest/24414/run-report/138226590/

// опишите принцип работы вашего алгоритма;
/*
Из описания к задаче:
Релевантность документа оценивается следующим образом: для каждого уникального слова из запроса берётся число его вхождений в документ, полученные числа для всех слов из запроса суммируются. Итоговая сумма и является релевантностью документа. Чем больше сумма, тем больше документ подходит под запрос
*/

// обоснуйте, почему он должен работать корректно;
// потому что алгоритм следует заданным условиям
// 1. При индексации создаётся мапа всех слов с указанием количества их вхождений в каждый документ.
// 2. При обработке запроса используется только множество уникальных слов из него.
// 3. Для каждого слова получаем документы, в которых оно встречается, и копим релевантность.
// 4. Сортировка по убыванию релевантности и возрастанию id документа.
// 5. Возвращается максимум 5 документов.

// оцените временную и пространственную сложность алгоритма.
// Нам нужно прочитать в любом случае все документы и все слова с них + все запросы и все слова в них
// что говорит о том что сложность будет как минимум квадратичная

// * n - количество документов
// * d - макс длина документа
// * m - количество запросов
// * q - макс длина запроса
// Время:
// да, забыла что мы в цикле по запросам
// * О(n*d + m*q + m*q*nlogn)
// getWordsEntries и нижеидущая логика с запросами не вложены, значит их можно сложить
// Сначала разбираемся с документами (getWordsEntries)
// Там циклы в цикле - это квадрат (циклы рядом - это линейная сложность) - проходим по всем словам всех документов
// * О(n*d) =====> так как это documents*(docWordsArr + wordCountMap), если вдруг все слова уникальны, то дины docWordsArr === wordCountMap и убираем константу 2

// Затем разбираемся с запросами и сопоставляем с документами
// * O(m*q*x) - читаем все слова во всех запросах и вообще еще проходимся по всем вхождениям в документы 'привет' -> { 1: 10, 2: 1 }, но эта часть (количество ключей { 1: 10, 2: 1 }) ожидается что значительно меньше (особенно если игнорировать предлоги всякие)


// Память:
// * O(n * d + n + q + m)
// Опять же сильно зависит от уникальности слов в документах
// в худшем случае O(n * d)
// К тому же временно нам надо хранить relevance: O(n), сет queryWords O(q), result: O(m)


// allDocsMap формат: слово -> { documentId: count }
const getWordsEntries = (documents) => {
    const allDocsMap = new Map();

    for (let i = 0; i < documents.length; i++) {
        const doc = documents[i];
        const docWordsArr = doc.split(' ');
        const wordCountMap = new Map();

        for (let j = 0; j < docWordsArr.length; j++) {
            const word = docWordsArr[j];
            wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
        }
        for (let [word, count] of wordCountMap.entries()) {
            if (!allDocsMap.has(word)) {
                allDocsMap.set(word, new Map());
            }
            allDocsMap.get(word).set(i, count);
        }
    }

    return allDocsMap;
}

const getRelevantDocs = (documents, queries) => {
    const result = [];
    const wordsEntries = getWordsEntries(documents);

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const relevance = new Map();
        const queryWords = [...new Set(query.split(' '))];

        for (const word of queryWords) {
            if (!wordsEntries.has(word)) continue;

            const entries = wordsEntries.get(word);

            for (const [docId, count] of entries.entries()) {
                relevance.set(docId, (relevance.get(docId) || 0) + count);
            }
        }

        if (relevance.size) {
        const rel = [...relevance.entries()]
            .sort((a, b) => b[1] - a[1] || a[0] - b[0])
            .slice(0, 5)
            .map(([docId]) => docId + 1);

        result.push(rel);
        }
    }

    return result;

}

const solve = (_inputLines) => {
    const docsLen = Number(_inputLines[0]);
    const documents = _inputLines.slice(1, docsLen + 1);
    const queries = _inputLines.slice(docsLen + 2);

    const result = getRelevantDocs(documents, queries);

    result.forEach(r => {
        console.log(r.join(' '));
    });
}

solve(`7
buy flat in moscow buy
rent flat in moscow
sell flat in moscow
want flat in moscow like crazy
clean flat in moscow on weekends
renovate flat in moscow
renovate flat in moscow2
1
flat in moscow for crazy weekends`.split('\n'));
/*
4 5 1 2 3
*/