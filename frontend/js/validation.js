function validateZipcodeForm() {
  var x = document.forms["zipcodeForm"]["zcode"].value;

  if (Number.isInteger(parseInt(x)) == true && x.length == 5) {
    var clientZipcode = document.forms["zipcodeForm"]["zcode"].value;
    console.log("Client Zipcode: " + clientZipcode);

    fetchCurrentWeather("zipcode", clientZipcode, "imperial");

    return false;

  } else {
    alert("zipcode requires only 5 numbers (example: 75508)");
    return false;
  }
}

