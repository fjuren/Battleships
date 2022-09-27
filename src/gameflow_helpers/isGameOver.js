// object -> DOM changes (text & button)
// Adds text with button to play again

const isGameOver = (playerClass) => {
    // inform game is over and who won
    var textClass = document.getElementsByClassName("text");
    var div = document.createElement("div");
    var h3 = document.createElement("h3");
    div.classList.add("gameOver");
    textClass[0].appendChild(div);
    div.appendChild(h3);
    h3.classList.add("gameoverMessage")
    h3.textContent = `Game over. The ${playerClass.name} wins!`;
    // create a button to let user play again
    var btnDiv = document.createElement("div");
    var btn = document.createElement("BUTTON");
    btn.classList.add("btn");
    btn.id = "gameoverBtn";
    var btnText = document.createTextNode("Play again");

    btnDiv.appendChild(btn)
    btn.appendChild(btnText);
    div.insertAdjacentElement("afterend", btnDiv);

    btn.setAttribute("onclick", playAgain)
    btn.onclick = playAgain;
}

// helper for isGameOVer
// Functionality to reset game boards after clicking 'PLay again' button


const playAgain = () => {
    window.location.reload()
}

module.exports = isGameOver