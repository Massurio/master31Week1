//Challenge 1(if/else):
//
/*Create a variable called password.
Check how many letters are in the password, if there 
are less than 8 log to the console that the password 
is too short. Otherwise log the password to the 
console.*/
let password = 'My_Password123@';
if (password.length < 8) {
  console.log('The password is too short');
} else {
  console.log(`Your password is: ${password}.`);
}

//Challenge 2: (use both if/else and switch):
//
/*Create a variable called num.
Create a variable called num.
Check if the variable is divisible by 3 or 5. If it is log 
“This number is divisible by 3 or 5” to the console. 
Otherwise log “This number is not divisible by 3 or 5”.*/
let num = 12;
if (num % 3 == 0 || num % 5 == 0) {
  console.log('This number is divisible by 3 or 5');
} else {
  console.log('This number is not divisible by 3 or 5”.');
}

//Challenge 3:
//
/*Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s
divisible by 5 log “buzz” to the console, if it’s divisible
by both 3 and 5 log “fizz buzz” to the console.
Otherwise log num to the console.*/
let num = 15;
if (num % 3 == 0) {
  console.log('fizz');
}
if (num % 5 == 0) {
  console.log('buzz');
}
if (num % 3 == 0 || 5 == 0) {
  console.log('fizz buzz');
}

//Challenge 4:
//
/*Create a variable called num.
Check if the number is a palindrome (looks the same
forward as it does backwards e.g. 1001 or 20202).*/
let num = 20202;

const reverseNum = (num) =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

let reversed = reverseNum(num);

if (num == reversed) {
  console.log('The number is a palindrome.');
} else {
  console.log('The number is not a palindrome.');
}

//Challenge 5:
//
/*Create a variable called time, a variable called
placeOfWork and a variable called townOfHome.
Create an if statement that logs to the console
where someone is at times of the day. E.g. if the time
is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.*/
let time = 7.5;
let placeOfWork = 'Liverpool Cotton Exchange Building';
let townOfHome = 'Wavertree';
if (time <= 7) {
  console.log('At home.');
} else if (time <= 8) {
  console.log("I'm commuting");
} else if (time <= 9) {
  console.log("I'm at work");
}

//Challenge 6:
//
/*Take the string 
“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
Find the index of a last vowel in the string.*/
let str =
  'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
const reverseNum = (num) =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

let vowel = str.toString().slice(-1);

console.log(vowel);
console.log(str.slice(-1));

//Challenge 7:
//
/*Create a variable called word that takes a string.
Create an if statement that checks if the last letter is 
the same as the first. If it is return true, otherwise 
return false.*/
let word = 'Massurio';
let lowerCase = word.toLocaleLowerCase();

if (lowerCase.slice(-1) == lowerCase.charAt(0)) {
  console.log(true);
} else {
  console.log(false);
}

//Challenge 8:
//
/*Create two variables called num1 and num2.
Create an if statement that checks if the result of the 
sum is even. If it is return the number, otherwise return 
the numbers multiplied together*/

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
if (sum % 2 == 0) {
  console.log('Even');
} else {
  console.log('Odd');
}
