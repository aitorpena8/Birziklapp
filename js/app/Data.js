function Data(conf, net, func1, func2) {
    this.config = conf;
    this.net = net;
    this.parseFunc1 = func1;
    this.parseFunc2 = func2;


}

Data.constructor = Data;



Data.prototype.load = function () {
    var trashContainerURL = this.config.getTrashContainerFileURL();
    var containerTrashURL = this.config.getContainerTrashFileURL();
    this.net.request(trashContainerURL, false, this.parseFunc1, errData);
    this.net.request(containerTrashURL, false, this.parseFunc2, errData);

};
