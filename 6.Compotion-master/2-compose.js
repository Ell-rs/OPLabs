'use strict';

const compose = (...fns) => {

    const errorHandlers = [];

    const composing = (x) => {
        try{
            for(let i = fns.length - 1; i >= 0; i--) {
                if(typeof fns[i] != 'function')
                    throw new TypeError("Error. Argument must be a function.");
            }

            return fns.reduceRight((acc, currentValue) => currentValue(acc), x);
        }

        catch(e) {
            for(const handler of errorHandlers) {
                handler(e);
            }
            return undefined;
        }
    }

    composing.on = (event, handle) => {
        if(event === "error") {
            errorHandlers.push(handle);
        }
    }

    return composing;
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);
const f2 = compose(inc, inc);
const f3 = compose(inc, 7, cube);
console.log(f(5));
console.log(f2(7));
console.log(f3(7));


module.exports = { compose };
