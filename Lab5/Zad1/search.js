// Zad1
// Poukładać i zwizualizować wyniki z wyszukiwania WikiSearch

var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
  return q.val();
}).switchMap(function(x) {
  return searchWikipedia(x);
}).do
  (function(x) {
    console.log(x);
  }).subscribe(function(x) {
    for (var i = 0; i < x[1].length; i++) {
      x[1][i] = `- <a href="${x[3][i]}"> ${x[1][i]} </a> <br>`
    }
    $('#results').html(x[1]);
  });

function searchWikipedia(term) {
  return $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }

  }).promise();
}
