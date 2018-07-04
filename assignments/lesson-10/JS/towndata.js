var townDataRequest = new XMLHttpRequest();
var apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
townDataRequest.open('GET', apiURL, true);
townDataRequest.send()
townDataRequest.onload = function() {
    var townData = JSON.parse(townDataRequest.responseText);

    var townList=townData["towns"];

    for (var i=0; i<townList.length; i++){
        var tmotto = townList[i].motto;
        var tyear = townList[i].yearFounded;
        var tpop = townList[i].currentPopulation;
        var train = townList[i].averageRainfall;
        var tevents = "<br>";



        var townname = townList[i].name;

        if (townname == "Franklin" || townname == "Greenville" || townname == "Springfield") {
            if (document.getElementById(townname + "motto") != null){
            document.getElementById(townname + "motto").innerHTML = tmotto;
            document.getElementById(townname + "year").innerHTML = tyear;
            document.getElementById(townname + "pop").innerHTML = tpop;
            document.getElementById(townname + "rain").innerHTML = train;

            if (document.getElementById(townname + "events") != null){
            for (var j=0; j<townList[i].events.length; j++){
                tevents = tevents + townList[i].events[j] + "<br>";


            }

            document.getElementById(townname + "events").innerHTML = tevents;
            }
            }
        }

    }

}
