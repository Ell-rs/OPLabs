'use strict';

const square = (x) => {
    return x*x;
}

const cube = (x) => {
    return x*x*x;
}

const average = (a, b) =>{
    return (a+b)/2;
};

const calculate = () =>{
    const result = [];

    for(let i = 0; i <= 9; i++){
        const iSquare = square(i);
        const iCube = cube(i);
        const iAverage = average(iSquare, iCube);

        result.push(iAverage);
    }

    return result;
};

console.log(calculate());

module.exports = { square, cube, average, calculate };
