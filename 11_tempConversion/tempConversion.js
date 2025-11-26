const convertToCelsius = function(temp) {
  let cel = (temp * 9/5) + 32
  let roundedCel = cel.toFixed(1)
  return roundedCel
};

const convertToFahrenheit = function(temp) {
  let fahr = (temp - 32) * 5/9;
  let roundedFahr = fahr.toFixed(1)
  return roundedFahr
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
