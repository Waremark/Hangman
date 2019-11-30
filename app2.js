var Car = function(carType, carHp, carColor) {
this.hp = carHp;
this.type = carType;
this.color = carColor;
this.km = 0;
};
Car.prototype.drive = function(km){
console.log(this.color + " " + this.type + " drives for " + km + "km");
this.km += km;
}
var mercedes = new Car("Mercedes", 120, "Black");
var trabant = new Car("Trabant", 40, "Grey");
trabant.drive(10);
mercedes.drive(40);

var Animal = function (generic, size, legs){
this.generic = generic;
this.size = size;
this.legs = legs;
}

Animal.prototype.sounds = function(artOfNoise) {
console.log("I have to write : "+artOfNoise+ " of " + this.generic+ " with "+this.legs+" legs");
}
var dog = new Animal("dogs", "middle", "4");
dog.sounds("barking");