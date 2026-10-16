'use strict';

const random = (min = 0, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(random(2, 5));

module.exports = { random };
