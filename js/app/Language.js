function Language(conf,net,func) {
    this.code = navigator.language;
    this.config=conf;
    console.log("navigator.language: " + this.code);
    this.text = {};
    this.net=net;
    this.parseFunc=func;
}
Language.constructor = Language;
var loadDefaultLanguage = function (jqXHR, status, error) {
    this.setCode(this.config.defaultLanguage);
    var url = this.config.getLanguageFileURL(this.code);
    main.net.request(url, false, parseLanguage, null);
};


Language.prototype.load = function () {
    var url = this.config.getLanguageFileURL(this.code);
    this.net.request(url, false, this.parseFunc, loadDefaultLanguage);

};

Language.prototype.setCode = function (cod) {
    this.code = cod;
};



Language.prototype.setLanguageText = function (txt) {
    this.text[this.code] = txt;
};



Language.prototype.getTextObj = function () {
    return this.text[code];
};



Language.prototype.getText = function (key) {
    return this.text[this.code][key];
};
