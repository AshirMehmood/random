const person={
    Name:"john",
    Age:29,
    rollno:12345
};
console.log(person);
delete person.rollno;
console.log(person);
// number of keys in object
Object.objsize=function(myobject){
 let n=0;
 let key;
 for(key in myobject){
     if(myobject.hasOwnProperty(key)){
         n++;
     }
     return n;
 }
}
console.log(` the object person has ${Object.objsize(person)+1} values`);