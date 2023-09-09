// ##### FUNCTIONS #####

// 1. Create a function that logs "Hello World" to the console. Then, print "Hello World"
// to the console 3 times using your function.

// function helloWorld(){
//     console.log("Hello World")
// }

// helloWorld()
// helloWorld()
// helloWorld()

// _________________________________________________________________________________________________________________


// 2. Create a function that receives a name and logs "Hello <name>" to the console.

// function printName(name){
//     console.log(`Hello ${name}`)
// };

// printName("Giovanna");

// _________________________________________________________________________________________________________________


// 3. Create a function that receives two numbers and returns the sum of them.

// function sum (x, y){
//     const result = x+y
//     return result
// }

// console.log(sum(2,3))

// _________________________________________________________________________________________________________________


// 4. Create a function that receives two numbers and returns the largest of them.

// function largestNumber (x, y){
//     if(x > y){
//         return x
//     }
// return y
// }

// console.log(largestNumber(4, 8))

// _________________________________________________________________________________________________________________


// 5. Create a function that receives a number and returns true if the number is even
// and false if it is odd.

// function isEven (x){
//     return x % 2 === 0
// }

// console.log(isEven(5))

// _________________________________________________________________________________________________________________


// 6. Using the functions in exercise 5 and 3, ask two numbers for the user. Then,
// log to the console if the sum of the numbers is even or odd.

// _________________________________________________________________________________________________________________


// 7. Create an arrow function that receives any type of value and returns the type
// of the value. Then, log to the console the type of the following variables:
// 7.1. 23
// 7.2. "Hello World"
// 7.3. true
// 7.4. null

// const discoverPropType = (data) => typeof(data)

// console.log(discoverPropType(23))
// console.log(discoverPropType("giovanna"))
// console.log(discoverPropType(true))
// console.log(discoverPropType(null))

// _________________________________________________________________________________________________________________


// 8. Create a function called "sumAll" that receives any length of arguments and returns the sum
// of all of them. Then, log to the console the sum of the following numbers:
// 8.1. 23, 45, 67
// 8.2. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 8.3 "Hello", "World", "!"



// function sumAll (...props){

//     let sum = 0;

//       for (let i = 0 ; i <= props.length - 1 ; i++){
//        sum += props[i]
//       }
//       return sum
//     }

//     console.log(sumAll(23, 45, 67))

// _________________________________________________________________________________________________________________


// 9. Create a function called "sumAllEven" that receives any length of arguments and returns the sum
// of all the even numbers. Then, log to the console the sum of the following numbers:
// 9.1. 23, 45, 67
// 9.2. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// function sumAllEven(...props){
//     let sum = 0;

//     for (let index = 0; index <= props.length - 1; index++){
//         if (props[index] % 2 === 0){
//             sum += props[index]
//         }
//     }
//     return sum
//   }

//   console.log(sumAllEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
//   console.log(sumAllEven(23, 45, 67))

// _________________________________________________________________________________________________________________

// 10. Create a function called "calculate" that receives three parameters: "num1", "num2" and "operator".
// 2.1. The function should return the result of the operation between "num1" and "num2" using the "operator".
// 2.2. The "operator" parameter should accept the following values: "+", "-", "*", "/" and "%".
// 2.3. If the "operator" parameter is not valid, return "Invalid operator".
// 2.4. Then, log to the console the result of the following operations:
// 2.4.1. 2 + 3
// 2.4.2. 2 - 3
// 2.4.3. 2 * 3
// 2.4.4. 2 / 3
// 2.4.5. 2 % 3

// const isOperatorValid = (operator) => {
//     console.log(operator)
//     const validOperator = ["+", "-", "*", "/", "%"]
//     if (operator.includes[validOperator])
//     return
// }

// const calculate = (num1,operator, num2) => {

//     if (operator === "+") {
//        return num1 + num2
//     } else if (operator === "-"){
//         return num1 - num2
//     } else if (operator === "*"){
//         return num1 * num2
//     } else if (operator === "/"){
//         return num1 / num2
//     } else if (operator === "%"){
//         return num1 % num2
//     } return "operador não aceito"
// }

// console.log(calculate(2,"+", 3))
// console.log(calculate(2,"-", 3))
// console.log(calculate(2,"*", 3))
// console.log(calculate(2,"/", 3))
// console.log(calculate(2,"%", 3))
// console.log(calculate(2,"&", 3))