export let hands = ['rock', 'paper', 'scissors'];

export function getHand() {
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}

export let player1 = {
    name: 'Kobe',
    getHand: () => getHand(),
};
export let player2 = {
    name: 'Lebron',
    getHand: () => getHand(),
};
export function playRound(player1,player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();
    let result ="";
    
    console.log(player1.name + ' played ' + hand1)
    console.log(player2.name + ' played ' + hand2)
    if (hand1 == hand2) {
        console.log("Its a tie")
        result = 'null';    
    }
    else if (hand1 == hands[0] && hand2 == hands[2]){
        result = player1.name + " wins";
    }
    else if (hand1 == hands[0] && hand2 == hands[1]){
       
        result = player2.name + " wins";
    }
    else if (hand1 == hands[1] && hand2 == hands[2]){
        
        result = player2.name + " wins";
    }
    else if (hand1 == hands[1] && hand2 == hands[0]){
        
        result = player1.name + " wins";
    }
    else if (hand1 == hands[2] && hand2 == hands[1]){
        
        result = player1.name + " wins";
    }
    else if (hand1 == hands[2] && hand2 == hands[0]){
        
        result = player2.name + " wins";
    }
return result
}

console.log(playRound(player1,player2));

export function playGame (player1, player2, playUntil){
let player1Wins = 0
let player2Wins = 0

while(player1Wins < playUntil && player2Wins < playUntil) {
    console.log('Current Score: ', player1.name, ':' ,player1Wins);
    console.log('Current Score: ', player2.name, player2Wins);
    if(!playRound(player1, player2)) {

    } else if (playRound(player1, player2) === player1) {
        player1Wins++;
    } else {
        player2Wins++;
    }
}
if (player1Wins === playUntil) {
    return player1;
} else {
    return player2;
}
}
console.log(playGame(player1,player2,9))




// function playGame(player1,player2,playUntil = 5){
//     let playerCounter1 = playUntil;
//     let playerCounter2 = playUntil;
//     while(i = 0, i < 6)
// }

   
   
   
    // let player1 = player1.name
    // let player2 = player2.name

    // let playUntil = 
