// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let oddOrEvenUserInput;
do {
    oddOrEvenUserInput = prompt("Scegli pari o dispari!");
} while (oddOrEvenUserInput !== "pari" && oddOrEvenUserInput !== "dispari")
console.log("hai scelto: " + oddOrEvenUserInput)

const userNumber = Number(prompt("scegli un numero da 1 a 5"));
console.log("hai scelto il numero:" + userNumber)
const computerNumber = randomNumbers(1, 5);
console.log("il numero generato dal pc e': ", computerNumber)
const sum = computerNumber + userNumber
if (isEven(sum) == true && oddOrEvenUserInput == "pari") {
    console.log("la somma e':" + sum);
    console.log("Congratualazioni, hai vinto!")
} else if (isEven(sum) == false && oddOrEvenUserInput == "dispari") {
    console.log("la somma e':" + sum);
    console.log("Congratualazioni, hai vinto!")
} else {
    console.log("la somma e':" + sum);
    console.log("Spiacente,hai perso!")
}