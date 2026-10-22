'use strict';

const unique = (array) => {
    const result = [];
    array.forEach((item) => {
        if(!result.includes(item))
            result.push(item);
    })

    return result;
};

let result = unique([2, 1, 1, 3, 2]);
console.log(result);

result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);

module.exports = { unique };
