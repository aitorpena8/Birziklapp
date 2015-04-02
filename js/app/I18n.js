var APP = APP || {};

$(document).ready(function () {
    "use strict";
    APP.language = {};

    APP.language = (function load() {
        var text = APP.language.text || {};
        var code;


        var setCode=function(cod){
            code=cod;
        };
        var loadLanguage = function (cod) {
            var langPrefix = 'language_';
            var langObj = langPrefix + code;
            try {
                var txt = eval(langObj);
            } catch (e) {
                //Si no existe cargar idioma por defecto
                if (e instanceof ReferenceError) {
                    code = 'es';
                    langObj = langPrefix + code;
                    try {
                        txt = eval(langObj);
                    } catch (e) {

                        if (e instanceof ReferenceError) {
                            console.log('i18n: Error No se ha cargado ningun fichero de idioma');
                            return -1;
                        } else {
                            console.log('i18n: Error desconocido ' + e)
                        }
                    }
                } else {
                    console.log('i18n: Error desconocido ' + e);


                }
            }
            text[code] = txt;
        }

        var getText = function (key) {
            return text[code][key];
        };
        var cod = navigator.language;
        console.log("navigator.language: " + cod);
        setCode(cod);
        loadLanguage(cod);
        console.log("i18n loaded");


        return {

            text: text,
            code: code,
            getText: getText,
            loadLanguage:loadLanguage,
            setCode:setCode

        };

    })();
});
