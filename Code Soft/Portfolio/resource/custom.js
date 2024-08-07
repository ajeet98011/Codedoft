AOS.init(); // AOS Animation Initialization

// Google Sheets form connect
var scriptURL = "https://script.google.com/macros/s/AKfycbzGjhp5XLyPXgwOjkukzIXoQ4QIUzo5ABkMX8-JNt9GqHyrhHDRXmGmTRV2G6H1emR23A/exec";
var form = document.forms['google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alerts_pts();
            $('#contactModal').modal('hide');
        })
        .catch(error => console.error('Error!', error.message));
});

// Alert of Get In Touch is on body
function alerts_pts() {
    var GIT_alert = document.getElementById("GIT_alert");
    GIT_alert.innerHTML = ("Thanks for contacting us..! We will contact you soon...");
    GIT_alert.classList.add("GIT_alert-JS");
}

// Scroll button
$(document).ready(function() {
    // Hide the button initially
    $("#top-button").hide();

    // Show the button when scrolling down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#top-button").fadeIn();
        } else {
            $("#top-button").fadeOut();
        }
    });

    $("#top-button").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 100);
    });
});