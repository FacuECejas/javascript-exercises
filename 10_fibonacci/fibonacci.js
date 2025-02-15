const fibonacci = function(number) {
    number = Number(number);
    if (number < 0) return "OOPS";
    if (number === 0) return 0;

    let first = 1;
    let second = 1;

    let fibo = 1;

    for (let i = 2; i < number; i++){
        fibo = first + second;
        first = second;
        second = fibo;
    }

    return fibo;

};

// Do not edit below this line
module.exports = fibonacci;
