interface Person {
    name: string;
    yob: number;
    pesel?: number;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare function sayHello(person: Person): void;
declare let zenek: Student;
declare let ziutek: {
    name: string;
    yob: number;
    pesel: number;
};
declare let myList: Person[];
declare let myTuple: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
}
declare let something: any;
