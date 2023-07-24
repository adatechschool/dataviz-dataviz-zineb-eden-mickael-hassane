var swapiModule = (function () {
    // Base URL for the Star Wars API
    var rootURL = "https://swapi.dev/api/";
  
    // Utility function for making HTTP requests
    function request(url, cb) {
      return fetch(url)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (typeof cb === "function") {
            cb(data);
          }
  
          return data;
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  
    // Function to get general information about available resources
    function getResources(cb) {
      return request(rootURL, cb);
    }
  
    // Helper function to generate request function for singular resources
    function singularRequestGenerator(path) {
      return function (id, cb) {
        return request(rootURL + path + "/" + id + "/", cb);
      };
    }
  
    // Helper function to generate request function for plural resources
    function pluralRequestGenerator(path) {
      return function () {
        let queryObject = undefined;
        let cb = undefined;
  
        if (arguments.length > 1) {
          queryObject = arguments[0];
          cb = arguments[1];
        } else if (arguments[0]) {
          // If given exactly one argument
          if (typeof arguments[0] === "function") {
            cb = arguments[0];
            queryObject = null;
          } else {
            cb = null;
            queryObject = arguments[0];
          }
        }
  
        if (queryObject) {
          // If query parameters are provided, append them to the URL
          let searchParams = new URLSearchParams();
          for (let key of Object.keys(queryObject)) {
            let value = queryObject[key];
            searchParams.append(key, value);
          }
          return request(rootURL + path + "/?" + searchParams.toString(), cb);
        }
  
        // If no query parameters, simply fetch the resource list
        return request(rootURL + path + "/", cb);
      };
    }
  
    // Module's public interface: functions for interacting with SWAPI resources
    return {
      getResources: getResources,
      getPerson: singularRequestGenerator("people"),
      getPeople: pluralRequestGenerator("people"),
      getFilm: singularRequestGenerator("films"),
      getFilms: pluralRequestGenerator("films"),
      getPlanet: singularRequestGenerator("planets"),
      getPlanets: pluralRequestGenerator("planets"),
      getSpecies: singularRequestGenerator("species"),
      getAllSpecies: pluralRequestGenerator("species"),
      getStarship: singularRequestGenerator("starships"),
      getStarships: pluralRequestGenerator("starships"),
      getVehicle: singularRequestGenerator("vehicles"),
      getVehicles: pluralRequestGenerator("vehicles"),
    };
  })();



  // Liste de 10 planètes que vous souhaitez vérifier dans l'API
const planetNamesToCheck = [
    "Tatooine",   //  planet/1
    "Felucia",    //  planet/17
    "Geonosis",   //  planet/11
    "Hoth",       //  planet/4
    "Mustafar",   //  planet/13
    "Bespin",     //  planet/6
    "Endor",      //  planet/7
    "Naboo",      //  planet/8
    "Coruscant",  //  planet/9
    "Scarif",     //  planet/44
  ];