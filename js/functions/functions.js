function logger(){
    console.log("my name is Ash");
}

logger();
logger();

function fruitProcessor(apple,oranges){
    console.log(apple,oranges);
    const juice=`juice with ${apple} apples and ${oranges} oranges`;
    return juice
}

console.log(fruitProcessor(5,4));   
const orangeJuice=fruitProcessor(0,10);
console.log(orangeJuice);

function calcAge1(birthyear){
    return 2035-birthyear; 
    
}
const age=calcAge1(2001);
console.log(age);


const supply=function(age,amountPerDay){
const days=age*365;
const pay=amountPerDay*days;
return pay;
}
const lifeSupply=supply(60,1000);
console.log(lifeSupply);

// arrow funcion
const Age1 = birthyear => 2035-birthyear ;
const age1=Age1(2001);
console.log(age1);
const yearsUntilRetr= (birthyear,firstName)=>{
   const age= 2035-birthyear;
   const retirement=60-age;
   return  `${firstName} you will be out of service after ${retirement} years`; 
}
const retAge=yearsUntilRetr(2001,"Ash");
console.log(retAge); 

function fruitCut(fruit){
const fruitslices=fruit * 2;
return fruitslices;
}
function fruitProcessor(apple,oranges){
    const applePieces=fruitCut(apple);
    const orangePieces=fruitCut(oranges);
    console.log(apple,oranges);
    const juice=`juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
    return juice
}
const fruitJuice=fruitProcessor(5,6);
console.log(fruitJuice );
