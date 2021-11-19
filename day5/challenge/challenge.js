const playerObj = {
  name: '',
  class: '',
  inventory: {
    weapons: ['', 'Cannon', 'Sword'],
    utility: ['HP', 'Bread'],
    misc: {
      torch: 2,
    },
  },
};

for (let i = 0; i < playerObj.inventory.utility.length; i++)
  if (playerObj.inventory.utility[i] === 'Bread') {
    HP++;
    break;
  }