"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _figureCompiled = require('./figure-compiled');

        var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./figure-compiled": 2 }], 2: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

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
    }, {}], 3: [function (require, module, exports) {
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

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

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
    }, { "./circle-compiled": 1, "./figure-compiled": 2, "./polygon-compiled": 4, "./rectangle-compiled": 5, "./square-compiled": 6, "./triangle-compiled": 7 }], 4: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _figureCompiled = require('./figure-compiled');

        var _figureCompiled2 = _interopRequireDefault(_figureCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./figure-compiled": 2 }], 5: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _polygonCompiled = require('./polygon-compiled');

        var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./polygon-compiled": 4 }], 6: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _rectangleCompiled = require('./rectangle-compiled');

        var _rectangleCompiled2 = _interopRequireDefault(_rectangleCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        var Square = (function (_Rectangle) {
            _inherits(Square, _Rectangle);

            function Square(coordinates) {
                _classCallCheck(this, Square);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(Square).call(this, coordinates));
            }

            return Square;
        })(_rectangleCompiled2.default);

        exports.default = Square;
    }, { "./rectangle-compiled": 5 }], 7: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _polygonCompiled = require('./polygon-compiled');

        var _polygonCompiled2 = _interopRequireDefault(_polygonCompiled);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

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
    }, { "./polygon-compiled": 4 }] }, {}, [3]);

//# sourceMappingURL=packed-compiled.js.map