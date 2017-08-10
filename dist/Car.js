"use strict";
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        var num = 2;
        alert('Engine started: ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine stopped: ' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
