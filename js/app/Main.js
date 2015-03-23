var main    = null;

var mWidth   = null;
var mHeight  = null;

function init()
{
    mWidth   = window.innerWidth;
    mHeight  = window.innerHeight;
    if(main === null)
        main = new Main();
}

var gameStatus = 0;

var GameStatus =
{
    MENU        : 1,
    GAME_ONE    : 2,
    GAME_TWO    : 3
};

var RecycleBins =
{
    BLUE        : 0,
    YELLOW      : 1,
    GREEN       : 2,
    BROWN       : 3,
    DEFAULT     : 4
};

function Main()
{
    gameStatus      = GameStatus.MENU;

    this.stage      = new PIXI.Stage(0x00BA1C, true);
    this.renderer   = PIXI.autoDetectRenderer(mWidth, mHeight, null);

    document.body.appendChild(this.renderer.view);

    this.renderer.view.style.position      = "absolute";
	this.renderer.view.style.top           = "0px";
	this.renderer.view.style.left          = "0px";

    this.menu = new Menu(this.stage);
    this.game = new Game();
    this.stage.addChild(this.menu);

    requestAnimFrame(this.update.bind(this));
}

Main.prototype.update = function()
{
    switch(gameStatus)
    {
        case GameStatus.MENU:
            this.menu.visible = true;
            this.game.visible = false;
            break;
        case GameStatus.GAME_ONE:
            this.menu.visible = false;
            this.game.visible = true;
            break;
        case GameStatus.GAME_TWO:
            break;
    }

    this.renderer.render(this.stage);
    requestAnimFrame(this.update.bind(this));
};

window.onload = init;
