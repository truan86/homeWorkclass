class Figure {
    constructor(arr) {
        this.coordinats = arr;
        let x = [];
        let y = [];
        let sides = [];
        this.x = x;
        this.y = y;
        this.sides = sides;
        let arrLength = arr.length;
        if (arrLength == 2) {
            console.log('circle')
        }
        else if (arrLength == 3) {
            console.log('Triangle')
        }
        else if (arrLength == 4) {
            console.log('Rectangle')
        }
        else {
            console.log('Polygon')
        }
        arr.forEach(function (item) {
            x.push(item[0]);
            y.push(item[1]);
        });

        let sidesFn = function (x, y) {
            let i = 0;
            while (i < x.length) {
                let j = i + 1;
                if (j == x.length) {
                    j = 0;
                }
                sides.push(Math.sqrt(Math.pow((x[j] - x[i]), 2) + Math.pow((y[j] - y[i]), 2)));
                i++;
            }
        };
        sidesFn(this.x, this.y);

        this.perimetr = function (x, y) {
            let sides = 0;
            let i = 0;
            while (i < x.length) {
                let j = i + 1;
                if (j == x.length) {
                    j = 0;
                }
                sides += Math.sqrt(Math.pow((x[j] - x[i]), 2) + Math.pow((y[j] - y[i]), 2));
                i++;
            }
            return Math.round(sides);
        };
        this.perimetr(this.x, this.y);
    }
}

export default Figure;