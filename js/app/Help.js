   var searchVal = "";
   var selCont = "0";

   function Info() {

       this.createMainDiv();
       this.mainDiv = $divWrapper;
   }
   Info.constructor = Info;

   Info.prototype.createMainDiv = function () {
       $divWrapper = $('<div/>', {
           id: 'wrapper'
       });
       var $header = $('<header/>', {
           class: 'searchHeader'
       });
       var $form = $('<form/>', {
           name: 'searchTrash'
       });
       var $divWidget = $('<div/>', {
           class: 'ui-widget'
       });
       var $searchTrash = $('<input/>', {
           type: "text",
           name: "searchTrashById",
           id: "searchTrashById",
           placeholder: "Buscar"
       });
       $divWidget.append($searchTrash);
       $form.append($divWidget);
       console.log("*")
       var $select = $('<select/>', {
           id: "selectContainer",
           name: "selectContainer"
       });
       var $opt = $('<option/>', {
           value: "0",
           html: "Contenedor"
       });
       $select.append($opt);
       $form.append($select);
       var $reset = $('<input/>', {
           type: "reset",
           id: "reset",
           value: "Borrar"

       });
       $form.append($reset);
       $header.append($form);
       $divWrapper.append($header);
       var $nav = $('<nav/>', {
           id: "alpIndex"
       });
       var $ul = $('<ul/>')
       $nav.append($ul);
       $divWrapper.append($nav);
       var $tableSection = $('<section/>', {
           id: "tableTrashSection"
       });
       var $table = $('<table/>', {
           id: "tableTrash",
           name: "tableTrash"
       });
       var $tbody = $('<tbody/>');
       $table.append($tbody);
       $tableSection.append($table);
       $divWrapper.append($nav);
       $divWrapper.append($tableSection);
       console.log("**");
       // $(document).append($divWrapper);
   }


   /*
   var language = new Language(config, net, parseLanguage);
   data.load();
   language.load();
   */

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


   function getImgURL(container) {

       var imgPrefix = "resources/images/sprites/containers/";
       var imgSub = "_256.png"

       var color;

       switch (container) {
       case "vidrio":
           color = "green";
           break;
       case "contenedor_de_organico":
           color = "brown";
           break;


       case "papel_y_carton":
           var color = "blue";
           break;


       case "plastico":
           color = "yellow";
           break;

       default:
           color = "default";
       }

       var imgSrc = imgPrefix + color + imgSub;
       return imgSrc;


   }

   function fillSelect() {
           console.log("fill select");
           for (var container in main.data.containerTrash) {
               var $opt = $('<option/>', {
                   html: main.language.getText(container), //"<img src='" + getImgURL(container) + "'/>",
                   value: container,
               });

               $('#selectContainer').append($opt);
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
       for (var trash in main.data.trashContainer) {
           currentLetter = trash[0];
           var trashi18nText = main.language.getText(trash);
           var containers = main.data.trashContainer[trash].containers;
           if (trashi18nText && trashi18nText.indexOf(searchVal) !== -1 && (selCont === "0" || containers.indexOf(selCont) !== -1)) {
               var containersText = '';
               var n = 0

               for (var i in containers) {
                   var img;
                   var container = containers[i];

                   var str = main.language.getText(container);

                   img = "<img  class='containerIcon' src='" + getImgURL(container) + "' title='" + str + "'/>";
                   containersText += img;

                   /*
                       if (n === 0){
                           containersText += str;


                       }
                       else {
                           containersText += ',' + str;

                       }
                       n++;
                       */

               }
               trashi18nTextArr.push(trashi18nText);
               var $tr = $('<tr/>', {});

               var $td1 = $('<td/>', {
                   html: trashi18nText

               });

               var $td2 = $('<td/>', {
                   html: containersText,
                   class: 'center'

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

                   $td1.append($a);
                   //$tr.append($a);
                   oldLetter = currentLetter;
               }

               $tr.append($td1);
               $tr.append($td2);
               $('#tableTrash').append($tr);
               c++;
           }

       }


   }

   Info.prototype.load = function () {
       $("canvas").hide();
       $("body").append(this.mainDiv);
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

   };
