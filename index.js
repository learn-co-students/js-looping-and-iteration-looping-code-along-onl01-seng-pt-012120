// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const message = [];

function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
return message
}

writeCards(message);



function countDown() {
let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
countDown()