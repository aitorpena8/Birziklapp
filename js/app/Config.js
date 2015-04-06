var timeout=5;
var dataURLPrefix='data/';
var trashContainerFileName='trashContainer_min5.json';
var containerTrashFileName='containerTrash_min.json';
var languageFilePrefix='language';
var defaultLanguage='es';

function Config(){
    this.timeout=timeout;
    this.dataURLPrefix=dataURLPrefix;
    this.trashContainerFileName=trashContainerFileName;
    this.containerTrashFileName=containerTrashFileName;
    this.languageFilePrefix=languageFilePrefix;
    this.defaultLanguage=defaultLanguage;

}



Config.constructor=Config;

Config.prototype.getTrashContainerFileURL=function (){
    return dataURLPrefix+trashContainerFileName;

}


Config.prototype.getContainerTrashFileURL=function (){
    return dataURLPrefix+containerTrashFileName;
}


Config.prototype.getLanguageFileURL=function (code){
    return dataURLPrefix+languageFilePrefix+'_'+code+'.json';

}
