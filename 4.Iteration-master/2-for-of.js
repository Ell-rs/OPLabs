'use strict';

const sum = (...args) => {
    let result = 0;
    for(args of args)
       result += args;

    return result;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));

module.exports = { sum };
