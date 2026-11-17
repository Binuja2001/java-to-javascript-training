//Create an object called phone with:

// brand: “Samsung”
// price: 15000
// color: “black”

const phone = {
    brand:"Samsung",
    price:15000,
    color:"black"

};
console.log(phone.brand);
console.log(phone.price);
console.log(phone.color);

//Changing the value
phone.price=899992;
console.log(phone.price);

//adding a new property
phone.storage="128GB";
console.log(phone.storage);

//deleting a property
delete phone.color;
console.log(phone);


// Add a method showPrice to your phone object that returns `Price is ${this.price}`, then call it:
 const phone1 ={
    price:988777,
    amount: function(){
       return  `Price is ${this.price}`;
    }
 };
 console.log(phone1.amount());


 for (const key in phone) {
  console.log(key);
}

for (const key in phone) {
  console.log(key, phone[key]);
}

//get all keys or all values as an array
console.log(Object.keys(phone));     
console.log(Object.values(phone));   