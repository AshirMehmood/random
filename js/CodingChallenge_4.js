const bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips=[];
const totals=[];
const calcTip=function(billAmount){
    if(billAmount<=300 && billAmount>=50){
        (billAmount/100)*15;
    }
    else{
        (billAmount/100)*20;
    }
    return billAmount;
}
for(let i=0;i<bills.length;i++){
tips.push(calcTip(bills[i]));
totals[i]=tips[i]+bills[i];
}
console.log(tips);
console.log(totals);
const Average=function(totalAverage){
    let sum=0;
for(let i=0;i<totals.length;i++){
    sum=sum+totals[i];
}
const Avg=sum/totals.length;
return Avg;

}
console.log(Average(totals));