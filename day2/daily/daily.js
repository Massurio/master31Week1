//1 Output temperature conversion
const multiplyByNineFifths = (celsius) => {
  return celsius * (9 / 5);
};
const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The  temperature is ' + getFahrenheit(15) + '°F');

//2
const pressGrindBean = () => {
  console.log('Grind for 20 seconds');
};
pressGrindBean();

//3
//Anonymous function
const square = function (number) {
  return number * number;
};
console.log(square(5));
