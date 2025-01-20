// @provengo summon selenium

/**
  The customer adds an item to the cart and proceed to the checkout page.
 */

// bthread('AddProductToCartAndProceedToCheckout', function () {
//   //sync({waitFor: Event("End(changeDateAvailable)")})
//   interrupt(Event("End(changeDateAvailable)"),function (){
//     let custSession = new SeleniumSession('customerSession')
//     custSession.start(customerURL)
//     searchItem(custSession, {text: "iphone"})
//     addItemToCart(custSession)
//     navToCheckout(custSession)
//   })
// })



/**
 * in this scenario the admin log in and change the date available of the product to a future date.
 */

bthread("AdminLogesInAndChangesAvailableDateToItem", function (){
  //sync({waitFor: Event("End(changeDateAvailable)")})
  let adminSession = new SeleniumSession('adminSession')
  adminSession.start(adminURL)
  adminLogin(adminSession, {username: "admin", Password: "13579112"})
  navToCatalog(adminSession)
  navToProducts(adminSession)
  navToEditProduct(adminSession)
  editDateInputAndSave(adminSession,{date: "2025-07-04"})
})
