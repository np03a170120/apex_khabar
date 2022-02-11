$(document).ready(function() {
    // TO THE TOP BUTTON
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1500) {
            $("#myTopbtn").fadeIn();
        } else {
            $("#myTopbtn").fadeOut();
        }
    });
    $("#myTopbtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(document).ready(function() {
    // FIXED HEADER
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $(".header-bottom-menu ").addClass("fixed-header");
        } else {
            $(".header-bottom-menu").removeClass("fixed-header");
        }
    });
});

// DROPDOWN SEARCH
$(document).ready(function() {
    $("#search-btn").click(function() {
        $(".search-box").toggle();
        $(".search-box input[type='text']").focus();
    });
});