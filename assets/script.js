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
    "url": "\/rys-ostrovid",
    "target": "_self"
}, {"class": "et_pb_blurb_1", "url": "\/kocka-divoka", "target": "_self"}];
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-144822573-1');
var data = [
    {
        year: 1980,
        count: 15
    },
    {
        year: 1985,
        count: 20
    },
    {
        year: 1990,
        count: 40
    },
    {
        year: 1995,
        count: 100
    },
    {
        year: 1998,
        count: 150
    },
    {
        year: 2000,
        count: 120
    },
    {
        year: 2005,
        count: 100
    },
    {
        year: 2010,
        count: 90
    },
    {
        year: 2015,
        count: 85
    },
    {
        year: 2019,
        count: 80
    }
];
var index = 0;
var duration = 5000;

initCounter(data[index]);

setInterval(function () {
    var from = data[index].count;
    index++
    index = typeof data[index] === 'undefined' ? 0 : index;
    var to = data[index].count;

    animateCount(from, to);
    setYear(data[index].year);

}, duration);

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
    "ajaxurl": "https:\/\/www.rysostrovid.cz\/wp-admin\/admin-ajax.php",
    "images_uri": "https:\/\/www.rysostrovid.cz\/wp-content\/themes\/Divi\/images",
    "builder_images_uri": "https:\/\/www.rysostrovid.cz\/wp-content\/themes\/Divi\/includes\/builder\/images",
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
var _wpmejsSettings = {
    "pluginPath": "\/wp-includes\/js\/mediaelement\/",
    "classPrefix": "mejs-",
    "stretching": "responsive"
};
var mejsL10n = {
    "language": "cs", "strings": {
        "mejs.install-flash": "Pou\u017e\u00edv\u00e1te prohl\u00ed\u017ee\u010d, kter\u00fd nem\u00e1 nainstalovan\u00fd nebo povolen\u00fd Flash Player. Zapn\u011bte Flash Player nebo si st\u00e1hn\u011bte nejnov\u011bj\u0161\u00ed verzi z adresy https:\/\/get.adobe.com\/flashplayer\/",
        "mejs.fullscreen-off": "Zru\u0161it re\u017eim cel\u00e9 obrazovky",
        "mejs.fullscreen-on": "Cel\u00e1 obrazovka",
        "mejs.download-video": "St\u00e1hnout video",
        "mejs.fullscreen": "Cel\u00e1 obrazovka",
        "mejs.time-jump-forward": ["Vp\u0159ed o 1 sekundu", "Vp\u0159ed o %1 sekund"],
        "mejs.loop": "Ovl\u00e1d\u00e1n\u00ed opakov\u00e1n\u00ed",
        "mejs.play": "P\u0159ehr\u00e1t",
        "mejs.pause": "Pozastavit",
        "mejs.close": "Zav\u0159\u00edt",
        "mejs.time-slider": "\u010casov\u00fd posuvn\u00edk",
        "mejs.time-help-text": "Pou\u017eit\u00edm \u0161ipek vlevo\/vpravo se posunete o jednu sekundu, \u0161ipkami nahoru\/dol\u016f se posunete o deset sekund.",
        "mejs.time-skip-back": ["Zp\u011bt on 1 sekundu", "Vr\u00e1tit se zp\u011bt o %1 sekund"],
        "mejs.captions-subtitles": "Titulky",
        "mejs.captions-chapters": "Kapitoly",
        "mejs.none": "Nic",
        "mejs.mute-toggle": "Ovl\u00e1d\u00e1n\u00ed zvuku",
        "mejs.volume-help-text": "Pou\u017eit\u00edm \u0161ipek nahoru\/dol\u016f zv\u00fd\u0161\u00edte nebo sn\u00ed\u017e\u00edte \u00farove\u0148 hlasitosti.",
        "mejs.unmute": "Zapnout zvuk",
        "mejs.mute": "Ztlumit",
        "mejs.volume-slider": "Ovl\u00e1d\u00e1n\u00ed hlasitosti",
        "mejs.video-player": "Video p\u0159ehr\u00e1va\u010d",
        "mejs.audio-player": "Audio p\u0159ehr\u00e1va\u010d",
        "mejs.ad-skip": "P\u0159esko\u010dit reklamu",
        "mejs.ad-skip-info": ["P\u0159esko\u010dit na video budete moci za 1 sekundu", "P\u0159esko\u010dit na video budete moci za %1 sekund"],
        "mejs.source-chooser": "V\u00fdb\u011br zdroje",
        "mejs.stop": "Zastavit",
        "mejs.speed-rate": "Rychlost",
        "mejs.live-broadcast": "\u017div\u011b",
        "mejs.afrikaans": "Afrik\u00e1n\u0161tina",
        "mejs.albanian": "Alb\u00e1n\u0161tina",
        "mejs.arabic": "Arab\u0161tina",
        "mejs.belarusian": "B\u011bloru\u0161tina",
        "mejs.bulgarian": "Bulhar\u0161tina",
        "mejs.catalan": "Katal\u00e1n\u0161tina",
        "mejs.chinese": "\u010c\u00edn\u0161tina",
        "mejs.chinese-simplified": "\u010c\u00edn\u0161tina (zjednodu\u0161en\u00e1)",
        "mejs.chinese-traditional": "\u010c\u00edn\u0161tina (tradi\u010dn\u00ed)",
        "mejs.croatian": "Chorvat\u0161tina",
        "mejs.czech": "\u010ce\u0161tina",
        "mejs.danish": "D\u00e1n\u0161tina",
        "mejs.dutch": "Holand\u0161tina",
        "mejs.english": "Angli\u010dtina",
        "mejs.estonian": "Eston\u0161tina",
        "mejs.filipino": "Filip\u00edn\u0161tina",
        "mejs.finnish": "Dokon\u010dit",
        "mejs.french": "Francou\u017e\u0161tina",
        "mejs.galician": "Galicij\u0161tina",
        "mejs.german": "N\u011bm\u010dina",
        "mejs.greek": "\u0158e\u010dtina",
        "mejs.haitian-creole": "Haitsk\u00e1 kreol\u0161tina",
        "mejs.hebrew": "Hebrej\u0161tina",
        "mejs.hindi": "Hind\u0161tina",
        "mejs.hungarian": "Ma\u010far\u0161tina",
        "mejs.icelandic": "Island\u0161tina",
        "mejs.indonesian": "Indon\u00e9\u0161tina",
        "mejs.irish": "Ir\u0161tina",
        "mejs.italian": "Ital\u0161tina",
        "mejs.japanese": "Japon\u0161tina",
        "mejs.korean": "Korej\u0161tina",
        "mejs.latvian": "Loty\u0161tina",
        "mejs.lithuanian": "Litev\u0161tina",
        "mejs.macedonian": "Makedon\u0161tina",
        "mejs.malay": "Malaj\u0161tina",
        "mejs.maltese": "Malt\u0161tina",
        "mejs.norwegian": "Nor\u0161tina",
        "mejs.persian": "Per\u0161tina",
        "mejs.polish": "Pol\u0161tina",
        "mejs.portuguese": "Portugal\u0161tina",
        "mejs.romanian": "Rumun\u0161tina",
        "mejs.russian": "Ru\u0161tina",
        "mejs.serbian": "Srb\u0161tina",
        "mejs.slovak": "Sloven\u0161tina",
        "mejs.slovenian": "Slovin\u0161tina",
        "mejs.spanish": "\u0160pan\u011bl\u0161tina",
        "mejs.swahili": "Svahil\u0161tina",
        "mejs.swedish": "\u0160v\u00e9d\u0161tina",
        "mejs.tagalog": "Tagal\u0161tina",
        "mejs.thai": "Thaj\u0161tina",
        "mejs.turkish": "Ture\u010dtina",
        "mejs.ukrainian": "Ukrajin\u0161tina",
        "mejs.vietnamese": "Vietnam\u0161tina",
        "mejs.welsh": "Vel\u0161tina",
        "mejs.yiddish": "Jidi\u0161"
    }
};
