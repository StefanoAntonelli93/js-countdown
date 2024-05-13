'use strict'
console.log('ok');

// - definisco variabile per il conto alla rovescia(bdayCountDown)
// - creo una funzione setTimeout con durata 10 secondi(countDown)
// - concateno la funzione alla variabile(bdayCountDown)
// - creo una funzione stopFunction e le assegno un clearTimeout




// const bdayCountDown = setTimeout(countDown, 10_000);

// function countDown() {
//     alert('BUON COMPLEANNOOOOOOO!!!!');
// }

// BONUS 2
// METODO 1 bonus
// - in HTML lego onclick la funzione "stopFunction()"
function stopFunction(){
    clearTimeout(bdayCountDown);
    alert('il countdown è stato interrotto');
    console.log('ho fermato il count down!');
}


// METODO 2 bonus
// - creo in HTML button (STOP)
// - definisco variabile stopCount e le assegno la classe .stop 
// - creo un evento che al click attivi la funzione stopFunction

// const stopCount = document.querySelector('.stop');

// stopCount.addEventListener('click' ,stopFunction)


//BONUS 1

const countElement = document.getElementById('countdown');
let seconds = 10;

function startCountdown() {
    if (seconds > 0) {
        countElement.textContent = `secondi rimanenti: ${seconds}`;
        seconds--;
        setTimeout(startCountdown, 1000);
    }   else {
        countElement.textContent = ('AUGURIIIII');
        alert('buon compleannoooo');
    }
}
const bdayCountDown = setTimeout(startCountdown, 0); 






