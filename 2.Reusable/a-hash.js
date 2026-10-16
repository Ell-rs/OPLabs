'use strict';

const phonebook = {
    'Marcus Aurelius': '+380445554433',
    'Oliver Aurelius': '+380673207761',
    'Anna Aurelius': '+380945623924',
    'Kate Aurelius': '+380545642924' };

const findPhoneByName = (name) => {
    return phonebook[name];
}

console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Marcus Ululu"));

module.exports = { phonebook, findPhoneByName };
