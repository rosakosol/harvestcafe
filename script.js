var date = new Date();
var adelaideTime = date.toLocaleDateString('en-us', { timeZone:"Australia/Adelaide", weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}); 
// Removes comma from date
adelaideTime = adelaideTime.split(',').join('');

// Refreshes time every second 
function display_c() {
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_c()',refresh)
}


// Display local Adelaide date and time
window.onload = function displayDate() {
    document.getElementById("date").innerHTML = adelaideTime;
    check_time();
    display_c();
    
}

// Loop through the entire time/date string to get the time.
function check_time() {
    if (parseInt(adelaideTime[16]) >= 5 || parseInt(adelaideTime[16]) < 12 ) {
        console.log("Closed.");
    }
}


// If the time is outside of business hours, display CLOSED. 
