// Code your solutions in this file
function writeCards(nameList, eventName) {
    let messages = [];
    for (let index = 0; index < nameList.length; index++) {
        messages.push(`Thank you, ${nameList[index]}, for the wonderful ${eventName} gift!`);
        
    };
    return messages;
};

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    };
};