// console.log("9"-"5");
// console.log("19"-"13"+ 17);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

const country="pakistan";
const lang1=false;
const populationPak=220;
const country2="Uk";
const lang2=true
const populationUk=100;
const country3="Canada";
const lang3=true;
const populationCanada=25;
const isIsland1=false;
const isIsland2=false;
const isIsland3=false;
if(populationCanada<50 && lang3===true &&isIsland3==false){
    console.log(`Sara,you should live in ${country3} `);
}
else if(populationPak<50 && lang1===true &&isIsland1==false){
    console.log(`Sara,you should live in ${country} `);

}
if(populationPak>33){
    console.log(`your country's ${country} population is above average`);
}
else if(populationPak<=33){
    console.log(`your country's ${country} population is below average`);

}
