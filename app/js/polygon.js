import Figure from './figure-compiled';

class Polygon extends Figure {
    constructor(coordinates) {
        super(coordinates);
        this.peak = coordinates;
    }
}

export default Polygon;