const removePunctuation = function (string) {
    let punctuation = /[- _.:,;{\[^~+*¡'?=)(&%$#"!°|¬`\]}]/g
    return string.replace(punctuation, "");
}

const palindromes = function (string) {
    let cleanedStr = removePunctuation(string);
    let finalStr = cleanedStr.toLowerCase();

    let temp = finalStr.split('');
    temp.reverse();
    let reversedStr = temp.join('');

    return reversedStr === finalStr;
};

/*
Notar que en la forma en la que lo hice, quizas no cubra todos los signos.
Por ello, la respuesta dada en "solution" cubre todos los casos realmente.
Además de que se ve más limpio el código. 
*/

// Do not edit below this line
module.exports = palindromes;
