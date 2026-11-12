//Lexical Scope
Scope is where a variable can be accessed. A lexical environment is created with each execution context: it’s the local memory plus a reference to the parent’s lexical environment. Lexical means the parent is decided by where the function is written, not where it’s called. The chain of these references is the scope chain. JavaScript looks for a variable in local memory first, then each parent up to global. If it isn’t found (global’s parent is null), the chain is exhausted and a ReferenceError is thrown.



//Closures
A closure is a function bundled with its lexical environment. An inner function remembers the variables of the outer function where it was written, even after the outer function has returned.


//Hoisting
Hoisting is the ability to access variables and functions before they are declared in the code. It happens because, in the memory creation phase, JavaScript allocates memory for all variables and functions before running any code.
var → you can access it, but you get undefined.
Function declaration → you can access and call it fully ✅
let, const, arrow functions and function expressions in const → hoisted, but not accessible (TDZ), so you get a ReferenceError.


spread (...)
Expands an iterable (array, string) or an object into individual elements.
Uses: copying arrays/objects, merging arrays/objects, passing array items as function arguments.
Spread creates a new array/object, so it avoids reference problems.

rest (...)
Collects multiple values into one array. Used in function parameters.
Must be the last parameter.Rest (...name in function parameters) collects all the remaining arguments into an array.

Spread → giving values (function call, array/object literal): expands
Rest   → receiving values (function parameters): collects