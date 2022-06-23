/*
1-Scrivere un programma che generi numeri da 1 a 100. 
2-Stampare Fizz al posto di 3 e multipli.
3-Stampare Buzz al posto di 5 e multipli.
4-Stampare FizzBuzz al posto dei multipli sia di 3 e 5.
*/

/* Prendo contenitore dal Dom */
let tableOfNumbers = document.getElementById('table');

for (let i = 1; i <= 100; i++) { //generatore da 1 a 100
    
    if ( i % 3 ==0 & i % 5 == 0) { //stampa FizzBuzz per i multipli di 3 e 5
        console.log('FizzBuzz');
    }  else if( i % 5 == 0) { //stampa Buzz per i multipli di 5
        console.log('Buzz');
    }  else if( i % 3 == 0) { //stampa Fizz per i multipli di 3
        console.log('Fizz');
    } else { console.log(i) } //stampo i numeri non multipli di 3 o 5
}

/* Trasporto gli elementi al DOM */

tableOfNumbers.innertext = i;