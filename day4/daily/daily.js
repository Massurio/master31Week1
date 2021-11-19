//1
function power(num, num) {
  return num ** num;
}
console.log(power(3, 3));
//2
let coffeeOrder = ['Massurio - Latte', 'Alex - Cortado'];
console.log(coffeeOrder[1]);
//3
let coffeeOrder = ['Massurio - Latte', 'Alex - Cortado'];
console.log(coffeeOrder);
coffeeOrder[1] = 'Ana - Dassado';
console.log(coffeeOrder);
//4
let order = ['Milk', 'Honey', 'Coffee', 'Water', 'Tea'];
console.log(order);
order.pop();
console.log(order);
order.push('Butter');
console.log(order);
//5
let favDrink = ['Fanta', 'Coke', 'Red Bull'];

for (let i = 0; i < favDrink.length; i++) {
  console.log(favDrink[i]);
}
//6
let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(`Multiples of  two: ${multiplesTwo}`);
//7
let multiplesTwo = [];

for (let i = 0; i <= 2000; i++) {
  if (i % 2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(`Multiples of  two: ${multiplesTwo}`);
//8
let x = 0;
let i = 10;
while (x < i) {
  console.log(x);
  x++;
}
//9
let age = 15;

while (age < 18) {
  console.log('You are a child');
  age++;
}
console.log('You are an adult');
