'use strict';

const array = () => {
    const items = [];

    const arr = (index) => items[index];

    arr.push = (value) =>{
        items.push(value);
    }

    arr.pop = () =>{
        return items.pop();
    }

    return arr;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());

module.exports = { array };
