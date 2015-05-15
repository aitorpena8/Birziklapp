var main = null;

var mWidth = null;
var mHeight = null;

var bins = [];




function init() {

    "use strict";

    //    mWidth   = window.innerWidth;
    //    mHeight  = window.innerHeight;
    mWidth = 1280;
    mHeight = 720;
    if (!main) {
        main = new Main();
        main.loadData();
    }
}

var gameStatus = 0;

var GameStatus = {
    GAME_OVER: 0,
    MENU: 1,
    GAME_ONE: 2,
    GAME_TWO: 3,
    INFO: 4
};

var RecycleBins = {
    BLUE: 1,
    YELLOW: 2,
    GREEN: 3,
    BROWN: 4,
    DEFAULT: 5
};


var loaded;









function Main() {

    gameStatus = GameStatus.MENU;

    this.stage = new PIXI.Stage(0xADD6AD, true);
    this.renderer = PIXI.autoDetectRenderer(mWidth, mHeight, null);
    this.renderer.view.style.width = window.innerWidth + "px";
    this.renderer.view.style.height = window.innerHeight + "px";

    document.body.appendChild(this.renderer.view);

    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.top = "0px";
    this.renderer.view.style.left = "0px";

    if (!this.net) {
        this.net = new Net();
    }
    if (!this.config) {
        this.config = new Config();
    }

    if (!this.language) {
        this.language = new Language(this.config, this.net);

    }
    if (!this.data) {
        this.data = new Data(this.config, this.net);
    }
    if (!this.info)
        this.info = new Info();

    if (!this.game) {
        this.game = new Game();
    }
    if (!this.gameOver) {
        this.gameOver = new GameOver();
    }


    this.stage.addChild(this.game);
    this.stage.addChild(this.gameOver);


}


Main.prototype.loadData = function () {
  /*  loaded = 0;*/
    this.language.load();
    this.data.load();
/*
    while (loaded < 3) {
        console.log(loaded)
    }
*/

    if (!this.menu)
        this.menu = new Menu();
    this.stage.addChild(this.menu);

    requestAnimFrame(this.update.bind(this));




};






Main.prototype.update = function () {


    switch (gameStatus) {
    case GameStatus.MENU:
        this.menu.visible = true;
        this.game.visible = false;
        this.gameOver.visible = false;

        break;
    case GameStatus.GAME_ONE:
        this.menu.visible = false;
        this.game.visible = true;
        this.gameOver.visible = false;

        break;
    case GameStatus.GAME_TWO:
        // TODO: Fill if game two when it's done.
        break;
    case GameStatus.GAME_OVER:
        this.menu.visible = false;
        this.game.visible = false;
        this.gameOver.visible = true;
        break;

    case GameStatus.INFO:

        this.menu.visible = false;
        this.game.visible = false;
        this.gameOver.visible = false;
        break;


    }

    this.renderer.render(this.stage);
    requestAnimFrame(this.update.bind(this));
};

//window.onload = init;
document.onready = init;
