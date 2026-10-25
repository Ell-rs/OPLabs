'use strict';

const pipe = (...fns) => (x) => {
    for(const fn of fns) {
        if(typeof fn != 'function')
            return "Error. Argument must be a function.";
    }

    return fns.reduce((acc, currentValue) => currentValue(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const f2 = pipe(inc, inc);
const f3 = pipe(inc, 7, cube);
console.log(f(5));
console.log(f2(7));
console.log(f3(7));

module.exports = { pipe };
