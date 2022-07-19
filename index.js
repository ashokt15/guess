let guess, player1, player2;
function spin() {
    guess = Math.floor(Math.random() * 2);
    document.getElementById("value").innerHTML = "";
}
function player1guess() {
    player1 = document.getElementById("player1").value;

}
function player2guess() {
    player2 = document.getElementById("player2").value;
}
const reveal = () => {
    let winner;
    console.log(guess, player1, player2)
    if (guess == player1) { winner = "player1" }
    else if (guess == player2) { winner = "player2" }
    document.getElementById("value").innerHTML = guess + `${winner} is the winner`;
}