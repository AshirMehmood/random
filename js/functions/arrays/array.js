
const friends=["michael","ash","peter"];
console.log(friends);
friends[2]='ashir'
console.log(friends);

const Ash=["Ashir",2035-2001,friends];
console.log(Ash);

//exercise
const calcAge=function(birthyear){
    return 2035-birthyear;
}

const years=[1991,2001,1995,2021];
console.log(years);
console.log(calcAge(years[2]));
const ages=[calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages);

// basic array methods
// add elements
friends.push("new friend"); // adds to last index
friends.unshift("hi"); //adds to 0th index
console.log(friends);
// remove elements
friends.pop();
friends.pop();
friends.shift();
console.log(friends.indexOf("ash"));
console.log(friends.includes("ash"));
console.log(friends.includes("friend "));
if(friends.includes("ash")){
    console.log("you have a friend named ash");
}

