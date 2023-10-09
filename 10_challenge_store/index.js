// 2. Let's create a store!


// 2.1. Create an object called "store" with the following properties:
// 2.1.1. name: ""
// 2.1.2. address: ""
// 2.1.3. products: []
// 2.1.4. addProduct: function(product) { ... }
// 2.1.5. removeProduct: function(product) { ... }
// 2.1.6. listProducts: function() { ... }
// _________________________________________________________________________________________________________________

  // 2.2. Create an object called "product" with the following properties:
  // 2.2.1. name: ""
  // 2.2.2. price: 0
  // 2.2.3. description: ""
  // 2.2.4. quantity: 0
// _________________________________________________________________________________________________________________

  // 2.3. Create a function called "createProduct" that receives three parameters: "name", "price" and "description".
  // 2.3.1. The function should create a new "product" object with the parameters received.
  // 2.3.2. The function should return the new "product" object.
// _________________________________________________________________________________________________________________

  // 2.4. Create a function called "addProduct" that receives a "product" as a parameter.
  // 2.4.1. The function should add the "product" to the "products" array of the "store" object.
// _________________________________________________________________________________________________________________

  // 2.5. Create a function called "removeProduct" that receives a "product" as a parameter.
  // 2.5.1. The function should remove the "product" from the "products" array of the "store" object.
// _________________________________________________________________________________________________________________

  // 2.6. Create a function called "listProducts" that receives no parameters.
  // 2.6.1. The function should display the name and price of each product in the "products" array of the "store" object.
// _________________________________________________________________________________________________________________

  // 2.7. Create a variable called "product1" that stores the result of calling the "createProduct" function passing the following parameters:
  // 2.7.1. name: "Apple"
  // 2.7.2. price: 1.99
  // 2.7.3. description: "A red apple"
  // 2.7.4. quantity: 10


  // 2.8. Create a variable called "product2" that stores the result of calling the "createProduct" function passing the following parameters:
  // 2.8.1. name: "Banana"
  // 2.8.2. price: 2.99
  // 2.8.3. description: "A yellow banana"
  // 2.8.4. quantity: 5


  // 2.9. Create a variable called "product3" that stores the result of calling the "createProduct" function passing the following parameters:
  // 2.9.1. name: "Orange"
  // 2.9.2. price: 3.99
  // 2.9.3. description: "A juicy orange"
  // 2.9.4. quantity: 3

  // 2.10. Call the "addProduct" function passing the "product1" as a parameter.

  // 2.11. Call the "addProduct" function passing the "product2" as a parameter.

  // 2.12. Call the "addProduct" function passing the "product3" as a parameter.

  // 2.13. Call the "listProducts" function.

  // 2.14. Call the "removeProduct" function passing the "product2" as a parameter.

  // 2.15. Call the "listProducts" function.

  // 3. Now let's use the store to sell some products!
// 3.0 Create two more products using the "createProduct" and "addProduct" functions to your store.
// 3.1. Ask the user to enter the name of the product he wants to buy.
// 3.2. Ask the user to enter the quantity of the product he wants to buy.
// 3.3.1. If the product doesn't exist, display an alert saying that the product is not available in the store.
// 3.3. Check if the product is available in the store.
// 3.3.2. If the product is available, check if the quantity is available.
// 3.3.3. If the quantity is not available, display an alert saying that the quantity is not available.
// 3.4. Keep asking the user to enter the product he wants to buy until he enters "exit".
// 3.5. Display the total price of the products bought by the user.


  const store = {
    name:"",
    address:"",
    products: [],
    addProduct (product) {
        store.products.push(product)
    },
    removeProduct(product) {
        store.products.splice(store.products.indexOf(product) , 1)
    },
    listProducts() {
        return store.products.map((product) => (`\n ${product.name} $${product.price}`))
    },
  }


  const product = {
    name: "",
    price: 0,
    description: "",
    quantity: 0
  }

  let total = 0


  const createProduct = (name, price, description, quantity) => {
    const newProduct = { ...product }
    newProduct.name = name,
    newProduct.price = price
    newProduct.description = description
    newProduct.quantity = quantity

    return newProduct
}

const product1 = createProduct("Apple", 1.99, "A red apple", 10)
const product2 = createProduct("Banana", 2.99, "A yellow banana", 5)
const product3 = createProduct("Orange", 3.99, "A juicy orange", 3)
const product4 = createProduct("Water", 0.99, "Mineral water", 3)
const product5 = createProduct("Soda", 1.99, "Fanta", 7)

store.addProduct(product1)
store.addProduct(product2)
store.addProduct(product3)
store.addProduct(product4)
store.addProduct(product5)
// store.removeProduct(store.products[1])

const listProducts = store.listProducts()
//___________________________________________________________________________________


const isQuantityAvailable = (quantity, selectedProduct) => {
  const leftQuantity = selectedProduct.quantity - quantity
  const totalPricePerItem = quantity * selectedProduct.price
console.log(selectedProduct.quantity)
  if (leftQuantity >= 0) {
     selectedProduct.quantity -= quantity
     total += totalPricePerItem
     console.log(total)
  } else {
    alert("Não temos esta quantidade em stock")
  }
}

let selectedProductPrompt;


while (selectedProductPrompt !== "Exit") {
  selectedProductPrompt = prompt(`Which product would you like to buy? ${listProducts}`)
  const selectedProduct = store.products.find((actualItem) => actualItem.name === selectedProductPrompt)

  if (selectedProductPrompt === "exit") {
    alert(total)
    break
  } else if (selectedProduct) {
      const quantityChoiced = +prompt(`How many "${selectedProductPrompt}" would you like to buy?`)
      isQuantityAvailable(quantityChoiced, selectedProduct)
      total
    } else {
    alert("produto não existe")
    }
}











