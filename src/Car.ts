class Car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    start() {
        var num:number = 2;
        alert('Engine started: ' + this.engine);
    }
    stop() {
        alert('Engine stopped: ' + this.engine);
    }
}

window.onload = function() {
    var car = new Car('V8');
    car.start();
    car.stop();
};
