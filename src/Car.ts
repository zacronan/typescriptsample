class Engine {
    constructor(public horsePower: number, public engineType: string) { }
}
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

class Car {
    private _engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    get engine(): Engine {
        return this._engine;
    }
    set engine(engine: Engine) {
        if(engine == undefined) throw "Please supply an engine";
        this._engine = engine;
    }
    start() : void {
        alert('Car engine started ' + this._engine.engineType);
    }
}

window.onload = function() {
    var engine = new Engine(10, 'BMW');
    var car = new Car(engine);
    alert(car.engine.engineType);
    // var car = new Car('V8');
    // car.start();
    // car.stop();
};
