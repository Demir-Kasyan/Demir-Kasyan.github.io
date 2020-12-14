var d = new Date();
jQuery(".copyright").text(d.getFullYear());
var et_animation_data = [{
    "class": "et_pb_fullwidth_header_0",
    "style": "zoom",
    "repeat": "once",
    "duration": "2000ms",
    "delay": "0ms",
    "intensity": "4%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}, {
    "class": "et_pb_row_9",
    "style": "zoom",
    "repeat": "once",
    "duration": "1000ms",
    "delay": "0ms",
    "intensity": "5%",
    "starting_opacity": "0%",
    "speed_curve": "ease-in-out"
}];
var et_link_options_data = [{
    "class": "et_pb_blurb_0",
    "url": "",
    "target": "_self"
}, {"class": "et_pb_blurb_1", "url": "", "target": "_self"}];
window.dataLayer = window.dataLayer || [];

function initCounter(data) {
    jQuery("#lynx-counter").find(".percent-value").remove();
    jQuery("#lynx-counter .percent p").append('<span id="count-value">' + data.count + '</span>');
    jQuery("#lynx-counter .percent p").append('<span id="year-value">' + data.year + '</span>');
}


function setNumber(number) {
    jQuery("#lynx-counter").find("#count-value").text(number);
}

function setYear(year) {
    jQuery("#lynx-counter").find("#year-value").fadeOut(500, 'linear', function () {
        jQuery("#lynx-counter").find("#year-value").text(year).fadeIn(500);
    });
}

function animateCount(from, to) {
    if (from < to) {
        var interval = setInterval(function () {
            setNumber(from);
            if (from >= to) {
                clearInterval(interval);
                return;
            }
            from++;
        }, 30);
    }
    if (to < from) {
        var interval = setInterval(function () {
            setNumber(from);
            if (to >= from) {
                clearInterval(interval);
                return;
            }
            from--;
        }, 30);
    }
}


var DIVI = {"item_count": "%d Item", "items_count": "%d Items"};
var et_shortcodes_strings = {"previous": "P\u0159edchoz\u00ed", "next": "N\u00e1sleduj\u00edc\u00ed"};
var et_pb_custom = {
    "ajaxurl": "",
    "images_uri": "",
    "builder_images_uri": "",
    "et_frontend_nonce": "fcdabe7b02",
    "subscription_failed": "Pros\u00edm, zkontrolujte, zda pole n\u00ed\u017ee a ujist\u011bte se, \u017ee jste zadali spr\u00e1vn\u00e9 informace.",
    "et_ab_log_nonce": "ce2af24bb2",
    "fill_message": "Vypl\u0148te pros\u00edm n\u00e1sleduj\u00edc\u00ed pol\u00ed\u010dka:",
    "contact_error_message": "Opravte pros\u00edm n\u00e1sleduj\u00edc\u00ed chyby:",
    "invalid": "Neplatn\u00e1 e-mailov\u00e1 adresa",
    "captcha": "Captcha",
    "prev": "P\u0159edchoz\u00ed",
    "previous": "P\u0159edchoz\u00ed",
    "next": "Dal\u0161\u00ed",
    "wrong_captcha": "V k\u00f3du CAPTCHA jste zadali nespr\u00e1vnou \u010d\u00edslici.",
    "ignore_waypoints": "no",
    "is_divi_theme_used": "1",
    "widget_search_selector": ".widget_search",
    "is_ab_testing_active": "",
    "page_id": "22",
    "unique_test_id": "",
    "ab_bounce_rate": "5",
    "is_cache_plugin_active": "no",
    "is_shortcode_tracking": "",
    "tinymce_uri": ""
};
var et_pb_box_shadow_elements = [];
