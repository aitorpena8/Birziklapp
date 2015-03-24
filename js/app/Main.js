var main    = null;

var mWidth   = null;
var mHeight  = null;

var bins = [];

function init()
{
    mWidth   = window.innerWidth;
    mHeight  = window.innerHeight;
    if(!main)
        main = new Main();
}

var gameStatus = 0;

var GameStatus =
{
    GAME_OVER   : 0,
    MENU        : 1,
    GAME_ONE    : 2,
    GAME_TWO    : 3
};

var RecycleBins =
{
    BLUE        : 1,
    YELLOW      : 2,
    GREEN       : 3,
    BROWN       : 4,
    DEFAULT     : 5
};

function Main()
{
    gameStatus      = GameStatus.MENU;

    this.stage      = new PIXI.Stage(0xADD6AD, true);
    this.renderer   = PIXI.autoDetectRenderer(mWidth, mHeight, null);

    document.body.appendChild(this.renderer.view);

    this.renderer.view.style.position      = "absolute";
	this.renderer.view.style.top           = "0px";
	this.renderer.view.style.left          = "0px";

    if(!this.menu)
        this.menu       = new Menu();
    if(!this.game)
        this.game       = new Game();
    if(!this.gameOver)
        this.gameOver   = new GameOver();

    this.stage.addChild(this.menu);
    this.stage.addChild(this.game);
    this.stage.addChild(this.gameOver);

    requestAnimFrame(this.update.bind(this));
}

Main.prototype.update = function()
{
    switch(gameStatus)
    {
        case GameStatus.MENU:
            this.menu.visible       = true;
            this.game.visible       = false;
            this.gameOver.visible   = false;
            break;
        case GameStatus.GAME_ONE:
            this.menu.visible       = false;
            this.game.visible       = true;
            this.gameOver.visible   = false;
            break;
        case GameStatus.GAME_TWO:
            // TODO: Fill if game two when it's done.
            break;
        case GameStatus.GAME_OVER:
            this.menu.visible       = false;
            this.game.visible       = false;
            this.gameOver.visible   = true;
            break;
    }

    this.renderer.render(this.stage);
    requestAnimFrame(this.update.bind(this));
};

window.onload = init;
