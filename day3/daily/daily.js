let currentStock = {
  pepsi: 1,
  coke: 50,
  water: 20,
};

const drinkStock = (drink) => {
  if (currentStock[drink] > 0) {
    return true;
  } else {
    return false;
  }
};

const drinkRequest = (credit, drink) => {
  if (drinkStock(drink) && credit >= 1) {
    currentStock[drink]--;
    console.log(`Here's your ${drink}`);
  } else {
    console.log(`Sorry ${drink} is out of stock`);
  }
};

drinkRequest(2, 'Pepsi');
//2
//OBJECTS
const person = {
  name: 'Massurio',
  age: 31,
};
console.log(person['name']);
