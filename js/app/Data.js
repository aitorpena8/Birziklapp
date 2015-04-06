function Data() {

}

Data.constructor = Data;



Data.prototype.load = function () {
    var trashContainerURL = main.config.getTrashContainerFileURL();
    var containerTrashURL = main.config.getContainerTrashFileURL();
    main.net.request(trashContainerURL, false, parseTrashContainer, null);
    main.net.request(containerTrashURL, false, parseContainerTrash, null);
}
