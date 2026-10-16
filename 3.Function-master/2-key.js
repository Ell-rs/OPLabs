'use strict';

const generateKey = (length, possible) => {
  let result = "";
  for (let i = 0; i < length; i++) {
      result += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);

module.exports = { generateKey };
