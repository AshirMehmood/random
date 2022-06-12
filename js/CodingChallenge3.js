const markMiller={
    firstName:"Mark",
    lastName:"Miller",
    weight:78,
    height:1.69,
    calcBMI:function(){
        return (this.weight/this.height*this.height);
    }
}
const johnSmith={
    firstName:"John",
    lastName:"Smith",
    weight:92,
    height:1.95,
    calcBMI:function(){
        return (this.weight/this.height*this.height);
    }
}
if(markMiller.calcBMI()>johnSmith.calcBMI()){
    console.log(`${markMiller.firstName}'s Bmi ${markMiller.calcBMI()} is greater than ${johnSmith.firstName}'s Bmi ${johnSmith.calcBMI()} `);
}
else{
    console.log(`${johnSmith.firstName}'s Bmi ${johnSmith.calcBMI()} is greater than ${markMiller.firstName}'s Bmi ${markMiller.calcBMI()} `);

}