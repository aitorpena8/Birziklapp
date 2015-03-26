var APP = APP || {};

$(document).ready(function () {
    "use strict";
    APP.language = APP.language || {};




    APP.language = (function load() {
        var text = APP.language.text || {};
        var code = APP.language.code;
        var langText={};
        if (!code) {
            APP.language.code = 'es';
            code = 'es';
        }

        function loadLanguage(data) {
            langText = JSON.parse(data);

        }
        var rsrcURI = '../rsrc/';
        var langPrefix = 'language_';

        var langURI = rsrcURI + langPrefix + code + '.json';
        APP.net.peticion(langURI, false, null, loadLanguage);
        text[code] = langText;
        var getText = function (key) {
            var code = APP.language.code;
            return APP.language.text[code][key];
        };

        console.log("i18n loaded");


        return {

            text:text,
            code: code,
            getText: getText,

        };

    })();
});
