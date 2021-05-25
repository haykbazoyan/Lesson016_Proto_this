/*
function Person({ name, age }) {
  this.name = name;
  this.age = age;
}

function Baby(name, age, favoriteToy) {
  Person.call(this, { name, age });
  this.favoriteToy = favoriteToy;
}

Person.prototype.play = (toy) => {
  return `Playing with ${toy}`;
};
Baby.prototype = Object.create(Person.prototype);

let elen = new Baby("Elen", 2, "doll");
console.log(elen.play(elen.favoriteToy));
*/

// Using CLASS
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Baby extends Person {
  constructor(name, age, favoriteToy) {
    super(name, age);
    this.favoriteToy = favoriteToy;
  }
}

Person.prototype.play = (toy) => {
  return `Playing with ${toy}`;
};
Baby.prototype = Object.create(Person.prototype);

let elen = new Baby("Elen", 2, "doll");
console.log(elen.play(elen.favoriteToy));
