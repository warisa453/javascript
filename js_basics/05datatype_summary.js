
/*primitive data type ( it copy the value)
7 datatype
string
Number
boolean
Null
Undefined
Bigint
Symbol
*/


/*
Reference ( Non Primitive (it gives the reference of the value))
Array
Objects
Funstion
*/


///////////////////////////////////////////////////////////////////////////////

//Stack Memory (Primitive) and Heap Memory (Non Primitive)

let useroneemail = "waris647@gmail.com";
let usertwoemail = useroneemail;
usertwoemail = "waris786@gmail.com";

console.log(useroneemail);
console.log((usertwoemail));
//ye primitive dataype ka example hai jishme 

let userone = {
    name:"ali",
    email:"waris9485@gmail.com"
}

let usertwo = userone;

usertwo.email = "waris786@gmail.com";

console.log(userone);

