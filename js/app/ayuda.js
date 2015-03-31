var APP = APP || {};
$(document).ready(function () {
    "use strict";
    var searchVal = "";
    var selCont = "0";

    var trashi18nTextArr = [];

    function fillAutoComplete() {
        console.log("fill autocomplete");
        $("#searchTrashById").autocomplete({
            autoFocus: true,
            source: trashi18nTextArr,
            select: function (event, ui) {
                console.log('select');
                searchVal = ui.item.value;
                selCont = $('#selectContainer').val();
                fillTable();
            },


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
                html: '<a   href=#' + alp[i] + ' ' + dis + '>' + alp[i] + '</a>',





            });
            $('#alpIndex ul').append($li);
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
        /*
            function updateTable() {
                var rows = $('#tableTrash tr');
                var i = 0;
                for (var trash in APP.data.trashContainer) {
                    var trashi18nText = APP.language.getText(trash);
                    var containers = APP.data.trashContainer[trash].containers;
                    if (!trashi18nText || trashi18nText.indexOf(searchVal) === -1 || (selCont !== "0" && containers.indexOf(selCont) === -1)) {
                        console.log(rows);
                        $(rows[i]).addClass('hidden');
                    } else {
                        if ($(rows[i]).hasClass('hidden')) {
                            $(rows[i]).removeClass('hidden');

                        }

                    }
                    i++;

                }
            }
        */
    function fillTable() {
        $('#tableTrash').empty();
        trashi18nTextArr = [];
        console.log("fill table searchVal:" + searchVal);
        var currentLetter, oldLetter = '';
        var c = 1;
        for (var trash in APP.data.trashContainer) {
            currentLetter = trash[0];
            var trashi18nText = APP.language.getText(trash);
            var containers = APP.data.trashContainer[trash].containers;
            if (trashi18nText && trashi18nText.indexOf(searchVal) !== -1 && (selCont === "0" || containers.indexOf(selCont) !== -1)) {
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

                if (c % 2 == 0) {
                    $tr.addClass('even');
                } else {
                    $tr.addClass('odd');


                }

                if (currentLetter !== oldLetter) {
                    var $a = $('<a/>', {
                        name: currentLetter,
                        id: currentLetter + 'Ind',

                    });
                    $tr.append($a);
                    oldLetter = currentLetter;
                }
                $('#tableTrash').append($tr);
                c++;
            }

        }


    }
    fillTable();
    fillIndex();
    fillAutoComplete();
    fillSelect();

    $('#searchTrashById').on('keyup', function () {
        searchVal = $('#searchTrashById').val();
        selCont = $('#selectContainer').val();
        fillTable();
    });
    $('#reset').on('click', function () {
        searchVal = "";
        selCont = "0";
        fillTable();
    });
    $('#selectContainer').on('change', function () {
        searchVal = $('#searchTrashById').val();
        selCont = $('#selectContainer').val();
        fillTable();
    });


    $('#alpIndex ul li a').on('click', function () {
            $('#alpIndex ul li a').each(function (idx, el) {
                if ($(el).hasClass('current')) {
                    $(el).removeClass('current');
                }

            });
            $(this).addClass('current');
    });




});
