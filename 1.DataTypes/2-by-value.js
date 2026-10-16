'use strict';

const inc = (n) => {
    if (typeof(n) === 'number')
        return n+1;

    return undefined;
}

const a = 5;
const b = inc(a);
console.dir({a, b});

module.exports = { inc };
