let player = '';
let counter = 0;

function onClick(id) {
    const button = document.getElementById(id);
    
    counter++;

    button.setAttribute('disabled', true);
    button.innerHTML = "<p class='player-text'>"+player+"</p>";


    if (checkWin()) {
        alert('Jogador ' + player + ' ganhou!!!');
        return;
    }

    if (counter >= 9) {
        alert('Deu Velha!');
        return;
    }

    changePlayer();
}

function checkWin() {
    const 
        btn1 = document.getElementById('btn1').innerText,
        btn2 = document.getElementById('btn2').innerText,
        btn3 = document.getElementById('btn3').innerText,
        btn4 = document.getElementById('btn4').innerText,
        btn5 = document.getElementById('btn5').innerText,
        btn6 = document.getElementById('btn6').innerText,
        btn7 = document.getElementById('btn7').innerText,
        btn8 = document.getElementById('btn8').innerText,
        btn9 = document.getElementById('btn9').innerText;

    if( 
        (btn1 === player && btn2 === player && btn3 === player) || 
        (btn4 === player && btn5 === player && btn6 === player) ||
        (btn7 === player && btn8 === player && btn9 === player) ||
        (btn1 === player && btn4 === player && btn7 === player) ||
        (btn2 === player && btn5 === player && btn8 === player) ||
        (btn3 === player && btn6 === player && btn9 === player) ||
        (btn1 === player && btn5 === player && btn9 === player) ||
        (btn3 === player && btn5 === player && btn7 === player) 
    ) return true;

    return false;
}

function changePlayer() {
    const htmlPlayer = document.getElementById('player');
    player = player === 'X' ? 'O' : 'X';

    htmlPlayer.innerText = 'Jogador da vez: ' + player;
}

function clearButtons() {
    for (let i = 1; i <= 9; i++) {
        const btn = document.getElementById('btn'+i);
        btn.innerText = "";
        btn.removeAttribute('disabled');
    }
}

function init() {
    clearButtons();
    player = '';
    changePlayer();
}

init();
