
// Destructuring unpacks values from arrays or properties from objects into separate variables.

//Array Destructuring

let array=["Kerala","Malayalam",10000,["TRK","CCG","UUU"]];
let [state,language,population,[a1,a2,a3]]=array;
console.log(state);
console.log(language);
console.log(population);
console.log(a1);
console.log(a2);
console.log(a3);


//Object Destructuring
let obj1={
    state1:"Kerala",
    language1:"Malayalam",
    population1:8900,
    airports:{
        a11:"QWER",
        a21:"KKJH",
        a31:"JJJH"
    }
}

let{state1:s1,language1:l1,population1,airports:{a11,a21,a31}}=obj1;
console.log(s1);
console.log(l1);
console.log(population1);
console.log(a11);
console.log(a21);
console.log(a31);