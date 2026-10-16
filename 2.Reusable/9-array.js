'use strict';


const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Oliver Aurelius', phone: '+380673207761' },
    { name: 'Anna Aurelius', phone: '+380945623924' },
    { name: 'Kate Aurelius', phone: '+380545642924' }];

const findPhoneByName = (name) => {
    for(let i = 0; i < phonebook.length; i++) {
        if(phonebook[i].name === name) {
            return phonebook[i].phone;
        }
    }

    return null;
};

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Oliver Ululu'));

module.exports = { phonebook, findPhoneByName };
