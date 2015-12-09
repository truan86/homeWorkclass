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

//# sourceMappingURL=triangle-compiled.js.map