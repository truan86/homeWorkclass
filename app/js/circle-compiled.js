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

//# sourceMappingURL=circle-compiled.js.map