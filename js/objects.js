
// key-value pairs

const ash={
firstName:"Ashir",
lastName:"m",
age:2022-2001,
friends:["michael","ash","friend"]
}; 
console.log(ash.age);
console.log(ash["first"+"Name"]);
// const interestedIn=prompt("what are you interested in?");
// console.log(ash[interestedIn]);
console.log(`${ash.firstName}, have ${ash.friends.length} and his best friend is called ${ash.friends[0]}`);


// object methods

const Ash={
    firstName:"Ashir",
    lastName:"m",
    birhtYear:2001,
    friends:["michael","ash","friend"],
    hasDriverLiscense:true,
    calcAge:function(){
    this.age= 2035-this.birhtYear;
    },
    summary:function(){
     let summaryOfAsh=`${this.firstName} is a ${this.age} years old student and he has ${this.hasDriverLiscense ? "a":"no"} drivers liscense`;
     return summaryOfAsh;
    }
}
console.log(Ash.calcAge());
console.log(Ash.age);
console.log(Ash.summary());





 

