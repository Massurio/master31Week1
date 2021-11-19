//##########  PART 1 ##########

//Activity(1):
//
/*Create a list of your favourite website (3 of them), and 
then add another two once you’ve created the list. 
Then remove the last website.*/
let favWebsites = [
  'https://lichess.org/',
  'https://www.netflix.com/gb/',
  'https://www.facebook.com/',
];
favWebsites.push('https://www.instagram.com/', 'https://www.youtube.com/');
console.log(favWebsites);
favWebsites.pop();
console.log(favWebsites);

//Activity(2):
//
/*Research on the following methods: map(), shift(), 
unshift(), slice(), splice() (and many more). Create a 
program to demonstrate the uses of each method, 
some of these you may need more than one example. 
(Pay attention: not all methods would permanently 
update/make changes to the arrays themselves.)*/

let genres = ['Horror', 'Action', 'Drama', 'Thriller'];
//1.1
genres.push('Western'); //Adding Western to the end of the array: genres
console.log('1.1 ' + genres);
//1.2
genres.pop(genres); //Removing 'Western' from the end of the array: genres
console.log('1.2 ' + genres);
//1.3
genres.shift(); // Removing 'Horror' from the front
console.log('1.3 ' + genres);
//1.4
genres.unshift('Comedy', 'Fiction'); //Adding items to the front of the array: genres
console.log('1.4 ' + genres);
//1.5
genres.splice(3, 1); //Removing 1 item from index 3
console.log('1.5 ' + genres);
//1.6
console.log('1.6 ' + genres.slice(0, 2)); // Cutting the array by index between 0 and 2
console.log('1.6 ' + genres.slice(2, 4)); // Cutting the array by index between 2 and 4
//1.7
//Working with the map() funtion
const map1 = new Map();
map1.set('Towel', 'Bathroom');
map1.set('Shoes', 'Front Door');
map1.set('Beer', 'Fridge');
console.log(map1);
console.log(map1.get('Towel'));
console.log(map1.size); //Finding out the size of the map
console.log(map1.delete('Towel')); //Deleting from map
console.log(map1);

//##########  PART 2 ##########

//Activity(1):
//
/*Create an array that lists your favourite films,
up to 5 elements
Add 2 more using a method
Use a loop to cycle through the array */

let favMovies = ['Troy', 'Lord of The Rings', 'Dune', 'Superman', 'Batman'];

favMovies.push('Secret Window', 'The Ninth Gate');

for (let i = 0; i < favMovies.length; i++) {
  console.log(favMovies[i]);
}

//Activity(2):
//
/*Generate 6 random numbers between 1-50*/
for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random() * 50) + 1);
}

//Activity(3):
//
/*If we can create a loop to put 0-9 on the
screen, how can we count from 9 to 0?*/

for (let i = 9; i > -1; i--) {
  console.log(i);
}
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//Activity(4):
//
/*Displays 4 films stored in an array
Use a for loop to show each film in the array
Create a function called filmCheck() that checks if the
3rd film in the array is Ghostbusters.
If it is, it should return “yey it’s ghostbusters”. If it isn’t, it
should return “booo, we want ghostbusters”*/

let movies = ['Troy', 'Ghostbusters', 'Secret Window'];

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

function filmCheck() {
  if (movies.slice(1, 2) == 'Ghostbusters') {
    console.log('yey it’s ghostbusters');
  } else {
    console.log('booo, we want ghostbusters');
  }
}
filmCheck();

//Activity(5):
//
/*Create a variable, generate a random number
between 1 and 30 six times, each random number
generated, check if this number of divisible by 7 or not.*/

for (let i = 0; i < 6; i++) {
  random = Math.floor(Math.random() * 30) + 1;
  if (random % 7 == 0) {
    console.log(random + ' :this number is divisible by 7.');
  } else {
    console.log(random + ' : this number is not divisible by 7.');
  }
}

//Activity(6):
//
/*Research on do…while loop, find out about the difference
between for loop, while loop and do…while loop. Give an
example of each. What are the pros and cons?*/

// for loop - will loop through a block of code a number of specified times
for (let i = 0; i < 10; i++) {
  //looping 10 times
  console.log(i);
}

//while loop - will loop as long as the condition is true
let i = 0;
while (i < 10) {
  // as long as 'i' is less than 10 it will  keep running and stop once it is met
  console.log('The number is ' + i);
  i++; //Include increment... otherwise the loop would never meet the condition and keep running endlessly
}

/*do...while loop - it will execute the code once, before checking if the condition is even true and
then repeat/loop as long as the codition is true*/
let i = 0;

do {
  //Execution without prior condition check
  console.log('The number is ' + i); //Current value 0 - 1st round(output)
  i++; //Current value 1 - 1st round
} while (i < 10);

//Activity(7):
//
/*Create a program that check all numbers between 1
and 20, whether it is a prime number or not.*/

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i < 20; i++) {
  if (isPrime(i)) {
    console.log(i + ' Is a prime');
  } else if (isPrime(i) == false) {
    console.log(i + ' Not a prime!');
  }
}
