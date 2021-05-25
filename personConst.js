// Person Constructor
/*
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = (food) => {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };
  this.poop = () => {
    this.stomach = [];
  };
  this.toString = () => {
    console.log(`${name}, ${age}`);
  };
}
*/

// Using CLASS

class Person {
  constructor(name, age, stomach = []) {
    this.name = name;
    this.age = age;
    this.stomach = stomach;
  }

  eat(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    } else {
      return `Stomach is full`;
    }
  }

  poop() {
    this.stomach = [];
  }

  toString() {
    console.log(`${this.name}, ${this.age}`);
  }
}
let user1 = new Person("Adele", 23);
let user2 = new Person("Christine", 20);
let user3 = new Person("Elise", 26);

user1.eat("some food");
console.log(user1.stomach);
user1.eat("some food_1");
user1.eat("some food_2");
console.log(user1.stomach);
user1.poop();
console.log(user1.stomach);
user1.toString();
