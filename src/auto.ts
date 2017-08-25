class AutoEngine {
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

class Accessory { 
    constructor(public accessoryNumber: number, public title: string) { }
}
class Auto { 
    private _basePrice: number;
    private _engine:  AutoEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine:  AutoEngine, make: string, model: string) {
        this._engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
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
    get engine():  AutoEngine {
        return this._engine;
    }
    set engine(value:  AutoEngine) {
        if(value == undefined) throw 'Please supply an engine.';
        this._engine = value;
    }
}
class Trunk extends Auto {
    
}


window.onload = function () {
    var auto = new Auto(40000, new AutoEngine(300, 'V8'), 'Chevy', 'Silverado');
    alert(auto.engine.engineType);
}