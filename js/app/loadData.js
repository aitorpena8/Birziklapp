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

    function loadLanguage(data) {

        APP.languageText[APP.languageCode] = JSON.parse(data);
        console.log("language loaded");

    }

    function loadData() {

        APP.data = {};

        var rsrcURI = '../rsrc/';
        var containerTrashFile = 'containerTrash.json';
        var trashContainerFile = 'trashContainer.json';

        var containerTrashURI = rsrcURI + containerTrashFile;
        var trashContainerURI = rsrcURI + trashContainerFile;

        var langPrefix = 'language_';


        if (!APP.languageCode) {
            APP.languageCode = 'es';
            APP.languageText = {
                'es': {}
            };

        }
        var langURI = rsrcURI + langPrefix + APP.languageCode + '.json';


        APP.net.peticion(containerTrashURI, false, null, loadContainerTrash);
        console.log("a");
        APP.net.peticion(trashContainerURI, false, null, loadTrashContainer);
        APP.net.peticion(langURI, false, null, loadLanguage);
        console.log("load data end");
    }

    loadData();





});
