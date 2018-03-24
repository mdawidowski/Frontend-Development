class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(delta) {
    this.x += delta;
    this.y += delta;
  }

  moveToZero() {
    this.x = 0;
    this.y = 0;
  }
}
