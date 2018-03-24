var evenPredicate = v => v % 2 === 0;
var evens = [1,2,3,4,5,6].filter(evenPredicate);
evens.forEach(v => console.log(v));

var aShape = {
  x: 4,
  y: 3,
  move: delta => this.x += delta
}

aShape.move(5);
console.log(aShape.x);
