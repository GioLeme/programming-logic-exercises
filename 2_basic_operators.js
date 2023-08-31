// ##### BASIC OPERATORS #####

// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?

const divided_population = population / 2;
console.log(`The population will be ${divided_population} in each country`);


// _________________________________________________________________________________________________________________


// 2. Increase the population of your country by 1 and log the result to the console

console.log(divided_population ++)

// _________________________________________________________________________________________________________________

// 3. Finland has a population of 6 million. Create a variable 'finlandPopulation'
// that equals to Finland's population. Then create a variable 'myCountryPopulation'
// that equals to your country's population. Then log to the console whether your
// country has more people than Finland.

const finlandPopulation = 6000000;
const myCountryPopulation = population;
const diferenceBetweenPopulation = myCountryPopulation - finlandPopulation;

console.log(`My country have ${diferenceBetweenPopulation} more than Finland`);

// _________________________________________________________________________________________________________________

// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country? Log a boolean value 'true' or 'false'

const countryAverage = myCountryPopulation < 33000000;

console.log(countryAverage);

// _________________________________________________________________________________________________________________

// 5. Is your age divisible by 3? Log a boolean value 'true' or 'false'

let myAge = 24;
const isMyAgeDivisible = myAge % 3 === 0


console.log(isMyAgeDivisible)
