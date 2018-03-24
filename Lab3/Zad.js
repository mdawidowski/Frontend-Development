
function League(name, clubsQuant, country){
    "use strict";
    this.name = name;
    this.clubsQuant = clubsQuant;
    this.country = country;
    this.clubs = {};
}

League.prototype = {
    showProperties: function (){
        "use strict";
        return "Nazwa ligi: " + this.name + ". Ilość klubów: " + this.clubsQuant + ". Kraj: " + this.country + ".";
    },
    setClubs: function (clubs){
        "use strict";
        this.clubs = clubs;
        return Object.keys(this.clubs).join(", ");
    },
    showScores: function(){
        "use strict";
        clubs = this.clubs;
        var sortable = [];
        for (var score in clubs) {
            sortable.push([score, " " + clubs[score]]);
        }
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });
        return sortable;
    }
};

function Ekstraklasa(name, clubsQuant, country, champions, leasts){
    League.call(this, name, clubsQuant, country);
    this.champions = champions;
    this.leasts = leasts;
}

var clubs = {"Arka Gdynia":37, "Bruk-Bet Nieciecza":25, "Cracovia Kraków":38, "Górnik Zabrze":46, "Jagiellonia Białystok":54,
            "Korona Kielce":41, "Lech Poznań":49, "Lechia Gdańsk":27, "Legia Warszawa":51, "Piast Gliwice":29, "Pogoń Szczecin":28,
            "Sandecja Nowy Sącz":23, "Śląsk Wrocław":30, "Wisła Kraków":43, "Wisła Płock":43, "Zagłębie Lubin":39};
var stadiums = ["Gdynia", "Niecziecza", "Kraków (im. Piłsudskiego)", "Zabrze", "Białystok", "Kielce", "Poznań",
                "Gdańsk", "Warszawa (im. WP)", "Gliwice", "Szczecin", "Wrocław", "Kraków (ul. Reymonta)", "Płock", "Lubin"];
var referees = ["Szymon Marciniak", "Tomasz Kwiatkowski", "Bartosz Frankowski", "Jarosław Przybył"];

Ekstraklasa.prototype = Object.create(League.prototype);
Ekstraklasa.prototype.constructor = Ekstraklasa;

Ekstraklasa.prototype.showChampions = function(){
    var clubs = this.showScores();
    return clubs.slice(0, this.champions);
};

Ekstraklasa.prototype.showLeasts = function(){
    var clubs = this.showScores();
    return clubs.slice(-this.leasts);
}

var PolskaEkstraklasa = new Ekstraklasa("Ekstraklasa", 16, "Polska", 3, 2);

console.log(PolskaEkstraklasa.showProperties());
console.log("Lista klubów w porządzku alfabetycznym: " + PolskaEkstraklasa.setClubs(clubs));
console.log("Tabela punktów " + PolskaEkstraklasa.showScores());
console.log("Miejsca promowane udziałem w europejskich pucharach: " + PolskaEkstraklasa.showChampions());
console.log("Miejsca zagrożone spadkiem do niższej ligi: " + PolskaEkstraklasa.showLeasts());
