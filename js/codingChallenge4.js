let tip15Percent;
let tip20Percent;
let billOfRestaurant=200;
tip15Percent=(15/100)*billOfRestaurant;
tip20Percent=(20/100)*billOfRestaurant;

const tip = (billOfRestaurant>=50 || billOfRestaurant<=300)? tip15Percent:tip20Percent;
console.log(`the bill was ${billOfRestaurant},the tip was ${tip},and total bill is ${tip+billOfRestaurant}`);