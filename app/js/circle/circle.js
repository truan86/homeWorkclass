import Figure from './../figure-compiled';

class Circle extends Figure {
    constructor(coordinates) {
        super(coordinates);
        this.radius = this.sides[0];
        this.area = Math.round(Math.pow(Math.PI * this.radius, 2));
        this.perimetr = Math.round(2 * Math.PI * this.radius);
    }
}
export default Circle;