window.onload = function () {
    var calc = new Calculator('X', 'Y', 'Output');
}

class Calculator {
    

    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = <HTMLInputElement>document.getElementById(xId);
        this.y = <HTMLInputElement>document.getElementById(yId);
        this.output = <HTMLInputElement>document.getElementById(outputId);
        this.wireEvents(); 
    }

    wireEvents() {
        // @ts-ignore: error
        document.getElementById('Add').addEventListener('click', 
            event => {  
                this.output.innerHTML = '100';
            });
        // @ts-ignore: error
        document.getElementById('Subtract').addEventListener('click', 
            event => {  
                this.output.innerHTML = '100';
            });
    }
    add(x: number, y: number) {
        return x + y;
    }
    subtract(x: number, y: number) {
        return x - y;
    }

}