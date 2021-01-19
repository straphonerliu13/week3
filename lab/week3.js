let numberOfProducts        // expects a Number 
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript:
//   Math.floor(Math.random() * x)

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  console.log(database)
  products = database.products
  numberOfProducts = database.products.length
  
  let promotion1 = database.promotions[Math.floor(Math.random()*database.promotions.length)]
  console.log(promotion1)

  let promotion2 = database.promotions[Math.floor(Math.random()*database.promotions.length)]
  console.log(promotion2)

  let promotion3 = database.promotions[Math.floor(Math.random()*database.promotions.length)]
  console.log(promotion3)

  promotion1Description = promotion1.description
  promotion2Description = promotion2.description
  promotion3Description = promotion3.description

  if (promotion1.type == 'discount') {
    promotion1Icon = '🤑'
  } else if (promotion1.type == 'shipping') {
    promotion1Icon = '🚛'
  } else {
    promotion1Icon = '🎰'  
  }

  if (promotion2.type == 'discount') {
    promotion2Icon = '🤑'
  } else if (promotion2.type == 'shipping') {
    promotion2Icon = '🚛'
  } else {
    promotion2Icon = '🎰'  
  }

  if (promotion3.type == 'discount') {
    promotion3Icon = '🤑'
  } else if (promotion3.type == 'shipping') {
    promotion3Icon = '🚛'
  } else {
    promotion3Icon = '🎰'   
  }


  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}