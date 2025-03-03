//scope and chain
/*'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        let output = `${firstName} You  are ${age}, born in ${birthYear}`
    console.log(output);
    

if(birthYear >= 1981 && birthYear <= 1996){
    var millenial = true;

    //creating new variable with same name as outer scope variable;
    const firstName = 'Steven';
   
    //reassigning outer scope variable
    output = 'NEW OUTPUT!';


    const str = `oh and you are a millenial, ${firstName}`;
    console.log(str);

    function add(a,b){
        return a+b;
    }
  
}
    
console.log(millenial);
 
console.log(output);
    }
printAge();
return age;

}

const firstName = 'Jonas';
calcAge(1991);
*/


//function scope
/*function calcAge(birthYear){
    const now = 2037 - birthYear;
    const age = now - birthYear;
    return age;
}

console.log(now);
*/


//Block scope (ES6)

/*if(year >= 1981 && year <= 1996){
    const  millenial = true;
    const  food = 'Avocado toast';
    const year = 1991;
}

console.log(millenial);
*/


//scope chain

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     return age;
// }

// const firstName = ' jonas';
// calcAge(1991);



//Hoisting and TDZ in practice
console.log(me);
// console.log(job);
// console.log(year);


var me  = 'JOnas';
let job = 'teacher';
const year = 1991;
// function
console.log(addDecl(2,3));
console.log(addArrow(2,3));

 function addDecl(a,b){
    return a+b;

 }

 var addExpr = function(a,b){
    return a+b;
 };

 const addArrow = (a,b) => a+b;
 // example 
console.log(undefined);
if(!numProducts) deleteShoppingCart();
 var numProducts = 10;

 function deleteShoppingCart(){
    console.log('All products deleted!');
 }