function Menu()
{
    PIXI.DisplayObjectContainer.call(this);

    var width   = mWidth / 4;
    var height  = mHeight / 8;
    var x       = mWidth / 2 - width/2;
    var y       = mHeight - mHeight / 2;
    var offset  = mHeight / 100;

    //TODO: Add the logo and the info and settings button

    this.logo = new PIXI.Text("BirziklApp", {font: "bold italic " + mHeight / 6 + "px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.logo.position.x = (mWidth  - this.logo.width) / 2;
    this.logo.position.y = mHeight / 100;


    this.startButton        = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/play_256.png"));
    this.statisticsButton   = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/score_256.png"));
    this.helpButton         = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/help_256.png"));

    this.startButton.anchor.x = this.startButton.anchor.y = this.statisticsButton.anchor.x = this.statisticsButton.anchor.y = this.helpButton.anchor.x = this.helpButton.anchor.y = 0.5;

    this.startButton.scale.x = this.startButton.scale.y = this.statisticsButton.scale.x = this.statisticsButton.scale.y = this.helpButton.scale.x = this.helpButton.scale.y = 0.8;

    if(mHeight < 768)
        this.startButton.scale.x = this.startButton.scale.y = this.statisticsButton.scale.x = this.statisticsButton.scale.y = this.helpButton.scale.x = this.helpButton.scale.y = 0.4;

    this.startButton.position.x      = mWidth / 2;
    this.startButton.position.y      = y;
    this.statisticsButton.position.x = mWidth / 2 - this.statisticsButton.width;
    this.statisticsButton.position.y = y + (height + offset) * 2;
    this.helpButton.position.x       = mWidth / 2 + this.helpButton.width;
    this.helpButton.position.y       = y + (height + offset) * 2;

    this.startButton.buttonMode  = this.statisticsButton.buttonMode  = this.helpButton.buttonMode  = true;
    this.startButton.interactive = this.statisticsButton.interactive = this.helpButton.interactive = true;

    this.startButton.click      = this.startButton.tap      = this.play;
    this.statisticsButton.click = this.statisticsButton.tap = this.statistics;
    this.helpButton.click       = this.helpButton.tap       = this.help;

    this.addChild(this.startButton);
    this.addChild(this.statisticsButton);
    this.addChild(this.helpButton);

    this.addChild(this.logo);
}

Menu.constructor = Menu;
Menu.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Menu.prototype.play = function(data)
{
    gameStatus = GameStatus.GAME_ONE;
    main.game.timer.resetTimer();
};

Menu.prototype.statistics = function(data)
{
    //TODO: Go to statistics
};

Menu.prototype.help = function(data)
{
    //TODO: Go to help
};


