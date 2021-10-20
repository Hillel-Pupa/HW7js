export function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getData = function () {
    return `${this.name} ${this.age}`;
  };
}
