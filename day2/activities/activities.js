//########## Part 1 ##########
//Activity:
//
/*Create a variable called age.
Write an if statement that logs “Yes I can serve you” if age is 
greater than 17 and else logs “You aren’t old enough”.*/

let age = 31;

if (age > 17) {
  console.log('Yes I can serve you');
} else {
  console.log('You aren’t old enough');
}

//Activity:
//
/*Take your if statement and add a variable 
called country.
Now check if age > 17 and country == “UK”*/
let age = 31;
let country = 'UK';
if (age > 17 && country == 'UK') {
  console.log('Yes I can serve you');
} else {
  console.log('You aren’t old enough');
}

//Activity on switch case:
//
/*Create a variable for any pizza topping.
Create a switch statement, if the topping is one of 
your favourite ingredients, log to the console “These 
are important ingredients for my pizza.” If you don’t 
mind having sausage or onions for example, log to 
the console “I don’t mind having ${topping} on my 
pizza.” Finally, for any toppings you don’t like log 
${topping} should not be on a pizza.”*/
let toppings = ['ham', 'onions', 'meatballs', 'pepperoni', 'olives'];
switch (toppings) {
  case 'ham':
    console.log(`I don’t mind having ${toppings} on my
      pizza.`);

    break;

  default:
    break;
}

//########## Part 2 ##########

//Activity:
//
/*Create a function that takes two parameters 
for a coffee order (size, type of drink)*/

function order(size, drink) {
  return `Your order is a ${size} ${drink}`;
}
console.log(order('large', 'latte'));

//Activity:
/*Take this code and turn it into arrow function syntax*/
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(33));
//Response:
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(33));
