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

//# sourceMappingURL=rectangle-compiled.js.map