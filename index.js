const names = [ 'Lisa', 'Kaitlin', 'Jan' ]
let event = 'surprise'

function writeCards(names, event) {
    let messages = []
    for (let count = 0; count < names.length; count++) {
        messages.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`)
    }
    return messages;
}

function countDown(num) {
    while (num >= 0){
        console.log(num);
        num--;
    }
}