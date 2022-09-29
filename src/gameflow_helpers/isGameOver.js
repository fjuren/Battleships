// helper for isGameOVer
// Functionality to reset game boards after clicking 'PLay again' button
const playAgain = () => {
  window.location.reload();
};

// object -> DOM changes (text & button)
// Adds text with button to play again
const isGameOver = (playerClass) => {
  const textClass = document.getElementsByClassName('text');
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  div.classList.add('gameOver');
  textClass[0].appendChild(div);
  div.appendChild(h3);
  h3.classList.add('gameoverMessage');
  h3.textContent = `Game over. The ${playerClass.name} wins!`;
  // create a button to let user play again
  const btnDiv = document.createElement('div');
  const btn = document.createElement('BUTTON');
  btn.classList.add('btn');
  btn.id = 'gameoverBtn';
  const btnText = document.createTextNode('Play again');

  btnDiv.appendChild(btn);
  btn.appendChild(btnText);
  div.insertAdjacentElement('afterend', btnDiv);

  btn.setAttribute('onclick', playAgain);
  btn.onclick = playAgain;
};

module.exports = isGameOver;
