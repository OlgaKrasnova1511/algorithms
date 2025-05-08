function isSubsequence(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    // как понять дострочно что фолс?
    // мы дошли до конца второй строки
    // мы наткнулись на s[i+1] раньше чем на s[i]

    // а тру - если нашли в t[j] s[i] и s[i] последний символ в s?

    while(!!t[tPointer]) {
        if (!s[sPointer]) {
            console.log('True');
            return;
        }

        if (t[tPointer] === s[sPointer]) {
            sPointer++;
        }

        tPointer++;
    }

    console.log('False');
}

isSubsequence('abc', 'ahbgduc');