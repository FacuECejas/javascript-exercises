const repeatString = function(string, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";

    let newString = '';
    for (let i = 0; i < numOfTimes; i++){
        newString += string;
    }

    return newString;
};

//La funcion toma dos argumentos, un string y un numero x
//Devuelve un string que esta formado por el string original repetido x cantidad de veces

//Crear una variable para almacenar el string resultado, inicializarlo en vacío
//Utilizar un loop que va desde 0 hasta numOfTimes - 1 veces
    // Concatenar el nuevo string con string argumento
//Al salir del loop, retornar el nuevo string

// Do not edit below this line
module.exports = repeatString;
