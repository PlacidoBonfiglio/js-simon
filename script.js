console.log('JS OK');

// Prendo elementi dal DOM
// Metto il timer da 30 secondi
// Genero 5 numeri casuali
// Sostituisco i numeri casuali con gli input
// Stampo i numeri che l'utente ha indovinato


const timerElement = document.getElementById('timer');
const numbersElement = document.getElementById('mem-numbers');
const inputSection = document.getElementById('div-input');
const playButton = document.querySelector('button');
const messageElement = document.getElementById('message');

let seconds = 3;
timerElement.innerText = seconds;

playButton.addEventListener('click', () => {
    const cowntdown = setInterval(() => {
        timerElement.innerText = --seconds;
        if (seconds === 0) clearInterval(cowntdown);
    }, 1000)

    
})