var main = null;

function init()
{
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

function Main()
{
    gameStatus = GameStatus.MENU;
    this.stage = new PIXI.Stage;

    this.splashContainer        = new PIXI.DisplayObjectContainer();
    this.instructionsContainer  = new PIXI.DisplayObjectContainer();
    this.menuContainer          = new PIXI.DisplayObjectContainer();
    this.gameTypeOne            = new PIXI.DisplayObjectContainer();
    this.gameTypeTwo            = new PIXI.DisplayObjectContainer();
    this.gameOverContainer      = new PIXI.DisplayObjectContainer();

    this.stage.addChild(this.splashContainer);
    this.stage.addChild(this.instructionsContainer);
    this.stage.addChild(this.menuContainer);
    this.stage.addChild(this.gameTypeOne);
    this.stage.addChild(this.gameTypeTwo);
    this.stage.addChild(this.gameOverContainer);

    this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { view:document.getElementById("game") });
    requestAnimFrame(this.update.bind(this));
}

Main.prototype.update = function()
{
    switch(gameStatus)
    {
        case GameStatus.MENU:
            this.instructionsContainer.visible  = false;
            this.menuContainer.visible          = true;
            this.gameTypeOne.visible            = false;
            this.gameTypeTwo.visible            = false;
            this.gameOverContainer.visible      = false;
            break;
        case GameStatus.GAME_ONE:
            this.instructionsContainer.visible  = false;
            this.menuContainer.visible          = false;
            this.gameTypeOne.visible            = true;
            this.gameTypeTwo.visible            = false;
            this.gameOverContainer.visible      = false;
            break;
        case GameStatus.GAME_TWO:
            this.instructionsContainer.visible  = false;
            this.menuContainer.visible          = false;
            this.gameTypeOne.visible            = false;
            this.gameTypeTwo.visible            = true;
            this.gameOverContainer.visible      = false;
            break;
    }

    this.renderer.render(this.stage);
    requestAnimFrame(this.update.bind(this));
}

window.onload = init;
