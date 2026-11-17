class Student{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    introduce(){
       return  `Hi i am ${this.name}and i am ${this.age} years old `
    }
    static isAdult(n){
       if (n>18){
         return true;
        }else{
            return false;
        }
    }
}
let s1 = new Student("Binuja",25);
console.log(s1.name,s1.age);

console.log(s1.introduce());
console.log(Student.isAdult(25));



class Employee{
    constructor(name, salary){
        this.name=name;
        this.salary=salary;
    }
details(){
   return  `deatils of employee is ${this.name} and ${this.salary}`;
}
}
 class Manager extends Employee{
    constructor(name, salary, team){
        super(name, salary);
        this.team=team;
    }

 }
  
const m = new Manager("Binuja", 456778, "Dev");
console.log(m.name);
console.log(m.salary);
console.log(m.team);
