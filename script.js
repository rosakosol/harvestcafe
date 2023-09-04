var date = new Date();
var adelaideTime = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}); 
// Removes comma from date
adelaideTime = adelaideTime.split(',').join('');

// Refreshes time every second 
function display_c() {
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}


// Display local Adelaide date and time
window.onload = function displayDate() {
    document.getElementById("date").innerHTML = adelaideTime;
    display_c();
}