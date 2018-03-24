var aShape = {
  numbers: [1,2,3,4,5],
  scale: 2,
  move() {
    console.log(this.scale);
    var self = this; // var that = this;
    this.numbers = this.numbers.map(function(element) {
      return element * self.scale;
    })
  }
}

aShape.move();
aShape.numbers.forEach(element => {
  console.log(element);
})
