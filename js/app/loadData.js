var APP = APP || {};

$(document).ready(function () {
    "use strict";

    function loadContainerTrash(data) {
        APP.data.containerTrash = {};
        APP.data.containerTrash = JSON.parse(data);
        console.log("containerTrash loaded");

    }


    function loadTrashContainer(data) {
        APP.data.trashContainer = {};
        APP.data.trashContainer = JSON.parse(data);
        console.log("trashContainer loaded");

    }



    function loadData() {

        APP.data = {};

        var rsrcURI = '../rsrc/';
        var containerTrashFile = 'containerTrash.json';
        var trashContainerFile = 'trashContainer.json';

        var containerTrashURI = rsrcURI + containerTrashFile;
        var trashContainerURI = rsrcURI + trashContainerFile;

        var langPrefix = 'language_';

        APP.language = APP.language || {};
        if (!APP.language.code) {
            APP.language.code = 'es';
            APP.language.text = {
                'es': {}
            };

        }
        var langURI = rsrcURI + langPrefix + APP.languageCode + '.json';
        APP.net.peticion(containerTrashURI, false, null, loadContainerTrash);
        console.log("a");
        APP.net.peticion(trashContainerURI, false, null, loadTrashContainer);
        console.log("load data end");
    }

    loadData();
});
