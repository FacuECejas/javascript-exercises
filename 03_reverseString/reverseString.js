const reverseString = function(string) {
    let newString = '';
    let stringIndex = 0;

    for(let i = 0; i < string.length; i++) {
        stringIndex = string.length - 1 - i;
        newString += string.slice(stringIndex, stringIndex + 1);
    }

    return newString;
};

/*
Notar que una solución equivalete era:

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

Lo que primero convierte al string en un array, lo invierte y
luego convierte el array invertido en un string nuevamente.
*/

// Do not edit below this line
module.exports = reverseString;
