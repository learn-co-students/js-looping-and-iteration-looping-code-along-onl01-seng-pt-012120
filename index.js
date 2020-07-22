function writeCards(names,word) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${word} gift!`)
    }
    return array;
}

function countDown( number ) {
    let countdown = number;
    while (countdown > -1) {
      console.log(countdown);
      countdown--;
    }
}