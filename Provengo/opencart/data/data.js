/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const customerURL = 'http://localhost:8888/opencart/upload/';
const adminURL = 'http://localhost:8888/opencart/upload/admin/';
const searchTerm = 'iPhone';
const username = 'admin';
const password = '13579112';
const xpaths = {
  customerSide: {
    searchInput: "//header[1]/div[1]/div[1]/div[2]/form[1]/input[1]",
    searchButton: "//div[1]/div[2]/form[1]/button[1]/i[1]",
    addToCartButton: "//div[2]/form[1]/div[1]/button[1]",
    checkoutButton: "//*[@id='top']/div[1]/div[2]/ul[1]/li[5]/a[1]/span[1]",
    addToCartPrice: "//*[@id='header-cart']/div[1]/button[1]",
    checkoutTotalPrice: "//*[@id='checkout-confirm']/div[1]/table[1]/tfoot[1]/tr[4]/td[2]",
    homePageButton: "//*[@id='logo']/a/img[1]",
    notIntCartText: "//*[@id='content']/p[1]",
    viewCartBtn: "//body/div[1]/header[1]/div[1]/div[1]/div[3]/div[1]/button[1]",
    checkoutButtonInViewCart: "//div[1]/p[1]/a[2]/strong[1]",
    notFoundMsg: "//div[1]/div[1]/p[1]",
    guestCheckout: "//*[@id='input-guest']",
    firstName : "//*[@id='input-firstname']",
    lastName : "//*[@id='input-lastname']",
    email : "//*[@id='input-email']",
    address1 : "//*[@id='input-shipping-address-1']",
    city : "//*[@id='input-shipping-city']",
    country : "//*[@id='input-shipping-country']",
    postCode : "//*[@id='input-shipping-postcode']",
    region : "//*[@id='input-shipping-zone']",
    continueBtn : "//*[@id='button-register']",
    shippingMethod : "//*[@id='button-shipping-methods']",
    shippingMethodContinue : "//*[@id='button-shipping-method']",
    paymentMethod : "//*[@id='button-payment-methods']",
    paymentMethodContinue : "//*[@id='button-payment-method']",
    confirmOrder : "//*[@id='button-confirm']"
  },


  adminSide:{
    usernameLogin: "//*[@id='form-login']/div[1]/div[1]/input[1]",
    passwordLogin: "//*[@id='form-login']/div[2]/div[1]/input[1]",
    loginButton: "//*[@id='form-login']/div/button[1]",
    catalogButton: "//*[@id='menu-catalog']/a[1]",
    productsButton: "//*[@id='collapse-1']/li[2]/a[1]",
    editProductButton: "//*[@id='form-product']/div[1]/table[1]/tbody[1]/tr[6]/td[7]/div[1]/a[1]/i[1]",
    dataButton: "//*[@id='form-product']/ul[1]/li[2]/a[1]",
    dateAvailableButton: "//*[@id='input-date-available']",
    saveButton: "//*[@id='content']/div/div/div/button/i[1]",
    extNotification : "//*[@id='modal-security']/div/div/div[1]/button"

  }

};



