const convertToCelsius = function(tempInFahrenheit) {
  
  let tempInCelsius = (tempInFahrenheit - 32) / (9/5);
  let rounded = parseFloat(tempInCelsius.toFixed(1));

  return rounded;
};

const convertToFahrenheit = function(tempInCelsius) {

  let tempInFahrenheit = (tempInCelsius * 1.8) + 32;
  let rounded = parseFloat(tempInFahrenheit.toFixed(1));
  
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
