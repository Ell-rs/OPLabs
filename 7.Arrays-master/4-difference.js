'use strict';

const difference = (array1, array2) => {
    const result = [];

    array1.forEach((item) => {
        if (!array2.includes(item))
            result.push(item);
    })

    return result;
};

let array1 = [7, -2, 10, 5, 0];
let array2 = [0, 10];
let result = difference(array1, array2);
console.log(result);

array1 = ['Beijing', 'Kiev'];
array2 = ['Kiev', 'London', 'Baghdad'];
result = difference(array1, array2);
console.log(result);

module.exports = { difference };
