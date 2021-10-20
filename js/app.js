import { Car } from "./car.js";
import { Person } from "./person.js";
debugger;
function check(description) {
  let value;
  do {
    value = prompt(description);
  } while (value === "" || value === null);
  return value;
}

let brand = check("enter the car brand");
let color = check("enter the color of car");
let engine = check("enter the engine");
let name = check("enter person name");
let age = prompt("enter person age");
if (age >= 18) {
  let car = new Car(brand, color, engine);
  let person = new Person(name, age);
  car.showCarData();
  car.setCarOwner(person);
  car.showOwner();
} else {
  document.body.append("person is not 18 years old");
}

// Реализовать необходимые проверки на корректность
// ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).
