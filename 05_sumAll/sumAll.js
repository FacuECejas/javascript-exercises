const sumAll = function(int1, int2) {
    if(int1 < 0 || 
       int2 < 0 || 
       typeof int1 !== "number" || 
       typeof int2 !== "number" || 
       int1 !== Math.floor(int1) ||
       int2 !== Math.floor(int2)) {
            return "ERROR";
       }

    if (int1 > int2){
        let aux = int1;
        int1 = int2;
        int2 = aux;
    }

    let sum = 0;
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }

    return sum;
};

/*
Notar que podría haber usado el metodo isInteger para
chequear si es número y es entero a la vez.
*/

// Do not edit below this line
module.exports = sumAll;
