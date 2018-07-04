let params = (new URL(document.location)).searchParams;
let cityid = params.get("cid");


var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/&APPID=a6b4e9e38cba86b84ceb241c1cd9160b" + cityid;
weatherRequest.open('GET', apiURL, true);
weatherRequest.send()
weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);


    console.log(weatherData);

    document.getElementById("currentdescription").innerHTML=weatherData.weather[0].main;
    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
    document.getElementById("humidity").innerHTML=weatherData.main.humidity;
    document.getElementById("windspeed").innerHTML=weatherData.wind.speed;
    document.getElementById("weathericon").src="https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"

}
