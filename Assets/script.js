function addResult() {

    inputCity = document.getElementById("myInput").value;
    historyList = getInfo();
    var searchCity = $("<div>")
    searchCity.attr('id', inputCity)
    searchCity.text(inputCity)
    searchCity.addClass("h4")

    if (historyList.includes(inputCity) === false) {
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style", "display:inline")
    addInfo(inputCity);
};

// add event listner to the search button
document.getElementById("searchBtn").addEventListener("click", addResult);
document.getElementById("searchBtn").addEventListener('click', getResult);

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
function getResult() {

    $(".five-day").empty();
    $(".city").empty()

    inputCity = document.getElementById("myInput").value;
    var countryCode = 'US';
    var cityCode = inputCity;

    var geoLon;
    var geoLat;

    var cityName = $("<h>")
    cityName.addClass("h3")
    var temp = $("<div>")
    var wind = $("<div>")
    var humidity = $("<div>")
    var uvIndex = $("<div>")
    var icon = $("<img>")
    icon.addClass("icon");
    var dateTime = $("<div>")


}