var aShape = {
  numbers: [1,2,3,4,5],
  scale: 2,
  move() {
    console.log(this.scale);
    this.numbers = this.numbers.map(element => element * this.scale);
  }
}

aShape.move();
aShape.numbers.forEach(element => {
  console.log(element);
})
