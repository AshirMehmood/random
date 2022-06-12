const now =2022;
const Age1=now-2001;
const Age2=now-1990;
console.log(Age1*2,Age1/10,3**2);
console.log(Age1<Age2);
const isBoolen = Age1 < Age2;

// coding challenge

let markWeight=78;
let markHeight=1.69;
let johnWeight=100;
let johnHeight=1.76;
const markBmi=markWeight/(markHeight*markHeight);
const johnBmi=johnWeight/(johnHeight*johnHeight);
console.log(markBmi," ",johnBmi);

// challenge 3

console.log("Data 1,data 2")
let dolphinScore1=97;
let dolphinScore2=112;
let dolphinScore3=101;
let koalaScore1=109;
let koalaScore2=95;
let koalaScore3=106;
const dolphinAvg=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
console.log(dolphinAvg);
const koalasAvg=(koalaScore1+koalaScore2+koalaScore3)/3;
console.log(koalasAvg);
if(dolphinAvg>=100 && koalasAvg>=100){
    if(dolphinAvg==koalasAvg){
        console.log("draw");
    }
    else if(dolphinAvg>koalasAvg){
        console.log("dolphins win");
    }
    else if(dolphinAvg<koalasAvg){
        console.log("koalas win");
    }
}
else{
    console.log("no wins")
}



