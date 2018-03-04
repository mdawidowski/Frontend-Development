lib = (function (){
    var priv1 = 0;
    var priv2 = "Hello";

    return {
        message: priv2 + "World",
        counter: function(){
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
    };
})();

console.log(lib.sayHello("Ziutek"));