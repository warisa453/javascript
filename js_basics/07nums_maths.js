const score = 100;

const balance = new Number(100)
console.log(score);
console.log(balance);

console.log(balance.toString().length); // it change the number into string 
console.log(balance.toFixed(2));//it is used for decimal value 

const otherNumber = 123.8758576;
console.log(otherNumber.toPrecision(3));//it gives the round off but it is used when you have


const hundreds = 100000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));//it gives an Indian amount 

/***************************************MATHS****************************************************/

console.log("*********************************MATHS**********************************************");

console.log(Math);
console.log(Math.abs(-4));//it convert into absolute value means negative into positive value 
console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.7));
console.log(Math.max(4,5,8,4,6,3));
console.log(Math.min(4,5,8,4,6,3));



console.log(Math.random());//it gives an value between 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min );












    
