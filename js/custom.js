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

$(window).on("load", function() {
    $("#myModal").modal("show");
});

/*! js-cookie v3.0.0-beta.3 | MIT */
!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ?
        (module.exports = t()) :
        "function" == typeof define && define.amd ?
        define(t) :
        ((e = e || self),
            (function() {
                var n = e.Cookies,
                    r = (e.Cookies = t());
                r.noConflict = function() {
                    return (e.Cookies = n), r;
                };
            })());
})(this, function() {
    "use strict";
    var e = {
        read: function(e) {
            return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(e) {
            return encodeURIComponent(e).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent
            );
        },
    };

    function t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) e[r] = n[r];
        }
        return e;
    }
    return (function n(r, o) {
        function i(e, n, i) {
            if ("undefined" != typeof document) {
                "number" == typeof(i = t({}, o, i)).expires &&
                    (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                    i.expires && (i.expires = i.expires.toUTCString()),
                    (n = r.write(n, e)),
                    (e = encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/[()]/g, escape));
                var c = "";
                for (var u in i)
                    i[u] &&
                    ((c += "; " + u), !0 !== i[u] && (c += "=" + i[u].split(";")[0]));
                return (document.cookie = e + "=" + n + c);
            }
        }
        return Object.create({
            set: i,
            get: function(t) {
                if ("undefined" != typeof document && (!arguments.length || t)) {
                    for (
                        var n = document.cookie ? document.cookie.split("; ") : [],
                            o = {},
                            i = 0; i < n.length; i++
                    ) {
                        var c = n[i].split("="),
                            u = c.slice(1).join("=");
                        '"' === u[0] && (u = u.slice(1, -1));
                        try {
                            var f = e.read(c[0]);
                            if (((o[f] = r.read(u, f)), t === f)) break;
                        } catch (e) {}
                    }
                    return t ? o[t] : o;
                }
            },
            remove: function(e, n) {
                i(e, "", t({}, n, { expires: -1 }));
            },
            withAttributes: function(e) {
                return n(this.converter, t({}, this.attributes, e));
            },
            withConverter: function(e) {
                return n(t({}, this.converter, e), this.attributes);
            },
        }, {
            attributes: { value: Object.freeze(o) },
            converter: { value: Object.freeze(r) },
        });
    })(e, { path: "/" });
});

//Darkmode
let DarkMode = false;

function toggleDarkMode() {
    var button = document.getElementById("darkButton");
    var element = document.body;
    var modal_content = document.getElementById("myModal");

    element.classList.toggle("dark-mode");
    DarkMode = !DarkMode;

    button.classList.toggle("lightButton");
    console.log("Dark mode: " + DarkMode);
    if (DarkMode) {
        Cookies.set("Darkmode", "An");
        document.getElementById("darkButton").innerHTML = "Darkmode: On";
        modal_content.classList.add("light-modal");
    } else {
        Cookies.remove("Darkmode");
        document.getElementById("darkButton").innerHTML = "Darkmode: Off";
    }
}

let keyPress = 68; //"D" has been pressed
window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
    if (key.keyCode === keyPress) {
        toggleDarkMode();
    }
}

var DarkCookie = Cookies.get("Darkmode");
if (DarkCookie == "An") {
    CookieDarkMode = true;
    Darkmode = true;
    toggleDarkMode();
}