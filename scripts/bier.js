function getAPIdata2(){

  fetch("https://api.punkapi.com/v2/beers/random")

  // parse to JSON format
  .then(function(response) {
    if(!response.ok) { //hiermee kan checken of iets mis gegaan is in de service
      throw Error(response.statusText);
    }
    return response.json();
  })

  // render weather per day
  .then(function(response) {
      var name = response[0].name;
      var oorsprong = response[0].first_brewed;
      var beschrijving = response[0].description;

      var bierSoort = document.getElementById('APIbier').innerHTML = name + "<br>" + oorsprong + "<br>" + beschrijving;

    console.log(response);
  })

  // catch error
  .catch(function (error) {
    onAPIError(error); //als je de fout gevangen hebt voer je functie onAPIError uit
  });
  }

  // init data stream
  getAPIdata2();
