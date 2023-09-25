// ##### OBJECTS #####

// 1. Create an object called "car" with the following properties:
// 1.1. brand: "Ford"
// 1.2. model: "Mustang"
// 1.3. year: 1964
// 1.4. color: "red"
// 1.5. passengers: 4
// 1.6. convertible: false
// 1.7. mileage: 281341

const car = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red",
    passengers: 4,
    convertible: false,
    mileage: 281341,
}

// _________________________________________________________________________________________________________________

// 2. Change the color of the car to "blue" and log it to the console.

car.color = "blue"

console.log(car)

// _________________________________________________________________________________________________________________

// 3. Log to the console the year of the car and the number of passengers.

console.log(car.year)
console.log(car.passengers)

// _________________________________________________________________________________________________________________

// 4. Ask the user for the color of the car and change it. Then, log the car with an alert.

// const newColor = prompt("insira uma cor para o carro")

// car.color = newColor

// alert(car.color)

// _________________________________________________________________________________________________________________

// 5. Display the car's properties in a single alert.
// Then, ask the user for the property he wants to see and display it in an alert.

// const showProperty = prompt(`Qual propriedade você quer saber mais? ${Object.keys(car)}`)

// alert(car[showProperty])

// _________________________________________________________________________________________________________________

// 6. Create a new property called "engine" with the value "V8" and log the car to the console.

car.engine = "V8"

console.log(car)

// _________________________________________________________________________________________________________________

// 7. Display the car's properties in a single alert.
// Then, ask the user for the property he wants to change, if it doesn't exist, add that property.
// Then, ask the user for the new value of the property and change it.
// Finally, display the car's properties in a single alert.

// alert(Object.keys(car))
// const propertyPrompt = prompt("Qual propriedade você quer modificar?")
// const valuePrompt = prompt("Atribua um valor")

// car[propertyPrompt] = valuePrompt

// console.log(car)


// _________________________________________________________________________________________________________________
// 8. Delete the mileage property from the car and log the car to the console.

// delete car.mileage

// console.log(car)
// _________________________________________________________________________________________________________________

// 9. Display the car's properties in a single alert.
// Then, ask the user for the property he wants to delete and delete it. If the property doesn't exist, display an alert.
// Finally, display the car's properties in a single alert.

// const deleteProperty = prompt(`Qual propriedade você quer excluir? ${Object.keys(car)}`)

// car[deleteProperty] ? delete car[deleteProperty] : alert("nonexiste")

// console.log(Object.keys(car))

// _________________________________________________________________________________________________________________

// 10. Display the car's properties in a single alert.
// Then, ask the user for the property he wants to change, if it doesn't exist, ask again.
// Then, ask the user for the new value of the property and change it.
// Finally, display the car's properties in a single alert.
// Keep asking the user until he enters "stop".
// _________________________________________________________________________________________________________________

// 11. Create an object called "animal" with the following properties:
// 11.1. name: ""
// 11.2. species: ""
// 11.3. age: 0
// 11.4 diet: ""
// 11.5. makeSound: function() { console.log("...") }

const animal = {
    name: "",
    species: "",
    age: 0,
    diet: "",
    makesound: function(){
      console.log("...")
    }
  }

// _________________________________________________________________________________________________________________

// 12. Create an object called "cat" based on the "animal" object with the following properties:
// 12.1. name: "Garfield"
// 12.2. species: "cat"
// 12.3. age: 3
// 12.4. diet: "lasagna"
// 12.5. makeSound: function() { console.log("meow") }


const cat = {
    name: "Garfield",
    species: "feline",
    age: 0,
    diet: "lasagna",
    makesound: function(){
      console.log("meow")
    }
  }
// _________________________________________________________________________________________________________________

// 13. Create an object called "dog" based on the "animal" object with the following properties:
// 13.1. name: "Snoopy"
// 13.2. species: "dog"
// 13.3. age: 5
// 13.4. diet: "bones"
// 13.5. makeSound: function() { console.log("woof") }

const dog = {
    name: "Snoopy",
    species: "dog",
    age: 5,
    diet: "bones",
    makesound: function(){
      console.log("woof")
    }
  }

// _________________________________________________________________________________________________________________

// 14. Change the "cat" age to 4. The "animal" age should remain the same.
cat.age = 4
// _________________________________________________________________________________________________________________

// 15. Create an array called "animals" containing the "cat" and "dog" objects.
// Then, log the array to the console.

const animals = [cat, dog]

console.log(animals)
// _________________________________________________________________________________________________________________

// 16. Log to the console the name of the second animal of the array.

console.log(animals[1].name)

// _________________________________________________________________________________________________________________

// 17. Log to the console the animal name that has the age above 4.

console.log(animals[0].age > 4 ? animal[0].name : animals[1].name)
