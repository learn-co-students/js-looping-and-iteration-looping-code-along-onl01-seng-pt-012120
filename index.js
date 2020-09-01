// Code your solutions in this file
let thanks = [];
function writeCards(cards){
  for(let x = 0; x < cards.length; x++) {
   thanks[x] = 'Thank you, ' + cards[x] + ', for the wonderful surprise gift!';
  }
  return thanks;
}

function countDown(num){
  for(let x = 0; x <= num; num--) {
    console.log(num);

  }

}
