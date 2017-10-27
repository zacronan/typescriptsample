interface IEngine {
    start(callback: (startStatus:boolean, engineType: string) => void): void;
    stop(callback: (startStatus:boolean, engineType: string) => void): void;
}
interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
}
class AutoEngine implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);    
    }
}
class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);    
    }
}
class Accessory { 
    constructor(public accessoryNumber: number, public title: string) { }
}
class Auto { 
    private _basePrice: number;
    private _engine:  IEngine;
    make: string;
    model: string;
    year: number;
    accessoryList: string;
    

    constructor(options: IAutoOptions) {
        this._engine = options.engine;
        this._basePrice = options.basePrice;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }
    calculateTotal() : number {
        var taxRate = .08;
        return this._basePrice + (taxRate * this._basePrice);
    }
    //addAccessories(new Accessories(), new Accessories())
    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for(var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList(): string {
        return this.accessoryList;
    }
    get basePrice(): number {
        return this._basePrice;
    }
    set basePrice(value: number) {
        if(value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }
    get engine():  IEngine {
        return this._engine;
    }
    set engine(value:  IEngine) {
        if(value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}
interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
}
class Trunk extends Auto {
    bedLength: string;
    fourByFour: boolean;
    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}


window.onload = function () {
    // var truck = new Trunk(40000, new AutoEngine(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    var truck = new Trunk( {
        basePrice: 40000, 
        engine: new CustomEngine(), 
        state: 'Chevy', 
        make: 'Silverado', 
        model: 'Long Bed', 
        year: 2013,
        bedLength: 'Short bed',
        fourByFour: true
    });
    // alert(truck.engine.engineType);
    // alert(truck.bedLength);
    // alert(truck.calculateTotal().toString());
    truck.addAccessories(
        new Accessory(10, "Film"),
        new Accessory(12, "Sunroof"),
        new Accessory(13, "RainbowLight")
    );
    truck.engine.start((status: boolean, engineType: string) => {
        alert(engineType + ' was started');
    });
}