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
// Время:
// 1. getWordsEntries - O(n) - проходимся по всем словам всех документов
// 2. getRelevantDocs O(Q * (QW * D + R log R)) -> D — количество документов, Q - количество запросов, QW - среднее кол-во слов в запросе,
// D - кол-во документов, R - результурующий массив (сортируем)
// 3. Итого сложность: (Q * (QW * D + R log R)) + n

// Память:
// Большие затраты памяти O(D*U) потребуются для хранения в мапе всех слов и каунтера, сколько они встретились в документах
//  U - количество уникальных слов в документе, D - количество документов
// В худшем случае, если во всех документах уникальные слова, то тут придется хранить все эти слова, то есть память равна количеству всех слов во всех документах
// + wordCountMap - O(X) мапа для времнного хранения уникальных слов документа
// + relevance - O(Y) - длинная массива с документами docsLen
// + queryWords O(Z) - предположительно небольшой сет уникальных слов запроса
// + result O(R)




// allDocsMap формат: слово -> { documentId: count }
const getWordsEntries = (documents, docsLen) => {
    const allDocsMap = new Map();

    for (let i = 0; i < docsLen; i++) {
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

//По каждому запросу надо вывести 5 самых релевантных документов. формат => [[1, 5, 3], [], [3]]
const getRelevantDocs = (docsLen, documents, queryLen, queries) => {
    const result = [];
    const wordsEntries = getWordsEntries(documents, docsLen);

    for (let i = 0; i < queryLen; i++) {
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
    const queryLen = Number(_inputLines[docsLen + 1]);
    const queries = _inputLines.slice(docsLen + 2);

    const result = getRelevantDocs(docsLen, documents, queryLen, queries);

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
flat in moscow for crazy weekends buy buy`.split('\n'));
/*
4 5 1 2 3
*/