var pojazd = {}

pojazd.module = (function(){
    return{
        sayName: function(name, model){
            return "Samochod: " + name + " " + model;
        }
    };
})();
console.log(pojazd.module.sayName("Fiat","125p"));
