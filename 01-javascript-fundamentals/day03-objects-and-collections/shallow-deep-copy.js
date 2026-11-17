
// DAY 2: SHALLOW COPY AND DEEP COPY

// 1. OBJECT REFERENCE
// Both variables point to the same object.

const person1 = {
    name: "Binuja",
    age: 25
};

const person2 = person1;

person2.name = "Anu";

console.log(person1.name); // Anu
console.log(person2.name); // Anu


// 2. SHALLOW COPY USING SPREAD OPERATOR
// Creates a new outer object.

const employee1 = {
    name: "John",
    age: 30
};

const employee2 = { ...employee1 };

employee2.name = "David";

console.log(employee1.name); // John
console.log(employee2.name); // David


// 3. SHALLOW COPY WITH NESTED OBJECT
// Nested objects are still shared.

const user1 = {
    name: "Alex",
    address: {
        city: "New York"
    }
};

const user2 = { ...user1 };

user2.address.city = "London";

console.log(user1.address.city); // London
console.log(user2.address.city); // London


// 4. DEEP COPY USING structuredClone()
// Creates a separate copy, including nested objects.

const original = {
    name: "Alex",
    address: {
        city: "New York"
    }
};

const copied = structuredClone(original);

copied.address.city = "London";

console.log(original.address.city); // New York
console.log(copied.address.city);  // London


// 5. SHALLOW COPY USING Object.assign()

const product1 = {
    name: "Laptop",
    price: 50000
};

const product2 = Object.assign({}, product1);

product2.price = 60000;

console.log(product1.price); // 50000
console.log(product2.price); // 60000


// 6. SHALLOW COPY OF ARRAY

const numbers1 = [10, 20, 30];

const numbers2 = [...numbers1];

numbers2.push(40);

console.log(numbers1); // [10, 20, 30]
console.log(numbers2); // [10, 20, 30, 40]


// 7. DEEP COPY USING JSON

const data1 = {
    name: "John",
    details: {
        city: "London"
    }
};

const data2 = JSON.parse(JSON.stringify(data1));

data2.details.city = "Paris";

console.log(data1.details.city); // London
console.log(data2.details.city); // Paris


// SUMMARY:
// Reference assignment: Both variables share the same object.
// Shallow copy: Copies the first level; nested objects are shared.
// Deep copy: Copies nested objects and arrays too.
// structuredClone() is preferred for many supported data types.
// JSON method has limitations with special data types.
