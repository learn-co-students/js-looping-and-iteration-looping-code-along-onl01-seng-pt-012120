const cards = ["teddy bear", "drone", "doll"];
 
function writeCards(cards, holiday) {
    let thankyous = [];
  for (let i = 0; i < cards.length; i++) {
    thankyous.push(`Thank you, ${cards[i]}, for the wonderful ${holiday} gift!`);
  }
  return thankyous;
}
 
function countDown(num) {
    while (num != -1) {
    console.log(num)
    num = num - 1 }
}
