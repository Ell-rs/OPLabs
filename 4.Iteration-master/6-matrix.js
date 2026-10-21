'use strict';

const max = (matrix) => {
    let max = matrix[0][0];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++)
            max = max > matrix[i][j] ? max : matrix[i][j];
    }

    return max;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

module.exports = { max };
