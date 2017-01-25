

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackcarn) {
      var carnLoader = new XMLHttpRequest();
      
      carnLoader.addEventListener("load", function () {

        carnivores = JSON.parse(event.target.responseText);
        callbackcarn(carnivores);
      })

      carnLoader.open("GET", "json/carnivores.json");
      carnLoader.send();
    },

    loadHerbivores: function (callbackherb) {
      var herbLoader = new XMLHttpRequest();
      
      herbLoader.addEventListener("load", function() {

        herbivores = JSON.parse(event.target.responseText);

        callbackherb(herbivores);
      })

      herbLoader.open("GET", "json/herbivores.json");
      herbLoader.send();
    }
  }
})();





