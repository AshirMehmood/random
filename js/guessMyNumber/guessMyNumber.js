"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent="correct number";
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=10;
// document.querySelector(".guess").value=20;
let Secretnumber=Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=Secretnumber;
let highscore;
let HighestScore;
document.querySelector(".check").addEventListener('click',function(){
 const guess=Number( document.querySelector(".guess").value);
 highscore=Number( document.querySelector('.score').textContent);
 HighestScore=Number(document.querySelector('.highscore').textContent);
 if(!guess){
     document.querySelector('.message').textContent="not a number!"
 }
 else if(guess===Secretnumber){
     document.querySelector(".message").textContent="Correct number!";
     document.querySelector("body").style.backgroundColor="green";
     document.querySelector('.highscore').textContent=highscore;
    if(highscore>=HighestScore){
        document.querySelector('.highscore').textContent=highscore;
    }
    else{
        document.querySelector('.highscore').textContent=HighestScore;

    }
 }
 else if(guess>Secretnumber){
    document.querySelector(".message").textContent="higher than original number!";
    highscore--;
    if(highscore<1){
        highscore=0;
        document.querySelector('.message').textContent="Play Again!"
        document.querySelector('body').style.backgroundColor="red";

    }
    document.querySelector('.score').textContent=highscore;

 }
 else if(guess<Secretnumber){
    document.querySelector(".message").textContent="lower than original number!";
    highscore--;
     if(highscore<1){
        highscore=0;
        document.querySelector('.message').textContent="Play Again!"
        document.querySelector('body').style.backgroundColor="red";
    }
    document.querySelector('.score').textContent=highscore;
 }
})
document.querySelector('.again').addEventListener('click',function(){
    Secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=20;
    document.querySelector('.message').textContent="start guessing..."
    document.querySelector('body').style.backgroundColor="#222222";
})

