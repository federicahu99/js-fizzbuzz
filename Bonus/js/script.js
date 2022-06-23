/*
1-Scrivere un programma che generi numeri da 1 a 100. 
2-Stampare Fizz al posto di 3 e multipli.
3-Stampare Buzz al posto di 5 e multipli.
4-Stampare FizzBuzz al posto dei multipli sia di 3 e 5.
BONUS:
5-portare gli elementi nel DOM
*/

/* Prendo contenitore dal Dom */
let tableOfNumbers = document.getElementById('table');
let number ='<ul>'

for (let i = 1; i <= 100; i++) { //generatore da 1 a 100
    
    if ( i % 3 ==0 && i % 5 == 0) { //stampa FizzBuzz per i multipli di 3 e 5
        console.log('FizzBuzz');
        number += `<li class="color-fb"> FizzBuzz </li>`
    }  else if( i % 5 == 0) { //stampa Buzz per i multipli di 5
        console.log('Buzz');
        number += `<li class="color-b"> Buzz </li>`
    }  else if( i % 3 == 0) { //stampa Fizz per i multipli di 3
        console.log('Fizz');
        number += `<li class="color-f"> Fizz </li>`
    } else {
        console.log(i);
         number += `<li class="color"> ${i} </li>` 
        } //stampo i numeri non multipli di 3 o 5
}

/* Trasporto gli elementi al DOM */

tableOfNumbers.innerHTML = number + '</ul>';
