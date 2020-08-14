// Code your solutions in this file


    function writeCards(cards,event) {
        let successMessages = [];
        for (let i = 0; i < cards.length; i++) {

            successMessages.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);

        } 
        return successMessages;
    }
    
   
    function countDown(number){
        while (number >= 0) {
            console.log(number--);
        }
        
    }
