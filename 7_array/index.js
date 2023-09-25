// ##### ARRAYS #####

// 1. Create an array containing 4 population values of 4 countries of your choice. Log to the console the
// array, the length of the array, and the data type of the array.

// const countries = ["Brasil", "Portugal", "Italia", "Romenia"];

// console.log(countries);
// console.log(countries.length);
// console.log(typeof countries);

// _________________________________________________________________________________________________________________

// 2. Create an array called "cats" containing the names of 3 cats of your choice.
// Log to the console the number of elements in the array, the first and last
// elements of the array, and the array itself.

// const cats = ["Pavarotti", "Edgard", "Edith"]

// console.log(cats.length)
// console.log(cats[0], cats[cats.length - 1])
// console.log(cats)

// _________________________________________________________________________________________________________________


// 3. Create a prompt asking for the user's favorite animal and store it in a variable.
// Then, create an array containing the names of 5 animals, including the one the user
// chose. Log to the console the array.

// const favouriteAnimal = prompt("Qual é o seu animal favorito?")

// const animals = ["Vaca", "Elefante", "Rinoceronte", "Hiena", "Avestruz"]

// animals.push(favouriteAnimal)

// console.log(animals)

// _________________________________________________________________________________________________________________

// 4. Create an array containing the names of 3 countries of your choice.
// Then, remove the last element of the array and log the array to the console.
// Then, add a new country to the array and log the array again.
// Finally, add a new country at the beginning of the array and log the array again.

// const southAmerica = ["Bolivia", "Argentina", "Uzbequistão"]

// southAmerica.pop()

// console.log(southAmerica)

// southAmerica.push("Paraguai")

// console.log(southAmerica)

// southAmerica.unshift("Uruguai")

// console.log(southAmerica)
// _________________________________________________________________________________________________________________

// 5. Create an array containing the names of 3 countries of your choice.
// Then, log to the console the index of the first occurrence of a country that
// starts with an "E".

// const countries = ["Inglaterra", "Irlanda", "Escocia"]

// const startsWithAnE = countries.findIndex((actualItem) => actualItem.startsWith("E"))
// console.log(startsWithAnE)

// _________________________________________________________________________________________________________________

// 6. Create an array containing the names of 3 countries of your choice.
// Then, log to the console the index of the last occurrence of a country that
// starts with an "E".

// const countries = ["Equador", "Estonia", "Escocia", "Egito"]

// const startsWithAnE = countries.findLastIndex((actualItem) => actualItem.startsWith("E"))
// console.log(startsWithAnE)
// _________________________________________________________________________________________________________________

// 7. Create an array containing the names of 3 countries of your choice.
// Then, ask the user for a country and log to the console if the country is
// included in the array or not.

// const countries = ["inglaterra", "irlanda", "escocia"]

// const usersCountry = prompt("Escreva o nome de um país").toLowerCase()

// console.log(countries.includes(usersCountry));
// _________________________________________________________________________________________________________________


// 8. Create an array containing the names of 3 countries of your choice.
// Then, ask the user for a country and log to the console if the country is
// included in the array or not. If it is, remove the country from the array
// and log the array again.

// const countries = ["Brasil", "Japão", "Coreia"]
// const userCountrie = prompt("Escreva o nome de um país")
// const userCountrie = "Japão"

// if (countries.includes(userCountrie)){
//     countries.splice(countries.indexOf(userCountrie), 1)
// console.log("caiu auqui")
// }

// console.log(countries)

// _________________________________________________________________________________________________________________


// 9. Create an array with numbers from 1 to 10. Then, multiply each element
// of the array by 2 and log the array to the console.

// const numbers = [1, 2, 3, 4]
// numbers.forEach((actualItem) => console.log(actualItem * 2))

// _________________________________________________________________________________________________________________


// 10. Create two arrays with 3 elements each. Then, create a third array
// containing the elements of the first two arrays. Log the third array to the console.

// const countries = ["Inglaterra", "Irlanda", "Escocia"]
// const cats = ["Pavarotti", "Edgard", "Edith"]
// const newArray= [...countries , ...cats]

// console.log(newArray)


// _________________________________________________________________________________________________________________


// 11. Create an array with 3 elements. Then, create a second array containing
// the elements of the first array, but in reverse order. Log the second array
// to the console.

// const countries = ["Inglaterra", "Irlanda", "Escocia"]

// console.log(countries.reverse())


// _________________________________________________________________________________________________________________


// 12. Create an array with 3 elements. Then, create a second array containing
// the elements of the first array, but sorted alphabetically. Log the second array
// to the console.

// const animals = ["Zebra", "Avestruz", "Macaco"]

// console.log(animals.sort())


// _________________________________________________________________________________________________________________

// 13. Create an array with 3 elements. Then, create a second array containing
// the elements of the first array, but sorted from largest to smallest. Log the second array
// to the console.

// const animals = [1, 20, 7, 17]
// animals.sort((num1, num2) => num2 - num1)

// console.log(animals)


// _________________________________________________________________________________________________________________


// 14. Create two arrays with numbers from 1 to 5. Then, create a third array
// containing the elements of the first two arrays. Log the third array to the console.

// Repetido

// _________________________________________________________________________________________________________________


// 15. Create two arrays with numbers from 1 to 10 and 11 to 20, respectively.
// Then, create a third array that receives the multiplication of the elements
// of the first two arrays. Log the third array to the console.
// (e.g. [1, 2, 3] * [1, 2, 3] = [1, 4, 9])

// const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const secondArr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// const thirdArr = firstArr.map((_, index) => firstArr[index] * secondArr[index])

// console.log(thirdArr)

// _________________________________________________________________________________________________________________

// 16. Create an array with numbers from 1 to 10. Then filter the array to
// create a new array containing only the even numbers. Log the new array to the console.

// const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const evenNumbers = firstArr.filter((actualItem) => actualItem % 2 === 0)

// console.log(evenNumbers)

// _________________________________________________________________________________________________________________


// 17. Create a function that receives an array and returns a boolean value
// indicating if the array has only even numbers or not.
// Then, log to the console the result of the following arrays:
// 17.1. [1, 2, 3, 4, 5, 6]
// 17.2. [2, 4, 6, 8, 10]


// function evenNumbers (arr) {
//     return arr.every((actualItem) => (actualItem % 2 === 0))
// }

//   console.log(evenNumbers([1, 2, 3, 4, 5, 6]))
//   console.log(evenNumbers([2, 4, 6, 8, 10]))

// _________________________________________________________________________________________________________________


// 18. Create another function that receives an array and returns a boolean value
// indicating if the array contains any even number. Then, log to the console
// the result of the following arrays:
// 18.1. [1, 2, 3, 4, 5, 6]
// 18.2. [1, 3, 5, 7, 9]

// function evenNumbers (arr) {
//     return arr.some((actualItem) => (actualItem % 2 === 0))
// }

//   console.log(evenNumbers([1, 2, 3, 4, 5, 6]))
//   console.log(evenNumbers([2, 4, 6, 8, 10]))


// const gato = ["miau"]
