// Code your solutions in this file
let messages = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return messages
}

function countDown(int) {
    let i = int;
    while ( i >= 0) {
        console.log(i--);
    }
}

