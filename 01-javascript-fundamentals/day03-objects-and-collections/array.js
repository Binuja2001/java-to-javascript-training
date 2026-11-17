const names=["Binuja","Chippy","Shoshama"];
for(i=0;i<names.length;i++){
    console.log(names[i]);
}

for(const name of names){
    console.log(name);
}

// map
// Given [1, 2, 3, 4], make a new array with each number multiplied by 3.
// Expected: [3, 6, 9, 12]
const num=[1,2,3,4];
const triple=num.map((num)=> num*3);
console.log(triple);

// Given ["anu", "rohan", "binuja"], make every name uppercase.
// Expected: ['ANU', 'ROHAN', 'BINUJA']
const names1=["anu","rohan","binuja"];
const uppercase=names.map(name=>name.toUpperCase(names1));
console.log(uppercase);


// filter
// 5. Given [5, 12, 8, 20, 3], keep only numbers greater than 10.
// Expected: [12, 20]

const Numbers = [5,12,8,20,3];
const  GTTEN = Numbers.filter(num=>num>10);
console.log(GTTEN);

// reduce
// 8. Given [10, 20, 30, 40], find the total.
// Expected: 100

const num2 = [10,20,30,40];
const total = num2.reduce((sum ,current)=>sum+current,0);
console.log(total);


//MAP
let map = new Map();

map.set("name", "John"); // Add
map.get("name");         // Get
map.has("name");         // Check
map.delete("name");      // Delete
map.size;                // Count
map.clear();             // Remove all

map.keys();              // All keys
map.values();            // All values
map.entries();           // All entries

//SET
let set = new Set();

set.add(10);             // Add
set.has(10);             // Check
set.delete(10);          // Delete
set.size;                // Count
set.clear();             // Remove all

set.keys();              // Values
set.values();            // Values
set.entries();           // [value, value] pairs