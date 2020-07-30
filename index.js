// Code your solutions in this file
function writeCards( namesArray, event ) {
    let thankyouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
        thankyouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankyouCards
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
        console.log( startingNumber );
        startingNumber -= 1;
    }
    console.log( startingNumber );
}