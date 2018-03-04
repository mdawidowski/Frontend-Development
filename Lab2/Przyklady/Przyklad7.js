function sayKwaKwa(){
    return console.log("Jestem kaczką bo mówię: " + this.kwakwa);
}

var kaczka = {
    kwakwa: "KWA, KWA"
};

var pies = {
    hauhau: "Hau, Hau"
};

sayKwaKwa.apply(kaczka);
sayKwaKwa.apply(pies);

// inaczej
    function dajGlos(zwierze) {
    return console.log("Jestem " + zwierze + " bo mówię: " + this.message);
}

var kaczka2 = {
    message: "KWA, KWA"
};

var pies2 = {
    message: "Hau, Hau"
};

dajGlos.apply(kaczka2, ['kaczka']);
dajGlos.apply(pies2, ['pies']);