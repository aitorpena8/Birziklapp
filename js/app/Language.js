function Language() {
    this.code = navigator.language;
    console.log("navigator.language: " + this.code);
    this.text = {};
}
Language.constructor = Language;
var loadDefaultLanguage = function (jqXHR, status, error) {
    this.setCode(main.config.defaultLanguage);
    var url = main.config.getLanguageFileURL(this.code);
    main.net.request(url, false, parseLanguage, null);
};


Language.prototype.load = function () {
    var url = main.config.getLanguageFileURL(this.code);
    main.net.request(url, false, parseLanguage, loadDefaultLanguage);

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
