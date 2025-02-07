
const removeFromArray = function(array, ...args) {

    let newArray = array.filter((element) => !args.includes(element));

    return newArray;

};

/*
En este ejercicio usamos rest arguments y el método filter.
*/

// Do not edit below this line
module.exports = removeFromArray;
