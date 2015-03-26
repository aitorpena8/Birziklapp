var APP = APP || {};
$(document).ready(function () {
    "use strict";


    function fillAutoComplete() {
        console.log("fill autocomplete");

        var availableTags = Object.keys(APP.data.trashContainer);

        $("#searchTrashById").autocomplete({
            source: availableTags
        });
    }

    function updateTable(e) {
        console.log("change");


    }

    function fillIndex() {
        var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        for (var i in alp) {

            var $li = $('<li/>', {
                html: '<a href=#' + alp[i] + '>' + alp[i] + '</a>'
            });

            $('#alpIndex').append($li);


        }

    }

    function fillSelect() {
        console.log("fill select");





        for (var container in APP.data.containerTrash) {



            var $tr = $('<option/>', {
                html: container
            });

            $('#selectContainer').append($tr);
        }


    }

    function fillTable() {
        console.log("fill table");
        var currentLetter, oldLetter;


        var c = 0;
        for (var trash in APP.data.trashContainer) {
            //for (var i=0; i<APP.data.trashContainer.length;i++) {

            if (c === 0) {
                oldLetter = trash[0];

            }

            currentLetter = trash[0];



            var $tr = $('<tr/>', {
                html: '<td>' + trash + '</td><td>' + APP.data.trashContainer[trash].containers.join(',') + '</td>'
            });


            if (currentLetter !== oldLetter) {
                var $a = $('<a/>', {
                    name: currentLetter
                });
                $tr.append($a);
                oldLetter = currentLetter;
            }

            $('#tableTrash').append($tr);
            c++;
        }


    }
    fillTable();
    fillIndex();
    fillAutoComplete();
    fillSelect();

    $('#searchTrashById').on('change', updateTable);




});
