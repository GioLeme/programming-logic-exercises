// ##### LOOPS #####

// 1. Create a loop that logs the numbers from 0 to 100 to the console.


// for( let num = 0 ; num <= 100 ; num++ ){
//     console.log(num)
// }

// _________________________________________________________________________________________________________________


// 2. Create a loop that logs the numbers from 100 to 0 to the console.


// for( let num = 100 ; num >= 0 ; num-- ){
//     console.log(num)
// }

// _________________________________________________________________________________________________________________


// 3. Create a loop that logs the even numbers from 0 to 100 to the console.


// for( let num = 0 ; num <= 100 ; num++ ){
//     const evenNumber = num % 2 === 0
//     if (evenNumber){
//         console.log(num)
//     }
// }

// _________________________________________________________________________________________________________________


// 4. Create a loop that logs the numbers from 0 to 100, but stops when it finds
// a number that is divisible by 10, and then logs the number that stopped the loop.
// (function () {

// for (let num = 0 ; num <=100 ; num ++) {
//     const divisiblePerTen = num % 10 === 0
//     if (divisiblePerTen){
//         return console.log(num)
//     }

// }
// })()

// _________________________________________________________________________________________________________________


// 5. Ask the user for a number and create a loop that logs the numbers from 0 to
// the user's number. Then, create another loop that logs the numbers from the user's
// number to 0.

// const userNumber = +prompt("digite um número de 1 a 100")

// for (let num = 0; num <= userNumber; num++){
//     console.log(num)
// }

// for (let num = userNumber; userNumber >= num && num >= 0; num--){
//     console.log(num)
// }

// _________________________________________________________________________________________________________________


// 6. Create a loop and ask of the user a number between 1 and 50.
// If the user chooses a number outside that range, ask for a new number. Then, log to the
// console the number the user chose.

// let userNumber;

// do {
//   userNumber = +prompt("digite um número de 1 a 50")
// } while (userNumber >= 50 || userNumber <= 1);

// console.log(userNumber)

// _________________________________________________________________________________________________________________


// 7. Create a loop and ask for the user's name and display it with an alert.
// Ending the loop when the user types "stop".

// let userName;

// do{
//     userName = prompt("Qual o seu nome?")
// } while (userName !== "stop")
