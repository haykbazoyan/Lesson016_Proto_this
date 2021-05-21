// Person Constructor

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
// user3.eat('some food');
// user2.eat('some food');
