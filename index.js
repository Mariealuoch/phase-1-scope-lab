// Write your solution in this file!
var customerName ='bob'
function upperCaseCustomerName() {
    if (typeof window !== 'undefined' && customerName) {
      customerName = customerName.toUpperCase();
    }
  }
function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
  }
  const leastFavoriteCustomer = 'hated';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'loved'}
