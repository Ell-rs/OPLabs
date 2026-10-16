'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  return ip
      .split('.')
      .map(Number)
      .reduce((result, byte) => (result << 8) + byte)
};
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('127.0.0.1'));

module.exports = { ipToInt };
