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
const inputFields = inputSection.querySelectorAll('input');
const playButton = document.getElementById('play-btn');
const verifyButton = document.getElementById('verify-btn');
const messageElement = document.getElementById('message');

// Secondi del countdown
let seconds = 30;
// Stampo in pagina la durata del countdown
timerElement.innerText = seconds;

// Raccolta dei numeri che scriverà l'utente negli input
const userChoices = [];

// Creo evento al click
playButton.addEventListener('click', () => {

    // Ogni volta che clicco il timer riparte da 30 secondi
    seconds = 30;

    const countdown = setInterval(() => {
        // Stampo in pagina il countdown
        timerElement.innerText = --seconds;
        // Se il timer arriva a 0 allora si ferma
        if (seconds === 0) clearInterval(countdown);
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
    setTimeout(addClass, 30000);

    // gli input compaiono alla fine del countdown
    setTimeout(removeClass, 30000);

    messageElement.innerHTML = 'In attesa del risultato...'

    // Creo evento al bottone di verifica
    verifyButton.addEventListener('click', () => {

        messageElement.innerHTML = 'In attesa del risultato...'

        // Prendo i valori degli input fields
        for (let input of inputFields) {

            // ParseInto i valori
            const value = parseInt(input.value);

            if (!isNaN(value) && !userChoices.includes(value)) {
                // Pusho i valori ParseIntati all'array userChoices
                userChoices.push(value);
            }
        }

        // validation
        if (userChoices.length !== inputFields.length) {
            messageElement.innerHTML = 'Valori duplicati, mancanti o non validi';
            return;
        }

        console.log(userChoices);

        // Creo array dove verranno inseriti i numeri che l'utente indovina
        const correctNumbers = [];
        for (let choice of userChoices) {
            if (memoryNumbers.includes(choice)) correctNumbers.push(choice);
        }

        // Stampo il risultato
        messageElement.innerHTML = `Hai indovinato <strong>${correctNumbers.length}</strong> numeri! <strong>${correctNumbers}</strong>`;


    })
})

