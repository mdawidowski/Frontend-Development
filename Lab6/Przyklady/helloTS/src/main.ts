interface Person {
  name: string;
  yob: number;
  pesel?: number;
}

class Student {
  constructor(public name: string, public yob: number) {
    this.name = name;
    this.yob = yob;
  }
}
function sayHello(person: Person) {
  console.log('Hello ' + person.name)
}

let zenek = new Student('Zenon', 2006)
console.log(zenek.name)
let ziutek = { name: 'Ziutek', yob:2005, pesel:123}

let myList: Person[] = [ziutek, zenek]
let myTuple: [string, number] = ["Fiat", 1998]

console.log(myTuple[0])
sayHello(ziutek)
sayHello(zenek)

enum Color {Red, Green, Blue}
console.log(Color.Blue)

let something: any = 5
something = "Hello"
something = false
console.log(typeof(something))
