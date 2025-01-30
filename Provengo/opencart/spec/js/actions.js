// @provengo summon selenium 



function searchItem(session, data) {
  sync({request: Event("Start(searchProduct)")});
  session.writeText(xpaths.customerSide.searchInput, data.text,true);
  session.click(xpaths.customerSide.searchButton);
  sync({request: Event("End(searchProduct)")});
}



function addItemToCart(session) {
  sync( {request: Event("Start(addItemToCart)")})
  session.scrollToElement(xpaths.customerSide.addToCartButton);
  session.click(xpaths.customerSide.addToCartButton);
  sync({ request: Event("End(addItemToCart)") });
}

function navToCheckout(session) {
  sync( {request: Event("Start(navToCheckout)")})
  session.scrollToElement(xpaths.customerSide.viewCartBtn);
  session.click(xpaths.customerSide.viewCartBtn)
  session.click(xpaths.customerSide.checkoutButtonInViewCart);
  sync({ request: Event("End(navToCheckout)") });
}



function adminLogin(session,data) {
  sync( {request: Event("Start(adminLogin)")})
  session.writeText(xpaths.adminSide.usernameLogin,data.username,true)
  session.writeText(xpaths.adminSide.passwordLogin, data.Password,true)
  session.click(xpaths.adminSide.loginButton)
  session.click(xpaths.adminSide.extNotification)
  sync({ request: Event("End(adminLogin)") });
} 
function navToCatalog(session){
  sync( {request: Event("Start(navToCatalog)")})
  session.click(xpaths.adminSide.catalogButton)
  sync( {request: Event("End(navToCatalog)")})
}
function navToProducts(session){
  sync( {request: Event("Start(navToProducts)")})
  session.click(xpaths.adminSide.productsButton)
  sync( {request: Event("End(navToProducts)")})
}
function navToEditProduct(session){
  sync( {request: Event("Start(navToEditProduct)")})
  session.click(xpaths.adminSide.editProductButton)
  sync( {request: Event("End(navToEditProduct)")})
}
function editDateInputAndSave(session,data){
  sync( {request: Event("Start(EditDateInput)")})
  session.click(xpaths.adminSide.dataButton)
  session.scrollToElement(xpaths.adminSide.dateAvailableButton)
  session.waitForVisibility(xpaths.adminSide.dateAvailableButton, 5000);
  session.writeText(xpaths.adminSide.dateAvailableButton,data.date,true)
  session.scrollToElement(xpaths.adminSide.saveButton)
  session.click(xpaths.adminSide.saveButton)
  sync( {request: Event("End(EditDateInput)")})
}


function checkoutItem(session) {
  sync({request: Event("Start(checkoutItem)")})
  session.click(xpaths.customerSide.guestCheckout)
  session.writeText(xpaths.customerSide.firstName, "josh", true)
  session.writeText(xpaths.customerSide.lastName, "harush", true)
  session.writeText(xpaths.customerSide.email, "josh@gmail.com", true)
  session.writeText(xpaths.customerSide.address1, "1234", true)
  session.writeText(xpaths.customerSide.city, "paris", true)
  session.writeText(xpaths.customerSide.country, "france", true)
  session.selectByVisibleText(xpaths.customerSide.country, "France, Metropolitan")
  session.writeText(xpaths.customerSide.postCode, "12345", true)
  session.selectByVisibleText(xpaths.customerSide.region, "Alpes de Haute Provence")
  session.click(xpaths.customerSide.continueBtn)
  session.scrollToElement(xpaths.customerSide.shippingMethod)
  session.click(xpaths.customerSide.shippingMethod)
  session.click(xpaths.customerSide.shippingMethodContinue)
  session.click(xpaths.customerSide.paymentMethod)
  session.click(xpaths.customerSide.paymentMethodContinue)
  session.scrollToElement(xpaths.customerSide.confirmOrder)
  session.click(xpaths.customerSide.confirmOrder)
  sync({request: Event("End(checkoutItem)")})
}

// session.scrollToElement = function (xpath) {
//   const element = this.findElement(xpath);
//   this.runScript("arguments[0].scrollIntoView(true);", element);
// }
