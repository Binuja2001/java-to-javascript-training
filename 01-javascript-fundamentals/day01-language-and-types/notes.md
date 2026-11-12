//Execution Context

every JS program runs inside an execution context, which has two components: the memory component (variable environment) and the code component (thread of execution).

It’s created in two phases:

Memory creation phase: memory is allocated for variables and functions. var gets undefined, function declarations store their full code, and let/const are allocated but uninitialised (TDZ).
Code execution phase: code runs line by line and values are assigned. When a function is called, a new execution context is created with its own memory and code phases.

The call stack manages these contexts. The global execution context is pushed first. Each function call pushes a new context, and when the function returns, its context is popped and deleted. When the program ends, the global context is popped too.


//primitives and refernece
Primitives are stored and copied by value. Objects, arrays and functions are stored and copied by reference: copying shares the same data, and === compares addresses, not contents.


//dynamic typing
JavaScript is dynamically typed: types belong to values, not variables. A variable can hold any type, and types are checked at runtime. Use typeof to check the current type.


//Coercion = automatic type conversion

+   → if a string is involved: join; otherwise: maths
- * /  → always maths (strings become numbers)
true → 1, false → 0, null → 0, undefined → NaN
==  → converts types, then compares
=== → no conversion; different types = false



//  Undefined and Null
undefined is set by JavaScript (no value assigned yet); null is set by the programmer (intentionally empty). Both are falsy. null == undefined is true; === is false.


//template literals
Template literals use backticks. ${expression} inserts values or expressions, and they support multi-line strings. They’re cleaner than + concatenation.