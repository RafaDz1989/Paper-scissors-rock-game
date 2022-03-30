const gameBtns = document.querySelectorAll('.game-btn');
const newGameBtn = document.querySelector('.new-game-btn');
const result = document.querySelector('.result');
const finalResult = document.querySelector('.final-result');
const roundNumber = document.querySelector('.round-number');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const gameRoundModal = document.querySelector('.game-round');
const input = document.querySelector('input');
const gameRoundBtn = document.querySelector('.game-round-btn');
const warningText = document.querySelector('.warning-text');

let playerScoreNumber = 0;
let computerScoreNumber = 0;

const showModal = () => {
    gameRoundModal.classList.add('active');
    clearStuff();
};

const startNewGame = () => {
    if (input.value !== '') {
        gameRoundModal.classList.remove('active');
        roundNumber.textContent = input.value;
        gameBtns.forEach(btn => btn.classList.remove('nohover'));
        gameBtns.forEach(btn => btn.disabled = false);
    } else {
        warningText.textContent = 'Musisz wpisać liczbę od 1 do 99';
    };
};

const validateInput = () => {
    if (input.value > 99) {
        input.value = '99';
    } else if (input.value <= 0) {
        input.value = '';
    };
};

const playerMove = arg => {
    let computer = Math.floor(Math.random() * 3 + 1);
    let player = arg.target.classList[0];

    if (computer === 1) {
        computer = 'paper';
    } else if (computer === 2) {
        computer = 'rock';
    } else if (computer === 3) {
        computer = 'scissors';
    };

    if (player === 'paper' && computer === 'paper') {
        result.textContent = `Wybrałeś ✋. Komputer również wybrał ✋. Mamy remis`;
    } else if (player === 'rock' && computer === 'rock') {
        result.textContent = `Wybrałeś ✊. Komputer również wybrał ✊. Mamy remis`;
    } else if (player === 'scissors' && computer === 'scissors') {
        result.textContent = `Wybrałeś ✌. Komputer również wybrał ✌. Mamy remis`;
    } else if (player === 'paper' && computer === 'rock') {
        result.textContent = `Wybrałeś ✋, a komputer ✊. Papier owija kamień. Gracz wygrywa :)`;
        addPointToPlayer();
    } else if (player === 'paper' && computer === 'scissors') {
        result.textContent = `Wybrałeś ✋, a komputer ✌. Nożyce tną papier. Komputer wygrywa :(`;
        addPointToComputer();
    } else if (player === 'rock' && computer === 'scissors') {
        result.textContent = `Wybrałeś ✊, a komputer ✌. Kamień tępi nożyce. Gracz wygrywa :)`;
        addPointToPlayer();
    } else if (player === 'rock' && computer === 'paper') {
        result.textContent = `Wybrałeś ✊, a komputer ✋. Papier owija kamień. Komputer wygrywa :(`;
        addPointToComputer();
    } else if (player === 'scissors' && computer === 'paper') {
        result.textContent = `Wybrałeś ✌, a komputer ✋. Nożyce tną papier. Gracz wygrywa :)`;
        addPointToPlayer();
    } else if (player === 'scissors' && computer === 'rock') {
        result.textContent = `Wybrałeś ✌, a komputer ✊. Kamień tępi nożyce. Komputer wygrywa :(`;
        addPointToComputer();
    };

    if ((playerScoreNumber == roundNumber.textContent) || (computerScoreNumber == roundNumber.textContent)) {
        if (playerScoreNumber > computerScoreNumber) {
            finalResult.textContent = `Koniec gry! Wygrana ${playerScoreNumber} do ${computerScoreNumber}!`;
        } else {
            finalResult.textContent = `Koniec gry! Przegrana ${playerScoreNumber} do ${computerScoreNumber}...`;
        };
        
        gameBtns.forEach(btn => btn.classList.add('nohover'));
        gameBtns.forEach(btn => btn.disabled = true);
    };
};

const addPointToPlayer = () => {
    playerScoreNumber++;
    playerScore.textContent = playerScoreNumber;
};

const addPointToComputer = () => {
    computerScoreNumber++;
    computerScore.textContent = computerScoreNumber;
};

const clearStuff = () => {
    result.textContent = '';
    finalResult.textContent = '';
    input.value = '';
    warningText.textContent = '';
    roundNumber.textContent = '';
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScore.textContent = '0';
    computerScore.textContent = '0';
};

newGameBtn.addEventListener('click', showModal);
gameRoundBtn.addEventListener('click', startNewGame);
gameBtns.forEach(btn => btn.addEventListener('click', playerMove));