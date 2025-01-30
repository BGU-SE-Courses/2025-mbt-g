// @provengo summon selenium

/**
  The customer adds an item to the cart and proceed to the checkout page.
 */

bthread('AddProductToCartAndProceedToCheckout', function () {

  interrupt(Event("End(EditDateInput)"),function (){
    let custSession = new SeleniumSession('customerSession')
    custSession.start(customerURL)
    searchItem(custSession, {text: "iphone"})
    addItemToCart(custSession)
    navToCheckout(custSession)
    checkoutItem(custSession)
  })
})

// bthread("adminChangesAvailableDateAndCustomerSearchesItem", function () {
//   sync({waitFor: Event("End(EditDateInput)")})
//   let sessionError= new SeleniumSession('customerSessionError1')
//   sessionError.start(customerURL)
//   searchItem(sessionError, {text: "iphone"})
//   assertUnfoundItem(sessionError)
// })

bthread("zeroizeDate", function (){
  sync({waitFor: Event("End(EditDateInput)")})
  let zeroizeSession = new SeleniumSession('zeroizeSession')
  zeroizeSession.start(adminURL)
  adminLogin(zeroizeSession, {username: "admin", Password: "13579112"})
  navToCatalog(zeroizeSession)
  navToProducts(zeroizeSession)
  navToEditProduct(zeroizeSession)
  editDateInputAndSave(zeroizeSession,{date: "01/01/2025"})
})
/**
 * in this scenario the admin log in and change the date available of the product to a future date.
 */
//
bthread("AdminLogesInAndChangesAvailableDateToItem", function (){
  let adminSession = new SeleniumSession('adminSession')
  adminSession.start(adminURL)
  adminLogin(adminSession, {username: "admin", Password: "13579112"})
  navToCatalog(adminSession)
  navToProducts(adminSession)
  navToEditProduct(adminSession)
  editDateInputAndSave(adminSession,{date: "07/07/2025"})
})
