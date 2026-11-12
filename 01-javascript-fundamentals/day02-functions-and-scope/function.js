//Function 
//1)square(n): returns n × n. For example, square(4) gives 16.

function square(n){
    return n*n;
}
result =console.log(square(4));

//2)greet(name): returns "Welcome, Binuja!". Use backticks and ${name}.

function greet(name){
    return `welcome , ${name}!`;
}
let message = greet("Binuja");
console.log(message);

//3)isEven(n): returns true or false. For example, isEven(4) gives true and isEven(7) gives false.

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));   
console.log(isEven(7));   


//Function Expressiom
//1) 
const squareExp = function(n) {
  return n*n;
}
console.log(squareExp(4));


//2
const name = function(name){
  return `Welcome ${name}`;
}
console.log(name("Binuja"));


//3
const evenOrOdd = function (n) {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(`The given number is ${evenOrOdd(7)}`);   

