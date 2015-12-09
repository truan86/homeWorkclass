import Polygon from './polygon-compiled';

class Rectangle extends Polygon {
    constructor(coordinates) {
        super(coordinates);
        this.side1 = this.sides[0];
        this.side2 = this.sides[1];
        this.area = (this.side1 * this.side2);

    }
}

export default Rectangle;