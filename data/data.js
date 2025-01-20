/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const customerURL = 'http://localhost:8888/opencart/upload/';
const adminURL = 'http://localhost:8888/opencart/upload/admin/';
const searchTerm = 'iPhone';
const customerSearchIphoneURL = 'http://localhost/opencart/upload/index.php?route=product/search&search=iphone';
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
    checkoutButtonInViewCart: "//div[1]/p[1]/a[2]/strong[1]"
  },


  adminSide:{
    usernameLogin: "//*[@id='form-login']/div[1]/div[1]/input[1]",
    passwordLogin: "//*[@id='form-login']/div[2]/div[1]/input[1]",
    loginButton: "//*[@id='form-login']/div/button[1]",
    catalogButton: "//*[@id='menu-catalog']/a[1]",
    productsButton: "//*[@id='collapse-1']/li[2]/a[1]",
    editProductButton: "//*[@id='form-product']/div[1]/table[1]/tbody[1]/tr[6]/td[7]/div[1]/a[1]/i[1]",
    dataButton: "//*[@id='form-product']/ul[1]/li[2]/a[1]",
    dateAvailableButton: "//*[@id='tab-data']/fieldset[3]/div[5]/div[1]/div[1]/input[1]",
    saveButton: "//*[@id='content']/div/div/div/button/i[1]"
  }

}


const scrolling={
  down: function() {window.scrollTo(0, document.body.scrollHeight); pvg.success('yes');},
  up: function() {window.scrollTo(0,(0,0));pvg.success('yes');}
}
// const scrolling = {
//   down: function() {
//     window.scrollTo({
//       top: document.body.scrollHeight,
//       behavior: 'smooth'
//     });
//     pvg.success('yes');
//   },
//   up: function() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//     pvg.success('yes');
//   }
// };
