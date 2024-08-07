// Initialize AOS Animation
AOS.init();

// Scroll to top button
$(document).ready(function() {
    $("#top-button").hide();
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