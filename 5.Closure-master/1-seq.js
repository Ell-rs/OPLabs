'use strict';

const seq = (f) => (g) => {
    if(typeof f === 'number')
        return g(f);

    else if(typeof g === 'number')
        return f(g);

    return seq((x) => f(g(x)));
};

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));

module.exports = { seq };
