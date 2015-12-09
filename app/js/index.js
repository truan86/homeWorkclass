import Figure from './figure-compiled';
import Polygon from './polygon-compiled';
import Rectangle from './rectangle-compiled';
import Square from './square-compiled';
import Triangle from './triangle-compiled';
import Circle from './circle-compiled';

//figure
let coordinatesPolygon = [[0, 0], [50, 0], [50, 50], [35, 55], [0, 50]];
let figure = new Figure(coordinatesPolygon);
console.log('coordenats X = ' + figure.x + '  coordenats Y = ' + figure.y);
//Polygon
let polygon = new Polygon(coordinatesPolygon);
console.log('perimetr = ' + polygon.perimetr + '\n peak ' + polygon.peak);
//Rectangle
let coordinatesRectangle = [[0, 0], [50, 0], [50, 50], [0, 50]];
let rectangle = new Rectangle(coordinatesRectangle);
console.log('width = ' + rectangle.side1 + '\n height = ' + rectangle.side2 + '\n area = ' + rectangle.area+'\n perimetr'+rectangle.perimetr);
//Triangle
let coordinatesTriangle = [[0, 0], [50, 0], [35, 50]];
let triangle = new Triangle(coordinatesTriangle);
console.log('area = ' + Math.round(triangle.area)+'\n perimetr = '+triangle.perimetr);
//Circle
let coordinatesCircle = [[0, 0], [0, 25]];
let circle = new Circle(coordinatesCircle);
console.log('radius = ' + circle.radius+'\n area = ' + circle.area+'\n perimetr = ' + circle.perimetr);
