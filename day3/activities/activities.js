//Activity:1
/*Let’s create an object called person with a key called 
name and set the value to your name.
//Activity:
Add another key called age
Activity:
Let’s add a list of favourite songs to our person object 
and log them to the console*/
const person = {
  name: 'Massurio',
  age: 31,
  songs: ['Song1', 'Song2', 'Song3'],
};
console.log(person.name);
console.log(person.songs);

//Activity:2
/*Create a key called weekendAlarm, with a value saying “no alarm needed”, 
and a key called weekdayAlarm, with a value saying “get up at 7am”
Create a variable called day and one called alarm
If day is Saturday or Sunday, set alarm to weekendAlarm
If the day is a weekday, set alarm to weekdayAlarm*/

const day = {
  weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};
const alarm = {
  weekendAlarm: 'no alarm needed',
  weekdayAlarm: 'get up at 7',
};
if (day == 'Saturday' || 'Sunday') {
  console.log(alarm.weekdayAlarm);
}
if ((day == 'Monday', 'Tuesday', 'Wednesday', 'Thusrsday', 'Friday')) {
  console.log(alarm.weekendAlarm);
}
//Activity:3
//
/*Let’s edit our person object to include…
A function called sayHi and when it’s called, it should 
return “Hello, my name is ${this.name}”*/
const person = {
  name: 'Massurio',
  age: 31,
  songs: ['Song1', 'Song2', 'Song3'],
};