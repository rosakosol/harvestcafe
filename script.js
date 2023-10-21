var date = new Date();
var adelaideTime = date.toLocaleDateString('en-us', { timeZone:"Australia/Adelaide", weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric", hour12: false,}); 
// Removes comma from date
adelaideTime = adelaideTime.split(',').join('');

// Refreshes time every second 
function display_c() {
    var refresh=10000; // Refresh rate in milli seconds
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
var hour = adelaideTime[16] + adelaideTime[17];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// Adelaide public holidays 2023
var adelaideDate = date.toLocaleDateString('en-us', {timeZone:"Australia/Adelaide", year:"numeric", month:"short", day:"numeric"});
const adelaidePublicHolidays = [
"Jan 1, 2023", // New Year's Day
"Jan 2, 2023", // New Year's Day (Additional Day)
"Jan 26, 2023", // Australia Day
"Mar 13, 2023", // Adelaide Cup Day
"Apr 7, 2023", // Good Friday
"Apr 8, 2023", // Easter Saturday
"Apr 10, 2023", // Easter Monday
"Apr 25, 2023", // Anzac Day
"Jun 12, 2023", // King's Birthday
"Oct 2, 2023", // Labour Day
"Dec 24, 2023", // Christmas Eve
"Dec 25, 2023", // Christmas Day
"Dec 26, 2023", // Boxing Day
"Dec 31, 2023",]; // New Year's Eve

// Check if the cafe is open
function check_open() {
    var openSign = document.getElementById("open-sign");
    var closedSign = document.getElementById("closed-sign");
    // Check if public holiday
    if (adelaidePublicHolidays.includes(adelaideDate)) {
        console.log("Closed on public holidays.");
        closedSign.classList.toggle("active");
    }
    // Check weekdays
    if (weekdays.includes(day)) {
        // Cafe closed before 7am and after 3pm
        if (parseInt(hour) < 7 || parseInt(hour) > 15) {
            console.log("Closed.");
            closedSign.classList.toggle("active");
        } else {
            console.log("Open.");
            openSign.classList.toggle("active");
        }
    // Check weekends
    } else {
        // Cafe closed before 8am and after 3pm
        if (parseInt(hour) < 8 || parseInt(hour) > 15) {
            console.log(hour);
            console.log("Closed.");
            closedSign.classList.toggle("active");
        } else {
            console.log("Open.");
            openSign.classList.toggle("active");
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


// Close slide-out mobile menu when menu link is clicked
function menu_toggle() {
    var menu = document.getElementById("menu-check");
    var links = document.getElementsByClassName("nav-links");
    
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', () => {
            menu.checked = false;
        })
    }
}


