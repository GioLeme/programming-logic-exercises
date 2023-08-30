// Programming logic with JavaScript

// ##### VARIABLES AND DATA TYPES #####

// VARIAVEIS são espacinhos reservados na memória do computador que é usado para atribuir e armazenar valores que podem ou não serem modificados de acordo com a declaração da variável.

//Os DATA TYPES no JS são number, string, boolean, null, undefined, object, array, function, symbol, bigInt.

// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// and log them to the console

const country = "Portugal";
const continent = "Europe";
const population = 10330000;


// _________________________________________________________________________________________________________________


// 2. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet

const isIsland = false;

let language;


// _________________________________________________________________________________________________________________

// 3. Log the types of 'isIsland', 'population', 'country' and 'language'

console.log(country, continent, population, isIsland,language);

// _________________________________________________________________________________________________________________
// 4. Set a value to 'language', and then log the value and its type to the console

language = "portuguese";
c
onsole.log(typeof language);

// _________________________________________________________________________________________________________________


// 5. Declare two variables "a" and "b" and assign them with numbers and log
// to the console. Then, swap the values of the variables and log again.

let a = "Ireland"
let b = "Italy"

console.log(a , b);

const swapping_a = b
const swapping_b = a

a = swapping_a
b = swapping_b

console.log(a,b)