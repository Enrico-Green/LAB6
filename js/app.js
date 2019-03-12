'use strict';

//display individual store data for Salmon Cookie Shops
//data stored in a list format on the website
//use object oriented programming 
//use object literals one for each store model; no constructors
//use template literals in your JS logic to render list on sales page



//this function generates a random number of customers
function getRandomIntCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


/* KEYS
location - loc
min cust - min
max custer -max
avg cookies per sale -avg
*/


//1st and pike location, min cust 23, max cust 65, avg cookies per sale 6.3
var pike = {
 
    min: '23',  
    max: '65',
    avg: '6.3', 
    // number of cookies per hour to make, when given the randomly select number of customers per hour
    cookiesPerHourArray:[],
};
//output number of cookies per hour to make in a list 
//get the parent and make a new element with content and append to page
pike.renderToPage = function() {
    console.log('output to page');
    
    //parent
    var pikeListul = document.getElementById('pike');
    //new element
    var cookieListli = document.createElement('li');
    //content
    cookieListli.textContent = 'cookies to make per hour';
    //append to page
    pikeListul.appendChild(cookieListli);

    
    for (var i = 0; i < this.cookiesPerHourArray.length; i++) {
      
        var newPikeListli = document.createElement('li');
      
        var custHours = this.cookiesPerHourArray[i];
      
        newPikeListli.textContent = 'If ${i + 1} , customers per Hour: ${custHours} ';
        
        pikeListul.appendChild(newPikeListli);
        console.log(pikeListui)
        console.log(newPikeli)
        }
    
    };
    
    pike.calculateCookiesPerHour = function() {
    
        for (var i = 0; i < 7; i++) {
     var randomCustomersPerHour = getRandomIntCustomers(this.min, this.max);
     var cookiesNeededForCustomer = randomCustomersPerHour * this.avg;
     this.cookiesPerHourArray.push(cookiesNeededForCustomer);
    }
    
    };
    
    pike.calculateCookiesPerHour();
    pike.renderToPage();

  /*  
//seatac airport location, min cust 3, max cust 24, avg cookies per sale 1.2 
var seatac = {
    
    min: '3',
    max: '24', 
    avg: '1.2', 
    // number of cookies per hour to make, when given the randomly select number of customers per hour
    cookiesPerHourArray:[],
};
//seattle center , min cust 11, max custer 38, avg cookies per sale 3.7
var seacen = {
    
    min: '11',
    max: '38', 
    avg: '3.7', 
    // number of cookies per hour to make, when given the randomly select number of customers per hour
    cookiesPerHourArray:[],
};
//capitol hill location, min cust 20, max custer 3, avg cookies per sale 2.3
var caphill = {
    
    min: '20', 
    max: '38', 
    avg: '2.3', 
    // number of cookies per hour to make, when given the randomly select number of customers per hour
    cookiesPerHourArray:[],
};
//Alki location, min cust 2, max custer 16, avg cookies per sale 4.6
var alki = {
     
    min: '2', 
    max: '16',
    avg: '4.6',
    // number of cookies per hour to make, when given the randomly select number of customers per hour
    cookiesPerHourArray:[],
};

*/