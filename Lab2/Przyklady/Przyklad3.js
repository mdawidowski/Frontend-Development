var add = function(a, b){
    return a + b; 
};

var divide = function (a) {
    return a(5) / 2;
};

// wywołanie funkcji
console.log(multiply(5,5));

// wyświetlanie funkcji
console.log(add(2, 3, 4) + " " + multiply(2, 3));
console.log(add(2, 3, 4) + multiply(2, 3));

// funkcja jako argument
console.log(multiply(add(2,3),add(2,3)));
console.log(divide(reduce));
// hoisting
function multiply (a, b) {
    return a * b;
}

function reduce (a) {
    return a - 2;
}