'use strict'

//display individual store data for Salmon Cookie Shops
//data stored in a list format on the website
//use object oriented programming 
//use object literals one for each store model; no constructors
//use template literals in your JS logic to render list on sales page




function getRandomIntCustomers (min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return getRandomIntCustomers(Math.random() * (max - min +1)) +min; 
}


/* KEYS
location - loc
min cust - min
max custer -max
avg cookies per sale -avg
*/


//1st and pike location, min cust 23, max custer 65, avg cookikes per sale 6.3
var pike = {
    loc: 'pike', 
    min: '23',  
    max: '65',
    avg: '6.3', 

};
//seatac airport location, min cust 3, max cust 24, avg cookikes per sale 1.2 
var pike = {
    loc: 'seatac',
    min: '3',
    max: '24', 
    avg: '1.2', 
};
//seattle center , min cust 11, max custer 38, avg cookikes per sale 3.7
var pike = {
    loc:  'seacent',
    min: '11',
    max: '38', 
    avg: '3.7', 
};
//capitol hill location, min cust 20, max custer 3, avg cookikes per sale 2.3
var pike = {
    loc: 'caphill', 
    min: '20', 
    max: '38', 
    avg: '2.3', 
};
//Alki location, min cust 2, max custer 16, avg cookikes per sale 4.6
var pike = {
    loc: 'alki', 
    min: '2', 
    max: '16',
    avg: '4.6',
};


//output number of cookies per hour to make