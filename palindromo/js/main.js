// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
function checkPalindrome(string) {
    // calcolo la lunghezza della stringa
    const len = string.length;
    // scorro metà della stringa
    for (let i = 0; i < len / 2; i++) {
        // controllo se metà stringa e' uguale all'altra metà
        if (string[i] === string[len - 1 - i]) {
            return 'La tua parola è palindroma!!!';
        }
    }
    return 'La tua parola non è palindroma ';
}
const parolaUtente = prompt("inserisci una parola e ti dirò se è palindroma!!!");

const checkStringa = checkPalindrome(parolaUtente);
console.log(checkStringa)

"anna"
"cascas"