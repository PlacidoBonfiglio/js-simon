console.log('JS OK');

// Prendo elementi dal DOM
// Metto il timer da 30 secondi
// Genero 5 numeri casuali
// Sostituisco i numeri casuali con gli input
// Stampo i numeri che l'utente ha indovinato

//FUNZIONI
// Creo funzione che genera numeri casuali
const createRandomNumbers = (max, totalNumbers) => {
    const randomNumbers = [];

    // Ciclo while poiché dovrò pescare più volte il numero casuale per non avere doppioni
    while (randomNumbers.length < totalNumbers) {
        const randomNumber = Math.floor(Math.random() * max) + 1;

        // Controllo se il numero creato è già nell'array. Se si, genero altri numeri
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}

// Arrow function per rimuovere la classe
const removeClass = () => {
    inputSection.classList.remove('d-none');
}

// Arrow function per aggiungere la classe
const addClass = () => {
    numbersElement.classList.add('d-none');
}

const timerElement = document.getElementById('timer');
const numbersElement = document.getElementById('mem-numbers');
const inputSection = document.getElementById('div-input');
const input = document.querySelector('input');
const playButton = document.getElementById('play-btn');
const verifyButton = document.getElementById('verify-btn');
const messageElement = document.getElementById('message');

let seconds = 3;
timerElement.innerText = seconds;

const userInput = input.value;
const verifyArray = [];



// Creo evento al click
playButton.addEventListener('click', () => {

    // Ogni volta che clicco il timer riparte da 30 secondi
    seconds = 3;

    const cowntdown = setInterval(() => {
        // Stampo in pagina il countdown
        timerElement.innerText = --seconds;
        // Se il timer arriva a 0 allora si ferma
        if (seconds === 0) clearInterval(cowntdown);
    }, 1000)

    // Modufuco la scritto all'interno del bottone
    playButton.innerText = 'Rigioca';

    // I numeri casuali comapiono ad ogni click
    numbersElement.classList.remove('d-none');

    // Gli input diventano invisibili ad ogni click
    inputSection.classList.add('d-none');

    // Creo 5 numeri casuali e diversi, con un valore massimo di 100
    const memoryNumbers = createRandomNumbers(100, 5);

    // Aggiungo uno spazio tra un numero e l'altro
    numbersElement.innerText = memoryNumbers.join(' - ');

    // I nemri scompaiono alla fine del countdown
    setTimeout(addClass, 3000);
    
    // gli input compaiono alla fine del countdown
    setTimeout(removeClass, 3000);

    

})

verifyButton.addEventListener('click', () => {
    verifyArray.push(userInput);
    console.log(verifyArray);
})