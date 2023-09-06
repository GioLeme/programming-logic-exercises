// ##### STRINGS AND TEMPLATE LITERALS #####

// 1. Create a new variable 'description' which contains a string with this
// value: 'Portugal is in Europe, and its 11 million people speak portuguese'
// Use the variables you created before, concatenating them with the string
// using template literals.

const description = `${country} is in Europe, and its ${population} people that speak ${language}`;
console.log(description)

// _________________________________________________________________________________________________________________


// 2. Log the country name in uppercase and lowercase. Also log its length.

console.log(country.toUpperCase())
console.log(country.toLowerCase())
console.log(country.length)

// _________________________________________________________________________________________________________________

// 3. Create a variable called "capital" and assign the value "São Paulo". Then,
// replace the space with an underscore and log the result to the console.

const capital = "São Paulo"
console.log(capital.replace(" ", "_"))


// _________________________________________________________________________________________________________________


// 4. Cut the string "Elephant" in half and log the result to the console.

const animal = "Elefante"

const animalLength = animal.length / 2
const splitString = animal.split(animal.charAt(animalLength))

console.log(splitString)

// _________________________________________________________________________________________________________________

// 5. Create a variable called "name" and assign your first name to it.
// Then, log if the string contains more than 7 characters.
// Now, log if the string contain the letter "e".
// Finally, log if it does not contain the letter "e".

const name = "Giovanna";

const biggerThanSeven = name.length > 7;
const hasLetter = name.includes("e")

console.log(biggerThanSeven)

console.log(hasLetter)
console.log(!hasLetter)