//isObject
var objectOrNot = {}
function isObject(){
    if(typeof objectOrNot == "object"){
        return true
    }
    else{
        return false
    }
}
isObject(objectOrNot)

//Create object car
function Car(brand, model, color) {
    this.brandCar = brand;
    this.modelCar = model;
    this.colorCar = color;
}
var theCar = new Car("Seat", "Leon", "Red");

console.log("my car is a " + theCar.brandCar + " " + theCar.modelCar + "and the color is " + theCar.colorCar )