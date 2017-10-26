class AutoEngine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
class Auto {
    constructor(basePrice, engine, make, model) {
        this._engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    calculateTotal() {
        var taxRate = .08;
        return this._basePrice + (taxRate * this._basePrice);
    }
    //addAccessories(new Accessories(), new Accessories())
    addAccessories(...accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }
    getAccessoryList() {
        return this.accessoryList;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(value) {
        if (value <= 0)
            throw 'price must be >= 0';
        this._basePrice = value;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine.';
        this._engine = value;
    }
}
class Trunk extends Auto {
    constructor(basePrice, engine, make, model, bedLength, fourByFour) {
        super(basePrice, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}
window.onload = function () {
    var auto = new Trunk(40000, new AutoEngine(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    alert(auto.engine.engineType);
    alert(auto.bedLength);
};
