// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const oddOrEvenUserInput = prompt("Scegli pari o dispari!");
// const userNumber = Number(prompt("scegli un numero da 1 a 5"));
const computerNumber = randomNumbers(1, 5);
console.log = (computerNumber)