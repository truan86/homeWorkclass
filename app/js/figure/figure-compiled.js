'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Figure = function Figure(arr) {
    _classCallCheck(this, Figure);

    this.coordinats = arr;
    var x = [];
    var y = [];
    var sides = [];
    this.x = x;
    this.y = y;
    this.sides = sides;
    var arrLength = arr.length;
    if (arrLength == 2) {
        console.log('circle');
    } else if (arrLength == 3) {
        console.log('Triangle');
    } else if (arrLength == 4) {
        console.log('Rectangle');
    } else {
        console.log('Polygon');
    }
    arr.forEach(function (item) {
        x.push(item[0]);
        y.push(item[1]);
    });

    var sidesFn = function sidesFn(x, y) {
        var i = 0;
        while (i < x.length) {
            var j = i + 1;
            if (j == x.length) {
                j = 0;
            }
            sides.push(Math.sqrt(Math.pow(x[j] - x[i], 2) + Math.pow(y[j] - y[i], 2)));
            i++;
        }
    };
    sidesFn(this.x, this.y);

    this.perimetr = function (x, y) {
        var sides = 0;
        var i = 0;
        while (i < x.length) {
            var j = i + 1;
            if (j == x.length) {
                j = 0;
            }
            sides += Math.sqrt(Math.pow(x[j] - x[i], 2) + Math.pow(y[j] - y[i], 2));
            i++;
        }
        return Math.round(sides);
    };
    this.perimetr(this.x, this.y);
};

exports.default = Figure;

//# sourceMappingURL=figure-compiled.js.map