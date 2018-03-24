function Shape(x, y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.getX = function () {
  return this.x;
}

Shape.prototype.getY = function () {
  return this.x;
}

Shape.prototype.move = function (deltaX, deltaY) {
  this.x += deltaX;
  this.y += deltaY;
};
var aShape = new Shape(2,1);

console.log(aShape.toString());

console.log(aShape.x);
console.log(aShape.getX());
console.log(aShape.getY());


console.log(aShape.move(2,3));
console.log(aShape.getX());
console.log(aShape.getY());
