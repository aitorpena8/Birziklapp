function Net() {}

Net.constructor = Net;
var defErrFunc=function (jqXHR, status, error){
    console.log("jqXHR: "+jqXHR+", Error: "+error+", Status: "+status)

};

Net.prototype.request = function (url, sFunc, eFunc) {

    $.ajax({
        // la URL para la petición
        url: url,

        async:false,


        // especifica si será una petición POST o GET
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'html',

        //contentType:'application/json; charset=utf-8',
        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (json) {
            //console.log(json);
            sFunc(json);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto jqXHR (extensión de XMLHttpRequest), un texto con el estatus
        // de la petición y un texto con la descripción del error que haya dado el servidor
        error: function (jqXHR, status, error) {
            var errFunc = eFun || defErrFunc;
            eFunc(jqXHR, status, error);
        }

    });


}
