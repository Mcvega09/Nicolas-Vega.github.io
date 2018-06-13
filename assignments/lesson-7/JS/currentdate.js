

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var month = now.getMonth();
var dayOfMonth = now.getDate();
var dayOfWeek = now.getDay();
var dayOfWeekName = weekday[dayOfWeek];
var monthName = months[month];
var fullYear = now.getFullYear();
document.getElementById("currentdate").innerHTML = dayOfWeekName + ", " + dayOfMonth + " " + monthName + " " + fullYear;