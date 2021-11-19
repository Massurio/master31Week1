//Activity 1
//
/*Write code that stores your name, age, and favourite 
colour
The stored data must be output to the console in a 
complete sentence*/
var name1 = "Massurio"
var color = "red"
var age = 31

console.log(`"Hi my name is ${name1} , my favourite color is ${color}, and I am ${age} years old.`);

//Activity 2
//
/*Write code which stores what you may eat today for 
breakfast, lunch, and dinner
This must also be output to the console as a complete 
sentence
Update the stored data and output the same sentence 
again to display the changes*/
var breakfast = "cereal"
var lunch = "Carbonara"
var dinner = "bitoque"

console.log(`For breackfast I have ${breakfast}, lunch I will have ${lunch} and dinner ${dinner}.`)

//Activity 3
//
/*Write code which will calculate how many days from 
today’s date to your birthday
This must also be output to the console as a 
complete sentence*/
const myBirthday = new Date(1990, 5, 7);
const today = new Date(2021, 11, 6);

myBirthday.setFullYear(today.getFullYear());
if (today > myBirthday) {
  myBirthday.setFullYear(today.getFullYear() + 1);
}
console.log('There are ' + Math.floor((myBirthday - today) / (1000 * 60 * 60 * 24))+ ' days left until my birthday.' );

//Activity  4
//
/*Create 9 variables - space1, space 2… 
space 9
Assign either the value of ‘x’, ‘o’, ‘ ‘ to 
each of the variables
Using template literals inject the 
variable data into your board
Output this to the console*/

let grid = [
    ["o", "|", "o", "|", "o"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
  ];
  console.log(grid);
  
  if ((grid[0][0] == "x" && grid[0][2] == "x" && grid[0][4] == "x") || (grid[0][0] == "o" && grid[0][2] == "o" && grid[0][4] == "o")){
    console.log("Winner");
  } else if ((grid[1][0] == "x" && grid[1][2] == "x" && grid[1][4] == "x") || (grid[1][0] == "o" && grid[1][2] == "o" && grid[1][4] == "o")){
    console.log("Winner");
  }