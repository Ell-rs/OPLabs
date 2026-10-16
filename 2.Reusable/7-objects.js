'use strict';

const fn = () => {
    const Obj1 = {name: "name"}
    let Obj2 = {name: "name"}

    Obj1.name = "name2"
    Obj2.name = "name2"

    console.log(Obj1.name)
    console.log(Obj2.name)

    //Obj1 = {name: "name"}
    Obj2 = {name: "name"}

    console.log(Obj1.name)
    console.log(Obj2.name)
};

fn()

module.exports = { fn };
