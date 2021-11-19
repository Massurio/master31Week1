//1
let example = 'Hello, Massurio';
let example2 = 123;
//2


function myFunc() {
  return 'Hello';
}
console.log(myFunc());

//3 - callinga string in different ways
let mystr = 'Massurio';
console.log(mystr.length);
console.log(mystr.toLocaleLowerCase());
console.log(mystr.toUpperCase());

//4 Maths
console.log(Math.floor(Math.random() * 10));

console.log('   |  |');
console.log('   |  |');
console.log('   |  |');
console.log('----------');
console.log('   |  |');
console.log('   |  |');
console.log('   |  |');
console.log('----------');
console.log('   |  |');
console.log('   |  |');
console.log('   |  |');
//5 Multidimentional Arrays
let myArray = [
  ['first', 'second', 'third'],
  ['4', '5', '6'],
];
console.log(myArray[1]);

let myNum = Math.floor(Math.random() * 10);

console.log(myNum);

// Math is a lib, .floor is a method
Math.floor((Math.random() * 1000) / 10 - 50 + 100);

let string = 'All around the world!';
var string2 = 'All around the world... again';

console.log(string.charAt(8));

let num1 = 10;
let num2 = 15;

num1 = num1 + num2;
num1 += num2;

num1++;
console.log(num1);

if (num1 === num2) {
}

let favouriteDrink = 'coffee';

favouriteDrink = favouriteDrink + '1234';

console.log(favouriteDrink);
console.log(`My password is ${favouriteDrink}`);
