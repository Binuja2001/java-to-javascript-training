//   Spread → expands (when giving values)
//   Rest   → collects into an array (in function parameters)

// ---------- SPREAD ----------

// 1) Copy an array (new array, not a reference)
const a = [1, 2, 3];
const copy = [...a];
copy.push(4);
console.log(a);      // [1, 2, 3]
console.log(copy);   // [1, 2, 3, 4]

// 2) Merge arrays
const b = [4, 5];
console.log([...a, ...b]);    // [1, 2, 3, 4, 5]

// 3) Pass array items as separate arguments
console.log(Math.max(...a));  // 3

// 4) Copy an object and add a property
const user = { name: "Binuja" };
const updated = { ...user, age: 25 };
console.log(updated);         // { name: 'Binuja', age: 25 }

// ---------- REST ----------

// 5) Collect all arguments into an array
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4);              // [1, 2, 3, 4]

// 6) Normal parameters first, rest takes what is left (must be last)
function test(x, y, ...z) {
  console.log(x);             // 1
  console.log(y);             // 2
  console.log(z);             // [3, 4, 5]
}
test(1, 2, 3, 4, 5);