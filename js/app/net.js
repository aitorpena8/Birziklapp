var APP = APP || {};
$(document).ready(function () {
    "use strict";
    APP.net = (function () {
        console.log("net cargado");

        var peticion = function(url,async,cnt,cb) {
            (cnt !== null || cnt !== 0) ? cnt : 1 ;
            $.ajax({
                url: url,
                async: async,
                type: 'POST',
                dataType: 'text',
                success: function (json) {
//                    console.log(json);
//                    console.log("callback:" + cb);
                    cb(json);
                },


                error: function (jqXHR, status, error) {
                    console.error('Disculpe, existió un problema');
                }


            });
        };

        return{
            peticion : peticion
        };

    })();
});

