var high = parseFloat(document.getElementById("hightemp").innerHTML);
var low = parseFloat(document.getElementById("lowtemp").innerHTML);
var s = parseFloat(document.getElementById("windspeed").innerHTML);
var t = (high + low) / 2;
var se = Math.pow(s, 0.16);
var f = 35.74 + (0.6215 * t) - (35.75 * se) + (0.4275 * t * se);
var digits = 2;
var multiplier = Math.pow(10, digits);
f = Math.round(f * multiplier) / multiplier;
document.getElementById("windchills").innerHTML = f + "&deg;F";

