// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma
// function checkPalindrome(string) {
//     // calcolo la lunghezza della stringa
//     const len = string.length;
//     // scorro metà della stringa
//     for (let i = 0; i < len / 2; i++) {
//         // controllo se metà stringa e' uguale all'altra metà
//         if (string[i] === string[len - 1 - i]) {
//             return 'La tua parola è palindroma!!!';
//         }
//     }
//     return 'La tua parola non è palindroma ';
// }
// const parolaUtente = prompt("inserisci una parola e ti dirò se è palindroma!!!");

// const checkStringa = checkPalindrome(parolaUtente);
// console.log(checkStringa)

/*--------------------------
         FUNCTIONS 
---------------------------*/
function isPalindrome(word) {
    let wordReverse = "";
    for (let i = word.lenght - 1; i >= 0; i--) {
        wordReverse += word[i];
    }
    if (word === wordReverse) {
        return true;
    } else {
        return false;
    }
}

/*--------------------------
           MAIN 
---------------------------*/
const word = prompt("inserisci la parola");

if (isPalindrome(word)) {
    alert("parola palindroma");
} else {
    alert("parola non palindroma");
}