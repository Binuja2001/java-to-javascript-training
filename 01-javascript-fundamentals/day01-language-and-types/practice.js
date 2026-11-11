//var ,let ,const

//reassign and redeclare

var a = 1;
var a = 2;      // redeclare var
let b = 1;
b = 2;          // reassign let
const c = 1;
// c = 2;          // reassign const
// var and let can be reassigned ,but const cannot be reassigned.var can be redeclared but let and const cannot redeclared


//Hoisting---accessing variables before intializing them

console.log(x);
var x = 10;
// console.log(y);
// let y = 20;
// answer: x prints undefined because var is hoisted and initialised with undefined.
// y gives ReferenceError because let/const are hoisted but stay in the
// Temporal Dead Zone (TDZ) until their declaration line runs.


//  Block scope

if (true) {
  var p = "var";
  let q = "let";
}
console.log(p);
// console.log(q);
// p prints "var" because var is function scoped (not block scoped),
// so it is accessible outside the if block.
// q gives ReferenceError because let is block scoped and
// cannot be accessed outside the { } where it was declared.


//primitive and reference


// Q1
let s1 = "hello";
let s2 = s1;
s2 = "bye";
console.log(s1);
// answer:hello

// Q2
let list1 = ["a", "b"];
let list2 = list1;
list2.push("c");
console.log(list1);
//answer:["a","b","c"]

// Q3
// console.log([1] === [1]);
// false

// Q4
let n1 = [5];
let n2 = n1;
console.log(n1 === n2);
// answer: true


//dynamic typing
let data = 10;
console.log(typeof data);//number

data = "ten";
console.log(typeof data);//string

data = null;
console.log(typeof data);//object

data = [1, 2];
console.log(typeof data);//object


//coercion

console.log("10" + 5);
// My answer:105

// Q3: - with a string
console.log("10" - 5);
// My answer:5

// Q4: boolean in maths
console.log(true + 5);
// My answer:6

// Q5: loose equality
console.log(5 == "5");
// My answer: true

// Q6: strict equality
console.log(5 === "5");

// My answer: false


let price = "100";
let tax = 18;
// console.log(price + tax);
// My answer:10018

//explicit coercion
console.log(Number("25"));//  answer:25
console.log(Number("25abc")); //answer:NaN
console.log(parseInt("25abc")); //answer:25
console.log(String(10) + 5)// answer:105
console.log(Number(true) + 1); // answer :2



//truthy and falsy values
console.log(Boolean(0));//false
console.log(Boolean("0"));//true
console.log(Boolean(""));//false
console.log(Boolean("hello"));//true
console.log(Boolean(null));//false
console.log(Boolean([]));//true

// //null and undefined
// // let x;
// let y = null;
// console.log(x); //undefined
// console.log(y); //null
// console.log(typeof x); //undefined
// console.log(typeof y); //object
// console.log(x == y); //true
// console.log(x === y); //false


//template literals
let name ="Binuja";
let age =25;
console.log(`My name is ${name} and I am ${age}years old.`);




