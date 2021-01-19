function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
    
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

  let x
  x = 5

  let y = 14
  console.log(y)
  y = y + 1
  console.log(y)

  let z = x + y
  
  let output = z

  let quantity = 5 // Number
  let food = 'tacos' // String
  let withSalsa = true / Boolean

  // output = 'i love' + food
  output = 'i would like ' ${quantity} ${food}

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}