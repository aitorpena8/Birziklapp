var APP = APP || {};

$(document).ready(function () {
    "use strict";

    function normalizeString(str) {

        var i = str.indexOf("(");
        if (i !== -1) {
            str = str.substr(0, i);
        }
        str = str.trim();
        str = str.toLowerCase();
        str = str.replace(/\s|,/g, "_");
        str = str.replace(/á/g, "a");
        str = str.replace(/é/g, "e");
        str = str.replace(/í/g, "i");
        str = str.replace(/ó/g, "o");
        str = str.replace(/ú/g, "u");
        str = str.replace(/ñ/g, "n");
        str = str.replace(/[.]/g, "");
        return str;
    }

    function normalizeStringArr(arr) {
        var i;
        for (i in arr) {
            arr[i] = normalizeString(arr[i]);
        }
        return arr;
    }


    function parsearCSV(datos) {

        var lines = datos.split('\n');
        var lista = {}, listaC = {}, lang = {};

        var values;
        var n = 0;
        for (var i = 0; i < lines.length; i++) {

            values = lines[i].split(';');
            // console.log(values);

            if (values.length > 1 && values[0] !== "") {
                var trash = values[0].trim();
                var trashN = normalizeString(values[0]);
                if (trashN != "") {
                    lang[trashN] = trash;
                    var elemento = {};
                   // elemento["trash"] = trash;
                    var containersArr = values[1].split("-");
                    if (containersArr.length > 0) {
                        var containersArrN = normalizeStringArr(containersArr);
                        elemento["containers"] = containersArrN;
                        for (var c in containersArrN) {
                            var containerN = containersArrN[c];
                            if (!listaC[containerN]) {
                                listaC[containerN] = [];
                                lang[containerN] = containersArr[c];
                            }

                            listaC[containerN].push(trashN);
                        }
                    }
                    if (values.length > 2) {
                        var expl = values[2].trim();
                        if (expl !== "") {
                            //elemento["expl"] = expl;
                            lang[trashN+"_expl"]=expl;
                        }
                    }
                    lista[trashN] = elemento;
                    n++;

                } else {
                    console.log(values);

                }
            }
        }

        console.log(listaC);
        console.log(Object.keys(lista).length);

        var out1 = JSON.stringify(lista,null,'\t');
        $('#res1').text(utf8_encode(out1));

        var out2 = JSON.stringify(listaC,null,'\t');
        $('#res2').text(out2);

        var out3 = JSON.stringify(lang,null,'\t');
        $('#res3').text(out3);
    }


    $("#cargar").on('click',function(){
        var url=$("#url").val();
    console.log(url)
    APP.net.peticion(url, null, parsearCSV);
    });

});
