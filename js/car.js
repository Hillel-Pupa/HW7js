export function Car(brand, color, engine) {
  this.brand = brand;
  this.color = color;
  this.engine = engine;

  this.showCarData = function () {
    document.body.append(`${brand} ${color} ${engine}`);
    document.body.append(document.createElement("br"));
  };
  this.setCarOwner = function (owner) {
    this.owner = owner;
  };

  this.showOwner = function () {
    if (this.owner) {
      document.body.append(
        "this car is owned by " + this.owner.getData() + " years old"
      );
    } else {
      document.body.append("this car has no owner");
    }
  };
}
