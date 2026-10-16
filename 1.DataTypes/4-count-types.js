'use strict';

const countTypesInArray = (array) => {
    let hash = {}

    for(const value of array) {
        const type = typeof(value);
        hash[type] = hash[type] + 1 || 1;
    }

    return hash;
};

const array = [true, 'hello', 5, 12, -200, false, false, 'word', true, null, undefined, 6, 'hello', [2, 3, 7, 1], 'world'];

console.log(countTypesInArray(array));

module.exports = { countTypesInArray };
