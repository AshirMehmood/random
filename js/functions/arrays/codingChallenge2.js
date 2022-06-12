const calcTip=function(billAmount){
    if(billAmount<=300 && billAmount>=50){
        (billAmount/100)*15;
    }
    else{
        (billAmount/100)*20;
    }
    return billAmount;
}
const bills=[125,555,44];
const total=[calcTip(bills[0])+bills[0],calcTip(bills[1])+bills[2],calcTip(bills[2])+bills[2]];
console.log(total);