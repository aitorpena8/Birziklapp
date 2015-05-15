function Data(conf, net) {
    console.log("a");
    this.config = conf;
    this.net = net;
}

Data.constructor = Data;

var errData = function (jqXHR, error, status) {
    console.log("errData() \n jqXHR: " + jqXHR + ", Error: " + error + ", Status: " + status);

};

var parseTrashContainer = function (dat) {
    if (dat) {
        var obj = JSON.parse(dat);
        main.data.trashContainer = obj;
        loaded++;
        console.log("Trash Container loaded");


    }
};


var parseContainerTrash = function (dat) {
    if (dat) {
        var obj = JSON.parse(dat);
        main.data.containerTrash = obj;
        loaded++;
        console.log("Container Trash loaded");

    }
};



Data.prototype.load = function () {
    var trashContainerURL = this.config.getTrashContainerFileURL();
    var containerTrashURL = this.config.getContainerTrashFileURL();
    this.net.request(trashContainerURL, parseTrashContainer, errData);
    this.net.request(containerTrashURL, parseContainerTrash, errData);

};




