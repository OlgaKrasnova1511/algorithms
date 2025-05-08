const a = 1000;
const m = 123987123;

function hash(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result = (result * a + str.charCodeAt(i)) % m;
    }
    return result;
}

const seen = new Map();

function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

while (true) {
    const str = generateRandomString(7);
    const h = hash(str);

    if (seen.has(h)) {
        const other = seen.get(h);
        if (other !== str) {
            console.log('Collision found!');
            console.log(other);
            console.log(str);
            break;
        }
    } else {
        seen.set(h, str);
    }
}

console.log(seen);
