function z() {
    console.log(this.imie);
}

// var imie <- nie zadziała - undefined
imie = "Ziutek";
z();

function Person(name){
    this.name = name;
}

var ziutek = new Person("Ziutek");
var heniek = new Person("Heniek");

console.log(ziutek.name);
console.log(heniek.name);