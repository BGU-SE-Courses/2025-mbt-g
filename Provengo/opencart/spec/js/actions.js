// @provengo summon selenium 



function searchItem(session, data) {
  sync({request: Event("Start(searchProduct)")});
  session.writeText(xpaths.customerSide.searchInput, data.text,true);
  session.click(xpaths.customerSide.searchButton);
  sync({request: Event("End(searchProduct)")});
}
//   ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", button);
// }


function addItemToCart(session) {
  sync( {request: Event("Start(addItemToCart)")})
  // session.scrollToElement(xpaths.customerSide.addToCartButton);
  session.runCode(scrolling.down)
  session.waitForClickability(xpaths.customerSide.addToCartButton,10000)
  session.click(xpaths.customerSide.addToCartButton);
  sync({ request: Event("End(addItemToCart)") });
}

function navToCheckout(session) {
  sync( {request: Event("Start(navToCheckout)")})
  // session.scrollToElement(xpaths.customerSide.viewCartBtn);
  session.runCode(scrolling.up)
  session.click(xpaths.customerSide.viewCartBtn)
  session.click(xpaths.customerSide.checkoutButtonInViewCart);
  sync({ request: Event("End(navToCheckout)") });
}



function adminLogin(session,data) {
  sync( {request: Event("Start(adminLogin)")})
  session.writeText(xpaths.adminSide.usernameLogin,data.username,true)
  session.writeText(xpaths.adminSide.passwordLogin, data.Password,true)
  session.click(xpaths.adminSide.loginButton)
  sync({ request: Event("End(adminLogin)") });
} 
function navToCatalog(session){
  sync( {request: Event("Start(navToCatalog)")})
  session.click(xpaths.adminSide.catalogButton)
  sync( {request: Event("End(navToCatalog)")})
}
function navToProducts(session){
  sync( {request: Event("Start(navToProducts)")})
  session.click(xpaths.adminSide.catalogButton)
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
  // session.scrollToElement(xpaths.adminSide.dateAvailableButton)
  session.runCode(scrolling.down)
  session.writeText(xpaths.adminSide.dataButton,data.date,true)
  // session.scrollToElement(xpaths.adminSide.saveButton)
  session.runCode(scrolling.up)
  session.click(xpaths.adminSide.saveButton)
  sync( {request: Event("End(EditDateInput)")})
}




// function feelLucky(session) {
//   with(session) {
//     click(xpaths.searchWindow.feelingLuckyButton)
//   }
// }

// session.scrollToElement = function (xpath) {
//   const element = this.findElement(xpath);
//   this.runScript("arguments[0].scrollIntoView(true);", element);
// }