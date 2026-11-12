//Store a function in a variable
function Namaskaram(){
    return `Namaskaram`;
}
const greet = Namaskaram;
console.log(greet());



//2
function getName() {
  return "Binuja";
}

function printIt(fn) {
  console.log(fn());
}

printIt(getName);//answer Binuja

//3
//Write a function runTwice(fn) that calls fn two times.
function sayhi(){
    return "hi";
}
function runTwice(fn){
console.log(fn())
console.log(fn())
}
runTwice(sayhi);

//Write add, subtract and multiply as function expressions, then make these work:
function calculate(a, b, operation) {
  return operation(a, b);
}
const add = function(x,y){
    return x+y;
}
const subtract=function(x,y){
    return x-y;
}
const multiply=function(x,y){
    return x*y;
}

console.log(calculate(10, 5, add));       
console.log(calculate(10, 5, subtract));  
console.log(calculate(10, 5, multiply));  




