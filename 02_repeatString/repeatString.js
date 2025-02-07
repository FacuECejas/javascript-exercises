const repeatString = function(string, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";

    let newString = '';
    for (let i = 0; i < numOfTimes; i++){
        newString += string;
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
