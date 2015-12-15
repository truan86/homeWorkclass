import Polygon from './polygon-compiled';

class Rectangle extends Polygon {
    constructor(coordinates) {
        super(coordinates);
        let [a,b]=this.sides;
        this.side1 = a;
        this.side2 = b;
        this.area = this.side1 * this.side2;
    }
}

export default Rectangle;