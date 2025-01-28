//Array
const myArr = [1,2,3,4,5,6,7,8,9];
// console.log(myArr);


//Array Methods

myArr.push(10);//for add a element in array but element add in last position 

myArr.pop();// remove last value from an array 

myArr.unshift(10) // it add element in first position 

myArr.shift() // remove first element from an array 

console.log(myArr.includes(12));//it check the element is present in the array or not
console.log(myArr.indexOf(9));

const newarr = myArr.join();
console.log(newarr);



//  Slice and Splice 

console.log("A  " , myArr);

const newarr1 = myArr.slice(1,3);  //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
console.log(newarr1);
console.log("B  " , myArr);

const newarr2 = myArr.splice(1,3); //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(newarr2);
console.log("C  " ,myArr );

