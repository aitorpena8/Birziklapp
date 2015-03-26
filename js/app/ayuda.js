var APP = APP || {};
$(document).ready(function () {
    "use strict";
    var searchVal = "";
    var selCont = "0";

    var trashi18nTextArr = [];

    function updateTable(e) {
        searchVal = $('#searchTrashById').val();
        //console.log(searchVal);
        selCont = $('#selectContainer').val();
        $('#tableTrash').empty();
        fillTable();
        $('#alpIndex').empty();
        fillIndex();


    }

    function fillAutoComplete() {
        console.log("fill autocomplete");


        $("#searchTrashById").autocomplete({
            source: trashi18nTextArr,
            select: function (event, ui) {
                console.log('select');
                searchVal = ui.item.value;
                console.log(searchVal);
                updateTable();
            }
        });
    }



    function fillIndex() {
        var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        for (var i in alp) {
            var anchor = document.getElementById(alp[i] + 'Ind');
            var dis = ''
            if (!anchor)
                dis = "disabled='disabled'";
            var $li = $('<li/>', {
                html: '<a   href=#' + alp[i] + ' ' + dis + '  disabled= "disabled">' + alp[i] + '</a>',

            });
            $('#alpIndex').append($li);


        }

    }

    function fillSelect() {
        console.log("fill select");
        for (var container in APP.data.containerTrash) {



            var $tr = $('<option/>', {
                html: APP.language.getText(container),
                value: container
            });

            $('#selectContainer').append($tr);
        }
    }

    function fillTable() {
        console.log("fill table");
        var currentLetter, oldLetter = '';


        var c = 0;
        for (var trash in APP.data.trashContainer) {
            //for (var i=0; i<APP.data.trashContainer.length;i++) {

            /*   if (c === 0) {
                   oldLetter = trash[0];
               }*/



            currentLetter = trash[0];
            var trashi18nText = APP.language.getText(trash);
            var containers = APP.data.trashContainer[trash].containers;


            if (trashi18nText.indexOf(searchVal) !== -1 && (selCont === "0" || containers.indexOf(selCont) !== -1)) {



                var containersText = '';
                var n = 0
                for (var i in containers) {
                    var container = containers[i];
                    var str = APP.language.getText(container);
                    if (n === 0)
                        containersText += str;
                    else {
                        containersText += ',' + str;

                    }
                    n++;

                }

                trashi18nTextArr.push(trashi18nText);

                var $tr = $('<tr/>', {
                    html: '<td>' + trashi18nText + '</td><td>' + containersText + '</td>'
                });


                if (currentLetter !== oldLetter) {
                    var $a = $('<a/>', {
                        name: currentLetter,
                        id: currentLetter + 'Ind'
                    });
                    $tr.append($a);
                    oldLetter = currentLetter;
                }

                $('#tableTrash').append($tr);
            }
            c++;
        }


    }
    fillTable();
    fillIndex();
    fillAutoComplete();
    fillSelect();

    $('#searchTrashById').on('keyup', updateTable);
    $('#searchTrashById').on('change', updateTable);
    $('#selectContainer').on('change', updateTable);





});
