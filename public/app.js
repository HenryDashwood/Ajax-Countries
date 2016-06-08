window.onload = function() {
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();

  // console.log(request);
  request.open("GET", url);
  request.onload = function() {
    if(request.status === 200) {
      console.log("got the data");
      var jsonString = request.responseText;
      var countries = JSON.parse(jsonString);
      var country = countries[0];
      console.log(country.name);
      console.log(country);
      main(countries);
    }
  }
  request.send(null);

  var main = function(countries) {

    countries.forEach(function(country) {
      appendCountry(country);
    })

    select.onchange = function(countries) {
      var select = document.getElementById('country-list');
      for(country of countries) {
        if(country.name === select.value) {
          console.log(country.name);
          console.log(country.capital);
          console.log(country.population);
        }
      }
    }
  }

  var appendCountry = function(country) {
    var option = document.createElement('option');
    option.innerText = country.name;
    var select = document.getElementById('country-list');
    select.appendChild(option);
  }

}