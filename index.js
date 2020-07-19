// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ];

function writeCards(array) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}

function countDown(n) {
  for (let i = n; i >= 0; i--) {
    console.log(i);
  }
}
