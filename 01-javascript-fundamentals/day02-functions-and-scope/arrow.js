//1)Write an arrow function subtract that takes two numbers and returns their difference.
//subtract(10, 4) → 6

const subtract = (x,y)=>x-y;
console.log(subtract(10,4));

//Write an arrow function square that takes a number and returns its square.
// square(5) → 25

const square = a=>a*a;
console.log(square(5));

//Write an arrow function sayHi that takes no parameters and returns "Hi".
// sayHi() → Hi

var greet=()=>"hi";
console.log(greet());

// Write an arrow function greet that takes a name and returns a welcome message.
// greet("Binuja") → Welcome, Binuja!

var name = (name)=>`welcome ${name}`;
console.log(name("Binuja"));

// Write an arrow function evenOrOdd that takes a number and returns "even" or "odd".
// evenOrOdd(7) → odd
 
const evernOrOdd = n=>{
    if(n%2===0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(evernOrOdd(7));

// Write an arrow function isAdult that takes an age and returns true if the age is 18 or more, otherwise false.
// isAdult(20) → true

const isAdult = age => age >= 18;
console.log(isAdult(20));   // true
console.log(isAdult(18));   // true
console.log(isAdult(15));   // false

