(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _figureCompiled = require('./figure-compiled');

var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = (function (_Figure) {
    _inherits(Circle, _Figure);

    function Circle(coordinates) {
        _classCallCheck(this, Circle);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, coordinates));

        _this.radius = _this.sides[0];
        _this.area = Math.round(Math.pow(Math.PI * _this.radius, 2));
        _this.perimetr = Math.round(2 * Math.PI * _this.radius);
        return _this;
    }

    return Circle;
})(_figureCompiled2.default);

exports.default = Circle;


},{"./figure-compiled":2}],2:[function(require,module,exports){
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

    var perimetr = function perimetr(x, y) {
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
    this.perimetr = perimetr(this.x, this.y);
};

exports.default = Figure;


},{}],3:[function(require,module,exports){
'use strict';

var _figureCompiled = require('./figure-compiled');

var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

var _polygonCompiled = require('./polygon-compiled');

var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

var _rectangleCompiled = require('./rectangle-compiled');

var _rectangleCompiled2 = _interopRequireDefault(_rectangleCompiled);

var _squareCompiled = require('./square-compiled');

var _squareCompiled2 = _interopRequireDefault(_squareCompiled);

var _triangleCompiled = require('./triangle-compiled');

var _triangleCompiled2 = _interopRequireDefault(_triangleCompiled);

var _circleCompiled = require('./circle-compiled');

var _circleCompiled2 = _interopRequireDefault(_circleCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//figure
var coordinatesPolygon = [[0, 0], [50, 0], [50, 50], [35, 55], [0, 50]];
var figure = new _figureCompiled2.default(coordinatesPolygon);
console.log('coordenats X = ' + figure.x + '  coordenats Y = ' + figure.y);
//Polygon
var polygon = new _polygonCompiled2.default(coordinatesPolygon);
console.log('perimetr = ' + polygon.perimetr + '\n peak ' + polygon.peak);
//Rectangle
var coordinatesRectangle = [[0, 0], [50, 0], [50, 50], [0, 50]];
var rectangle = new _rectangleCompiled2.default(coordinatesRectangle);
console.log('width = ' + rectangle.side1 + '\n height = ' + rectangle.side2 + '\n area = ' + rectangle.area + '\n perimetr' + rectangle.perimetr);
//Triangle
var coordinatesTriangle = [[0, 0], [50, 0], [35, 50]];
var triangle = new _triangleCompiled2.default(coordinatesTriangle);
console.log('area = ' + Math.round(triangle.area) + '\n perimetr = ' + triangle.perimetr);
//Circle
var coordinatesCircle = [[0, 0], [0, 25]];
var circle = new _circleCompiled2.default(coordinatesCircle);
console.log('radius = ' + circle.radius + '\n area = ' + circle.area + '\n perimetr = ' + circle.perimetr);


},{"./circle-compiled":1,"./figure-compiled":2,"./polygon-compiled":4,"./rectangle-compiled":5,"./square-compiled":6,"./triangle-compiled":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _figureCompiled = require('./figure-compiled');

var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = (function (_Figure) {
    _inherits(Polygon, _Figure);

    function Polygon(coordinates) {
        _classCallCheck(this, Polygon);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).call(this, coordinates));

        _this.peak = coordinates;
        return _this;
    }

    return Polygon;
})(_figureCompiled2.default);

exports.default = Polygon;


},{"./figure-compiled":2}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _polygonCompiled = require('./polygon-compiled');

var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = (function (_Polygon) {
    _inherits(Rectangle, _Polygon);

    function Rectangle(coordinates) {
        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this, coordinates));

        _this.side1 = _this.sides[0];
        _this.side2 = _this.sides[1];
        _this.area = _this.side1 * _this.side2;

        return _this;
    }

    return Rectangle;
})(_polygonCompiled2.default);

exports.default = Rectangle;


},{"./polygon-compiled":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rectangleCompiled = require('./rectangle-compiled');

var _rectangleCompiled2 = _interopRequireDefault(_rectangleCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Square = (function (_Rectangle) {
    _inherits(Square, _Rectangle);

    function Square(coordinates) {
        _classCallCheck(this, Square);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, coordinates));
    }

    return Square;
})(_rectangleCompiled2.default);

exports.default = Square;


},{"./rectangle-compiled":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _polygonCompiled = require('./polygon-compiled');

var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Triangle = (function (_Polygon) {
    _inherits(Triangle, _Polygon);

    function Triangle(coordinates) {
        _classCallCheck(this, Triangle);

        //периметр вычесляеТ class polygon this.perimetr

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Triangle).call(this, coordinates));

        var p = _this.perimetr / 2;
        var sideA = _this.sides[0];
        var sideB = _this.sides[1];
        var sideC = _this.sides[2];
        _this.area = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
        return _this;
    }

    return Triangle;
})(_polygonCompiled2.default);

exports.default = Triangle;


},{"./polygon-compiled":4}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1VzZXJzL9CR0LXQu9C60LAvQXBwRGF0YS9Sb2FtaW5nL25wbS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiY2lyY2xlLWNvbXBpbGVkLmpzIiwiZmlndXJlLWNvbXBpbGVkLmpzIiwiaW5kZXgtY29tcGlsZWQuanMiLCJwb2x5Z29uLWNvbXBpbGVkLmpzIiwicmVjdGFuZ2xlLWNvbXBpbGVkLmpzIiwic3F1YXJlLWNvbXBpbGVkLmpzIiwidHJpYW5nbGUtY29tcGlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2ZpZ3VyZUNvbXBpbGVkID0gcmVxdWlyZSgnLi9maWd1cmUtY29tcGlsZWQnKTtcblxudmFyIF9maWd1cmVDb21waWxlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWd1cmVDb21waWxlZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENpcmNsZSA9IChmdW5jdGlvbiAoX0ZpZ3VyZSkge1xuICAgIF9pbmhlcml0cyhDaXJjbGUsIF9GaWd1cmUpO1xuXG4gICAgZnVuY3Rpb24gQ2lyY2xlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjbGUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihDaXJjbGUpLmNhbGwodGhpcywgY29vcmRpbmF0ZXMpKTtcblxuICAgICAgICBfdGhpcy5yYWRpdXMgPSBfdGhpcy5zaWRlc1swXTtcbiAgICAgICAgX3RoaXMuYXJlYSA9IE1hdGgucm91bmQoTWF0aC5wb3coTWF0aC5QSSAqIF90aGlzLnJhZGl1cywgMikpO1xuICAgICAgICBfdGhpcy5wZXJpbWV0ciA9IE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiBfdGhpcy5yYWRpdXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIENpcmNsZTtcbn0pKF9maWd1cmVDb21waWxlZDIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENpcmNsZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlLWNvbXBpbGVkLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgRmlndXJlID0gZnVuY3Rpb24gRmlndXJlKGFycikge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGaWd1cmUpO1xuXG4gICAgdGhpcy5jb29yZGluYXRzID0gYXJyO1xuICAgIHZhciB4ID0gW107XG4gICAgdmFyIHkgPSBbXTtcbiAgICB2YXIgc2lkZXMgPSBbXTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zaWRlcyA9IHNpZGVzO1xuICAgIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgIGlmIChhcnJMZW5ndGggPT0gMikge1xuICAgICAgICBjb25zb2xlLmxvZygnY2lyY2xlJyk7XG4gICAgfSBlbHNlIGlmIChhcnJMZW5ndGggPT0gMykge1xuICAgICAgICBjb25zb2xlLmxvZygnVHJpYW5nbGUnKTtcbiAgICB9IGVsc2UgaWYgKGFyckxlbmd0aCA9PSA0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWN0YW5nbGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnUG9seWdvbicpO1xuICAgIH1cbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB4LnB1c2goaXRlbVswXSk7XG4gICAgICAgIHkucHVzaChpdGVtWzFdKTtcbiAgICB9KTtcblxuICAgIHZhciBzaWRlc0ZuID0gZnVuY3Rpb24gc2lkZXNGbih4LCB5KSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB4Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChqID09IHgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlcy5wdXNoKE1hdGguc3FydChNYXRoLnBvdyh4W2pdIC0geFtpXSwgMikgKyBNYXRoLnBvdyh5W2pdIC0geVtpXSwgMikpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2lkZXNGbih0aGlzLngsIHRoaXMueSk7XG5cbiAgICB2YXIgcGVyaW1ldHIgPSBmdW5jdGlvbiBwZXJpbWV0cih4LCB5KSB7XG4gICAgICAgIHZhciBzaWRlcyA9IDA7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB4Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChqID09IHgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWRlcyArPSBNYXRoLnNxcnQoTWF0aC5wb3coeFtqXSAtIHhbaV0sIDIpICsgTWF0aC5wb3coeVtqXSAtIHlbaV0sIDIpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzaWRlcyk7XG4gICAgfTtcbiAgICB0aGlzLnBlcmltZXRyID0gcGVyaW1ldHIodGhpcy54LCB0aGlzLnkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmlndXJlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1maWd1cmUtY29tcGlsZWQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ZpZ3VyZUNvbXBpbGVkID0gcmVxdWlyZSgnLi9maWd1cmUtY29tcGlsZWQnKTtcblxudmFyIF9maWd1cmVDb21waWxlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9maWd1cmVDb21waWxlZCk7XG5cbnZhciBfcG9seWdvbkNvbXBpbGVkID0gcmVxdWlyZSgnLi9wb2x5Z29uLWNvbXBpbGVkJyk7XG5cbnZhciBfcG9seWdvbkNvbXBpbGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvbHlnb25Db21waWxlZCk7XG5cbnZhciBfcmVjdGFuZ2xlQ29tcGlsZWQgPSByZXF1aXJlKCcuL3JlY3RhbmdsZS1jb21waWxlZCcpO1xuXG52YXIgX3JlY3RhbmdsZUNvbXBpbGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZUNvbXBpbGVkKTtcblxudmFyIF9zcXVhcmVDb21waWxlZCA9IHJlcXVpcmUoJy4vc3F1YXJlLWNvbXBpbGVkJyk7XG5cbnZhciBfc3F1YXJlQ29tcGlsZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlQ29tcGlsZWQpO1xuXG52YXIgX3RyaWFuZ2xlQ29tcGlsZWQgPSByZXF1aXJlKCcuL3RyaWFuZ2xlLWNvbXBpbGVkJyk7XG5cbnZhciBfdHJpYW5nbGVDb21waWxlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmlhbmdsZUNvbXBpbGVkKTtcblxudmFyIF9jaXJjbGVDb21waWxlZCA9IHJlcXVpcmUoJy4vY2lyY2xlLWNvbXBpbGVkJyk7XG5cbnZhciBfY2lyY2xlQ29tcGlsZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlQ29tcGlsZWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL2ZpZ3VyZVxudmFyIGNvb3JkaW5hdGVzUG9seWdvbiA9IFtbMCwgMF0sIFs1MCwgMF0sIFs1MCwgNTBdLCBbMzUsIDU1XSwgWzAsIDUwXV07XG52YXIgZmlndXJlID0gbmV3IF9maWd1cmVDb21waWxlZDIuZGVmYXVsdChjb29yZGluYXRlc1BvbHlnb24pO1xuY29uc29sZS5sb2coJ2Nvb3JkZW5hdHMgWCA9ICcgKyBmaWd1cmUueCArICcgIGNvb3JkZW5hdHMgWSA9ICcgKyBmaWd1cmUueSk7XG4vL1BvbHlnb25cbnZhciBwb2x5Z29uID0gbmV3IF9wb2x5Z29uQ29tcGlsZWQyLmRlZmF1bHQoY29vcmRpbmF0ZXNQb2x5Z29uKTtcbmNvbnNvbGUubG9nKCdwZXJpbWV0ciA9ICcgKyBwb2x5Z29uLnBlcmltZXRyICsgJ1xcbiBwZWFrICcgKyBwb2x5Z29uLnBlYWspO1xuLy9SZWN0YW5nbGVcbnZhciBjb29yZGluYXRlc1JlY3RhbmdsZSA9IFtbMCwgMF0sIFs1MCwgMF0sIFs1MCwgNTBdLCBbMCwgNTBdXTtcbnZhciByZWN0YW5nbGUgPSBuZXcgX3JlY3RhbmdsZUNvbXBpbGVkMi5kZWZhdWx0KGNvb3JkaW5hdGVzUmVjdGFuZ2xlKTtcbmNvbnNvbGUubG9nKCd3aWR0aCA9ICcgKyByZWN0YW5nbGUuc2lkZTEgKyAnXFxuIGhlaWdodCA9ICcgKyByZWN0YW5nbGUuc2lkZTIgKyAnXFxuIGFyZWEgPSAnICsgcmVjdGFuZ2xlLmFyZWEgKyAnXFxuIHBlcmltZXRyJyArIHJlY3RhbmdsZS5wZXJpbWV0cik7XG4vL1RyaWFuZ2xlXG52YXIgY29vcmRpbmF0ZXNUcmlhbmdsZSA9IFtbMCwgMF0sIFs1MCwgMF0sIFszNSwgNTBdXTtcbnZhciB0cmlhbmdsZSA9IG5ldyBfdHJpYW5nbGVDb21waWxlZDIuZGVmYXVsdChjb29yZGluYXRlc1RyaWFuZ2xlKTtcbmNvbnNvbGUubG9nKCdhcmVhID0gJyArIE1hdGgucm91bmQodHJpYW5nbGUuYXJlYSkgKyAnXFxuIHBlcmltZXRyID0gJyArIHRyaWFuZ2xlLnBlcmltZXRyKTtcbi8vQ2lyY2xlXG52YXIgY29vcmRpbmF0ZXNDaXJjbGUgPSBbWzAsIDBdLCBbMCwgMjVdXTtcbnZhciBjaXJjbGUgPSBuZXcgX2NpcmNsZUNvbXBpbGVkMi5kZWZhdWx0KGNvb3JkaW5hdGVzQ2lyY2xlKTtcbmNvbnNvbGUubG9nKCdyYWRpdXMgPSAnICsgY2lyY2xlLnJhZGl1cyArICdcXG4gYXJlYSA9ICcgKyBjaXJjbGUuYXJlYSArICdcXG4gcGVyaW1ldHIgPSAnICsgY2lyY2xlLnBlcmltZXRyKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgtY29tcGlsZWQuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZmlndXJlQ29tcGlsZWQgPSByZXF1aXJlKCcuL2ZpZ3VyZS1jb21waWxlZCcpO1xuXG52YXIgX2ZpZ3VyZUNvbXBpbGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZpZ3VyZUNvbXBpbGVkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9seWdvbiA9IChmdW5jdGlvbiAoX0ZpZ3VyZSkge1xuICAgIF9pbmhlcml0cyhQb2x5Z29uLCBfRmlndXJlKTtcblxuICAgIGZ1bmN0aW9uIFBvbHlnb24oY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvbHlnb24pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihQb2x5Z29uKS5jYWxsKHRoaXMsIGNvb3JkaW5hdGVzKSk7XG5cbiAgICAgICAgX3RoaXMucGVhayA9IGNvb3JkaW5hdGVzO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFBvbHlnb247XG59KShfZmlndXJlQ29tcGlsZWQyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2x5Z29uO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2x5Z29uLWNvbXBpbGVkLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvbHlnb25Db21waWxlZCA9IHJlcXVpcmUoJy4vcG9seWdvbi1jb21waWxlZCcpO1xuXG52YXIgX3BvbHlnb25Db21waWxlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2x5Z29uQ29tcGlsZWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBSZWN0YW5nbGUgPSAoZnVuY3Rpb24gKF9Qb2x5Z29uKSB7XG4gICAgX2luaGVyaXRzKFJlY3RhbmdsZSwgX1BvbHlnb24pO1xuXG4gICAgZnVuY3Rpb24gUmVjdGFuZ2xlKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWN0YW5nbGUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWN0YW5nbGUpLmNhbGwodGhpcywgY29vcmRpbmF0ZXMpKTtcblxuICAgICAgICBfdGhpcy5zaWRlMSA9IF90aGlzLnNpZGVzWzBdO1xuICAgICAgICBfdGhpcy5zaWRlMiA9IF90aGlzLnNpZGVzWzFdO1xuICAgICAgICBfdGhpcy5hcmVhID0gX3RoaXMuc2lkZTEgKiBfdGhpcy5zaWRlMjtcblxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlY3RhbmdsZTtcbn0pKF9wb2x5Z29uQ29tcGlsZWQyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZWN0YW5nbGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS1jb21waWxlZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGVDb21waWxlZCA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlLWNvbXBpbGVkJyk7XG5cbnZhciBfcmVjdGFuZ2xlQ29tcGlsZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlQ29tcGlsZWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTcXVhcmUgPSAoZnVuY3Rpb24gKF9SZWN0YW5nbGUpIHtcbiAgICBfaW5oZXJpdHMoU3F1YXJlLCBfUmVjdGFuZ2xlKTtcblxuICAgIGZ1bmN0aW9uIFNxdWFyZShjb29yZGluYXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3F1YXJlKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNxdWFyZSkuY2FsbCh0aGlzLCBjb29yZGluYXRlcykpO1xuICAgIH1cblxuICAgIHJldHVybiBTcXVhcmU7XG59KShfcmVjdGFuZ2xlQ29tcGlsZWQyLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTcXVhcmU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS1jb21waWxlZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb2x5Z29uQ29tcGlsZWQgPSByZXF1aXJlKCcuL3BvbHlnb24tY29tcGlsZWQnKTtcblxudmFyIF9wb2x5Z29uQ29tcGlsZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9seWdvbkNvbXBpbGVkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJpYW5nbGUgPSAoZnVuY3Rpb24gKF9Qb2x5Z29uKSB7XG4gICAgX2luaGVyaXRzKFRyaWFuZ2xlLCBfUG9seWdvbik7XG5cbiAgICBmdW5jdGlvbiBUcmlhbmdsZShjb29yZGluYXRlcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpYW5nbGUpO1xuXG4gICAgICAgIC8v0L/QtdGA0LjQvNC10YLRgCDQstGL0YfQtdGB0LvRj9C10KIgY2xhc3MgcG9seWdvbiB0aGlzLnBlcmltZXRyXG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRyaWFuZ2xlKS5jYWxsKHRoaXMsIGNvb3JkaW5hdGVzKSk7XG5cbiAgICAgICAgdmFyIHAgPSBfdGhpcy5wZXJpbWV0ciAvIDI7XG4gICAgICAgIHZhciBzaWRlQSA9IF90aGlzLnNpZGVzWzBdO1xuICAgICAgICB2YXIgc2lkZUIgPSBfdGhpcy5zaWRlc1sxXTtcbiAgICAgICAgdmFyIHNpZGVDID0gX3RoaXMuc2lkZXNbMl07XG4gICAgICAgIF90aGlzLmFyZWEgPSBNYXRoLnNxcnQocCAqIChwIC0gc2lkZUEpICogKHAgLSBzaWRlQikgKiAocCAtIHNpZGVDKSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gVHJpYW5nbGU7XG59KShfcG9seWdvbkNvbXBpbGVkMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJpYW5nbGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyaWFuZ2xlLWNvbXBpbGVkLmpzLm1hcCJdfQ==
