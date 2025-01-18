/* @provengo summon selenium */

/**
  The customer adds an item to the cart and proceed to the checkout page.
 */

bthread('AddProductToCartAndProceedToCheckout', function () {
  //sync({waitFor: Event("End(changeDateAvailable)")})
  interrupt(Event("End(changeDateAvailable)"),function (){
    let custSession = new SeleniumSession('customerSession').start(customerURL)
    searchItem(custSession, {text: searchTerm})
    addItemToCart(custSession)
    navToCheckout(custSession)
  })
})


/**
 * in this scenario the admin log in and change the date available of the product to a future date.
 */

bthread("AdminLogesInAndChangesAvailableDateToItem", function (){
  //sync({waitFor: Event("End(changeDateAvailable)")})
  let adminSession = new SeleniumSession('adminSession').start(adminURL)
  adminLogin(adminSession, {username: "admin", Password: "13579112"})
  navToCatalog(adminSession)
  navToProducts(adminSession)
  navToEditProduct(adminSession)
  editDateInputAndSave(adminSession,{date: futureDate})
})
