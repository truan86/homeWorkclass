import Polygon from './polygon-compiled';

class Triangle extends Polygon {
    constructor(coordinates) {
        super(coordinates);
        // class polygon calculates the perimeter  'this.perimetr'
        let p = (this.perimetr / 2);
        let sideA = this.sides[0];
        let sideB = this.sides[1];
        let sideC = this.sides[2];
        this.area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
    }
}

export default Triangle;