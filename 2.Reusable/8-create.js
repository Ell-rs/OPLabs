'use strict';

const createUser = (name, city) => {
    return {name: name, city: city};
}

console.log(createUser('Marcus Aurelius', 'Roma'))

module.exports = { createUser };
