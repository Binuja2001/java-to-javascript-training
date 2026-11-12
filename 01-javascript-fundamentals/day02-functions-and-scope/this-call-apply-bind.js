// Day 2: this and binding
// Run: node this-binding.js
// Rule: `this` = the object before the dot when the function is CALLED.

// 1) this in an object method
const student = {
  name: "Binuja",
  greet: function () {
    console.log(`Hi, I am ${this.name}`);
  }
};
student.greet();            // Hi, I am Binuja

// 2) Losing this (copying the method out)
const lost = student.greet;
lost();                     // Hi, I am undefined (nothing before the dot)

// 3) bind: returns a new function with this locked
const fixed = student.greet.bind(student);
fixed();                    // Hi, I am Binuja

// 4) call and apply: run now with a chosen this
function intro(city, age) {
  console.log(`${this.name} from ${city}, age ${age}`);
}
const person = { name: "Anu" };
intro.call(person, "Kochi", 25);     // Anu from Kochi, age 25 (arguments one by one)
intro.apply(person, ["Kochi", 25]);  // Anu from Kochi, age 25 (arguments in an array)

// 5) Arrow functions have no own this
const student2 = {
  name: "Binuja",
  greet: () => {
    console.log(`Hi, I am ${this.name}`);
  }
};
student2.greet();           // Hi, I am undefined (don't use arrows for methods)