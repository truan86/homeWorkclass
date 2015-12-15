'use strict';

var _figureCompiled = require('./figure-compiled');

var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

var _polygonCompiled = require('./../polygon-compiled');

var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

var _rectangleCompiled = require('./../rectangle-compiled');

var _rectangleCompiled2 = _interopRequireDefault(_rectangleCompiled);

var _squareCompiled = require('./../square-compiled');

var _squareCompiled2 = _interopRequireDefault(_squareCompiled);

var _triangleCompiled = require('./../triangle-compiled');

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

//# sourceMappingURL=index-compiled.js.map