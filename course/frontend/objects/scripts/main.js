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

theCar.soloCar = function() {
    return this.brandCar + " y el moldelo " + this.modelCar
}

theCar.soloCafr()

///
console.log("my car is a " + theCar.brandCar + " " + theCar.modelCar + "and the color is " + theCar.colorCar )