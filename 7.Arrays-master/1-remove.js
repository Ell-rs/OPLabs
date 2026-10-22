'use strict';

const removeElement = (array, item) => {
  let index = array.indexOf(item);
  if(index > -1)
      array.splice(index, 1);
};

let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima');
removeElement(array, 'Berlin');
console.log(array);

module.exports = { removeElement };
