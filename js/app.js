
'use strict';

var newStore = document.getElementById('newStore');

var cookieStores = [];
var cookieStoreTable = document.getElementById('cookieStores');

//this is the function to add a new store and stops the page from refreshing when form is submitted


function inputNewStore (event) {
event.preventDefault(); 
console.log('information for a new store');

var name = event.target.storeLocation.value;
var min = event.target.minCustomers.value;
var max = event.target.maxCustomers.value;
var avg = event.target.avgCookies.value;

var newStore = new cookieStore(name,min,max,avg);

console.log(loc,min,max,avg);
console.log(newStore);
newStore.render();

cookieStores.push(newStore);
renderTable();

}

cookieStoreTable.addEventListener('submit', makeNewStore);
 
//creates random number 
//taken from MDN http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min,max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(mAth.random() * (max - min +1)) + min;

}

var HoursOpen =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm',];
var cookieStoresArray = [];

//this is the constructor function
function SalmonCookies (location, min, max, avgCookies, hours, numCustomers, avgSales) {
    this.location = location;
    this.minCustomers = min;
    this.maxCustomers = max;
    this.avgCookiesPerCustomer = avgCookies;
    this.HoursOpen = hours;
    this.numCustomersArray = numCustomers;
    this.avgSalesPerHour = avgSales; 

} ;

//this generates a random number 
SalmonCookies.prototype.numCustomers = function () {
 var randomCustomers = getRandomIntInclusive(this.minCustomers, this.maxCustomers);
 console.log('random number is: ' + randomCustomers);
 
 retrun randomCustomers;

};

//calculate avg sales per hour
SalmonCookies.prototype.avgSales = function (index) {
    var avgSalesPerHour = Math.floor(this.avgSalesPerHour *   )):  
    console.log('random number is: ' + randomCustomers);
    
    retrun randomCustomers;
};

