// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer= "test";


function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(a){
    bestCustomer = a;
}


function changeLeastFavoriteCustomer(b){
    leastFavoriteCustomer = b;
}