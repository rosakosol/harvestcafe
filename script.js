var date = new Date();
var adelaideTime = date.toLocaleDateString('en-us', { timeZone:"Australia/Adelaide", weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric", hour12: false,}); 
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
    check_open();
    display_c();
    
}
// Time variables
var day = adelaideTime[0] + adelaideTime[1] + adelaideTime[2];
var hour = adelaideTime[15] + adelaideTime[16];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Check if public holiday
import Holidays from "date-holidays";
var hd = new Holidays("AU", "SA");
hd.getHolidays(2023);

// Check if the cafe is open
function check_open() {
    // Check if public holiday
    if (hd.isHoliday(date)) {
        console.log("It's a public holiday.");
    }

    // Check weekdays
    if (weekdays.includes(day)) {
        // Cafe closed before 7am and after 3pm
        if (parseInt(hour) < 7 || parseInt(hour) > 15) {
            console.log("Closed.");
        } else {
            console.log("Open.");
        }
    // Check weekends
    } else {
        // Cafe closed before 8am and after 3pm
        if (parseInt(hour) < 8 || parseInt(hour) > 15) {
            console.log("Closed.");
        } else {
            console.log("Open.");
        } 
    }
}

function breakfast_toggle() {
    var element1 = document.getElementById("menu-toggle-breakfast");
    element1.classList.toggle("menu-show");
}

function lunch_toggle() {
    var element2 = document.getElementById("menu-toggle-lunch");
    element2.classList.toggle("menu-show");
}

function drinks_toggle() {
    var element3 = document.getElementById("menu-toggle-drinks");
    element3.classList.toggle("menu-show");
}




