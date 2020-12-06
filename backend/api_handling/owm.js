// Main api request handling 
function fetchCurrentWeather(locationType, locationValue, tempUnits='imperial') {
  var key = "f96bdee62cce76bd99da4c5d7db40ec0";
  var url = "";

  if (locationType == "zipcode") {
    url = owm_Zip_URL(key, locationValue);

  } else if (locationType == "cityID") {
    url = owm_Zip_URL(key, locationValue);

  } else if (locationType == "cityName") {
    url = owm_CityName_URL(key, locationValue);

  } else if (locationType == "cityName_stateCode") {
    url = owm_CityName_StateCode_URL(key, locationValue);

  } else if (locationType == "cityName_stateCode_countryCode") {
    url = omw_CityName_StateCode_CountryCode_URL(key, locationValue);

  } else {
    return false;
  
  }

  console.log("api_GET_URL: " + url);

  fetch(url)
  .then(function(resp) { return resp.json() }) // Convert to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // Catch any errors
  });
}

/*
  generate specific GET URL for open weather maps api access

  * ONLY FOR CURRENT WEATHER *
*/
function owm_Zip_URL (key, zipcode, tempUnits) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + key;
  return url;
}

function owm_CityID_URL (key, cityID, tempUnits) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?id=' + cityID  + '&appid=' + key;
  return url;
}

function owm_CityName_URL (key, cityName, tempUnits) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key;
  return url;
}

function owm_CityName_StateCode_URL (key, cityName, stateCode, tempUnits) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + stateCode + '&appid=' + key;
  return url;
}

function omw_CityName_StateCode_CountryCode_URL (key, cityName, stateCode, countryCode, tempUnits) {
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + stateCode + ',' + countryCode + '&appid=' + key;
  return url;
}

/*
function fetchCurrentWeather(zipcode, tempUnits='imperial') {
  var key = "f96bdee62cce76bd99da4c5d7db40ec0";
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + key + '&units' + tempUnits)
  .then(function(resp) { return resp.json() }) // Convert to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // Catch any errors
  });
}
*/