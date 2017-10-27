interface IPoint {
    getDist(): number;
}

module Shapes {
    export class Point implements IPoint {
        getDist(): number {
            return Math.sqrt(this.x * this.y);
        }
        constructor (public x : number, public y : number) {
            this.x = x;
            this.y = y;
        }
        static origin = new Point(0, 0);
    }
}

var p: IPoint = new Shapes.Point(3,4);
var dist = p.getDist();

toastr.info("distance =" + dist);