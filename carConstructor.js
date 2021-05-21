// Car constructor

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  this.fill = (gallons) => {
    this.tank = gallons;
  };
  this.drive = (distance) => {
    let cycle = 0;
    for (let miles = 0; miles < distance; miles++) {
      cycle += 1;
      if (this.tank === 0) {
        return `Iran out of fuel at ${this.odometer} miles`;
      }

      if (miles < this.tank * milesPerGallon) {
        this.odometer += 1;
      } else {
        return `Iran out of fuel at ${this.odometer} miles`;
      }
    }
    return `Iran out of fuel at ${this.odometer} miles`;
  };
}

let mersedes = new Car("c300", 10);

mersedes.fill(2);
console.log(mersedes.drive(5));
