const convertToCelsius = function(temp_F) {
  const temp_C = (temp_F - 32) / (9 / 5)
  return Math.round(temp_C*10)/10
};

const convertToFahrenheit = function(temp_C) {
  const temp_F = (temp_C * (9 / 5) + 32)
  return Math.round(temp_F*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



// let result == Math.round(number*10)/10;
// rounds result to one decimal place