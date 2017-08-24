"use strict";
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
// class Car {
//     engine: string;
//     constructor(engine: string) {
//         this.engine = engine;
//     }
//     start() {
//         var num:number = 2;
//         alert('Engine started: ' + this.engine);
//     }
//     stop() {
//         alert('Engine stopped: ' + this.engine);
//     }
// }
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (engine) {
            if (engine == undefined)
                throw "Please supply an engine";
            this._engine = engine;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    // var car = new Car('V8');
    // car.start();
    // car.stop();
};
//# sourceMappingURL=Car.js.map