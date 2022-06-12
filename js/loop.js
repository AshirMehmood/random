for(let rep=0;rep<=10;rep++){
    console.log(`reps ${rep}`);
}
const personArray=[4,"michael","engineer",26,["Ash","john","Ali"]];
console.log(personArray);
const types=[];
const years=[2001,1990,2005,2008];
const ages=[];
for(let i=0;i<years.length;i++){
    console.log(personArray[i],typeof personArray[i]);
    types[i]=typeof personArray[i];
    console.log(types);
    ages.push(2035-years[i]);
}
console.log(ages);
// continue and break
for(let i=0;i<personArray.length;i++){
    if(typeof personArray[i] === "number") break;
    console.log(personArray[i],typeof personArray[i]);
    
}
// for(let exercise=0;exercise<=4;exercise++){
//     console.log(`starting exercise-----${exercise}`);
//     for(let rep=1;rep<6;rep++){
//         console.log(`lifing weight repitetion ${rep}`);
//     }
// }

// while loop
// let rep=1;
// while(rep<=10){
//     console.log(`lifing weight repetition ${rep}`);
//     rep++;
// }
let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
while(dice!==6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice===6){
        console.log("loop is about to end");
    }
} 