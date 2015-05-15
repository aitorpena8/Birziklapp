function Language(conf, net) {
    var code = navigator.language;
    if (code.indexOf("-") != -1)
        code = code.substr(0, code.indexOf("-"));
    this.code = code;
    this.config = conf;
    console.log("navigator.language: " + this.code);
    this.text = {};
    this.net = net;

}

Language.constructor = Language;


var errLang = function (jqXHR, error, status) {
    console.log("errLang() \n jqXHR: " + jqXHR + ", Error: " + error + ", Status: " + status);
};


var parseLanguage = function (dat) {
    //var dat = main.net.req.responseText;
    if (dat) {
        var txt = JSON.parse(dat);
        main.language.setLanguageText(txt);
        loaded++;
        console.log("Language loaded");
        /*   loaded++;
           if (loaded === 3)
               requestAnimFrame(this.update.bind(this));*/

    }
};


Language.prototype.loadDefaultLanguage = function (jqXHR, status, error) {
    this.setCode(this.config.defaultLanguage);
    var url = this.config.getLanguageFileURL(this.code);
    this.net.request(url, parseLanguage, errLang);
};


Language.prototype.load = function () {
    var url = this.config.getLanguageFileURL(this.code);
    this.net.request(url, parseLanguage, errLang);

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
