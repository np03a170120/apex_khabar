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
    // FIXED HEADER
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $(".header-bottom-menu ").addClass("fixed-header");
        } else {
            $(".header-bottom-menu").removeClass("fixed-header");
        }
    });
    // DROPDOWN SEARCH
    $(document).ready(function() {
        $("#search-btn").click(function() {
            $(".search-box").toggle();
            $(".search-box input[type='text']").focus();
        });
    });

    function colorModePreview(ele) {
        console.log($(ele).prop("checked"));
        if ($(ele).prop("checked") == true) {
            $("html").addClass("dark-mode");
        } else if ($(ele).prop("checked") == false) {
            $("html").removeClass("dark-mode");
        }
    }
    $("#color_mode").on("change", function() {
        colorModePreview(this);
    });
});

// FONT SIZE CHANGER
function fontInc() {
    document.getElementById("fontSize").style.fontSize = "18px";
}

function fontRes() {
    document.getElementById("fontSize").style.fontSize = "16px";
}

function fontDec() {
    document.getElementById("fontSize").style.fontSize = "14px";
}