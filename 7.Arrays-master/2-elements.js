'use strict';

const removeElements = (array, ...items) => {
    let index = 0;
    for(let item of items) {
        index = array.indexOf(item);
        if (index > -1)
            array.splice(index, 1);
    }
};

let array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);

module.exports = { removeElements };
