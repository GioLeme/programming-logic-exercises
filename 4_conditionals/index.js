// ##### CONDITIONALS #####

// 1. Create a prompt asking for the user's age and store it in a variable.
// Then, use an if/else statement to log "You can drive" if the user is at least
// 18 years old, or "You cannot drive" otherwise.

    // const userAge = +prompt ("Qual a dua idade?");

    // const permissionToDrive = userAge >= 18 ? "you can drive" : "you can't drive";

    // console.log (permissionToDrive);

// _________________________________________________________________________________________________________________


// 2. Create a variable with a language code (e.g. "pt", "en", "es").
// Then, use an if/else statement to log "Portuguese" if the language is "pt",
// "English" if the language is "en", "Spanish" if the language is "es",
// and "Invalid language" otherwise.

// const language = prompt("Qual português você fala? Brasileiro ou Europeu?");

// if (language.toLowerCase() === "brasileiro") {
//     const answerSubtitle = "Deve escolher a legenda PT_BR"
//     console.log(answerSubtitle)
// } else if (language.toLowerCase() === "europeu") {
//     const answerSubtitle = "Deve escolher a legenda PT-PT"
//     console.log(answerSubtitle)
// } else {
//     console.log("invalid language")
// };

// _________________________________________________________________________________________________________________


// 3. Create a prompt asking for the user's weight and height and store them
// in variables. Then, calculate the BMI (Body Mass Index) and log it to the console.
// The formula is BMI = weight / (height * height). (weight in kg and height in m)

// const userWeight = prompt("qual o seu peso?")
// const userHeight = prompt("qual a sua altura?")

// const parseWeight = userWeight.replace(/[.,]/g , "");
// const parseHeight = userHeight.replace(/[.,]/g , "");

// const bodyMassIndex = parseWeight / (parseHeight * parseHeight)

// console.log(parseWeight);
// console.log(parseHeight);
// console.log(bodyMassIndex);

// _________________________________________________________________________________________________________________


// 4. Create a variable called "dice" and assign it a random number between 1 and 6.
// Then, ask the user to guess the number and store the answer in a variable.
// Finally, log to the console if the user guessed the number correctly or not.

// const promptDice = +prompt("Tente acertar o numero que escolhi entre os numeros 1 e 6");
// const dice = 5;


// if ( dice ===  promptDice ) {
//     console.log("acertou!")
// } else console.log("errrou")

// _________________________________________________________________________________________________________________


// 5. Create a variable called "score" and ask the user a number between 0 and 100.
// Then, log to the console the grade according to the following rules:
// - 90-100, A
// - 80-89, B
// - 70-79, C
// - 60-69, D
// - 0-59, F

// const score = +prompt ("digite um numero entre 1 e 100 e direi em qual sala você foi alocado")

// if (score <= 59){
//     console.log("sala F")
// } else if (score <= 69 ){
//     console.log("sala D")
// } else if (score <= 79 ){
//     console.log("sala C")
// }
// else if (score <= 89 ){
//     console.log("sala B")
// } else if (score <= 100 ){
//     console.log("sala A")
// } else {
//     console.log("senha inválida")
// };
