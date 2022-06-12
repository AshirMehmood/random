
const AvgScore=(a,b,c)=>(a+b+c)/3;
const checkWinner=function(AvgDolphins,AvgKoalas){
 
    if(AvgDolphins>=(AvgKoalas*2)){
        console.log("Dolphins win");
    }
    else if(AvgKoalas>=(AvgDolphins*2)){
        console.log("koalas win");
    }
}
const DolphinScore=AvgScore(85,54,41);
const koalascore=AvgScore(23,34,71);
checkWinner(DolphinScore,koalascore);

const num=5;
// simple function

function square(squareNum){
    const squareOfNum=squareNum*squareNum;
    return squareOfNum;
}
const squareOfNum=square(5);
console.log(squareOfNum);
// function expression

const sqaure=function(squareNum){
    const squareOfNum=squareNum*squareNum;
    return squareOfNum;
}

