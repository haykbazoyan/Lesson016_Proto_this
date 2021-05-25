// Compare Ages
/*
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.compareAge = (secPerson) => {
    if (this.age > secPerson.age) {
      return `I am older than ${secPerson.name}.`;
    } else if (this.age === secPerson.age) {
      return `${secPerson.name} is the same age as me.`;
    } else {
      return `${secPerson.name} is older than me.`;
    }
  };
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); // ➞ "Joel is older than me."
console.log(p2.compareAge(p1)); // ➞ "Samuel is younger than me."
console.log(p1.compareAge(p3)); // ➞ "Lily is the same age as me."
*/

// Using CLASS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(secPerson) {
    if (this.age > secPerson.age) {
      return `I am older than ${secPerson.name}.`;
    } else if (this.age === secPerson.age) {
      return `${secPerson.name} is the same age as me.`;
    } else {
      return `${secPerson.name} is older than me.`;
    }
  }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); // ➞ "Joel is older than me."
console.log(p2.compareAge(p1)); // ➞ "Samuel is younger than me." or "I am older than Samuel."
console.log(p1.compareAge(p3)); // ➞ "Lily is the same age as me."
