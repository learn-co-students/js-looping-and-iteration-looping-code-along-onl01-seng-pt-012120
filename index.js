const cards = ["Lisa", "Kaitlin", "Jan"];

function writeCards(cards) 
{   
  const message = [];
    for (let i = 0; i < cards.length; i++) {
      console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
      message.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }

    return message;
   
  }

  writeCards(cards);
   
  function countDown(num)
  {
  let count = num
  while (count >= 0) {
    console.log(count--);
  }
}