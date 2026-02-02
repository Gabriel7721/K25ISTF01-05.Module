// import Circle from "./circle.js"; // ES6 (Module) thì phải cần khai báo Extension
// import Circle from "./circle";
import Square, { Circle, obj, Oval } from "./circle";
const c = new Circle(1000);
const s = new Square(1000);
Oval();
obj();
c.draw();
