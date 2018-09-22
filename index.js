

var cart = [];

function addToCart(item) {
 // write your code here
var price = Math.ceil(Math.random()*100)
cart.push({[item] : price})
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  {
    console.log('Your shopping cart is empty.')
  }
var newArray = []
  for(var i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i][0])
    newArray.push(keys + " at $" + cart[i][keys])
  }
  var myString = "In your cart, you have"
  if (newArray.length === 1) {
    myString += newArray + "."
  } else if(newArray.length === 2) {
    myString += (newArray[0] + " and " + newArray[1] + ".")
  } else if (newArray.length > 2) {
    var lastElement = newArray.pop()
    var other_item = newArray.join(", ")
    myString += (other_item + ", and " + lastElement + ".")
  }
  console.log(myString)
}


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function total() {
  // write your code here
  var z = 0
  for (var i = 0; i < cart.length; i++) {
    z += cart[i] [Object.keys(cart[i])]
  }
  return z
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
