window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
}

class CalculatorJQuery {
    private x: JQuery;
    private y: JQuery;
    private output : JQuery;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('#' + outputId);
        this.wireEvents();
    }

    wireEvents() {
        $('Add').click('click', 
            event => {
                this.output.html(this.add(parseInt(this.x.value), parseInt(this.y.value)).toString());
            });
        $('Subtract').click('click', 
            event => {  
                this.output.html(this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString());
            });
    }
    add(x: number, y: number) {
        return x + y;
    }
    subtract(x: number, y: number) {
        return x - y;
    }

}