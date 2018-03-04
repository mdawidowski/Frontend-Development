var counter = function(){
    var i = 0;
    return function() {
        return ++i;
    };
};

var c = counter();

c();
c();
c();

var d = counter();

d();
d();

console.log(c());
console.log(d());

// trochę inaczej
var count = function () {
    var i = 0;
    return function () {
        return ++i;
    };
}();

count();
count();

console.log("Count = "  + count());

// Global Scope

var counter = function () {
    i = 0;
    return function () {
        return ++i;
    };
};

var c = counter();
var d = counter();

c();
c();
c();

d();
d();

console.log(c());
console.log(d());
