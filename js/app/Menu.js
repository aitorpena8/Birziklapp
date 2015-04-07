function Menu()
{
    PIXI.DisplayObjectContainer.call(this);

    var textStyle  = {font: "bold 40px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 4};

    this.logo = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/title.png"));
    this.logo.anchor.x = this.logo.anchor.y = 0.5;
    this.logo.position.x = mWidth / 2;
    this.logo.position.y = mHeight * 0.25;


    this.startButton        = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/play_256.png"));
    this.statisticsButton   = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/score_256.png"));
    this.helpButton         = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/help_256.png"));
    this.infoButton         = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/info_128.png"));
    this.optionsButton      = new PIXI.Sprite(PIXI.Texture.fromImage("resources/images/sprites/buttons/options_128.png"));

    this.startButtonText      = new PIXI.Text("PLAY!", textStyle);
    this.statisticsButtonText = new PIXI.Text("SCORE", textStyle);
    this.helpButtonText       = new PIXI.Text("HELP", textStyle);

    this.startButton.anchor = this.statisticsButton.anchor = this.helpButton.anchor = this.infoButton.anchor = this.optionsButton.anchor = new PIXI.Point(0.5, 0.5);
    this.startButtonText.anchor = this.statisticsButtonText.anchor = this.helpButtonText.anchor = new PIXI.Point(0.5,0.25);

    this.startButton.addChild(this.startButtonText);
    this.statisticsButton.addChild(this.statisticsButtonText);
    this.helpButton.addChild(this.helpButtonText);

    this.startButton.scale = new PIXI.Point(0.8,0.8);
    this.statisticsButton.scale = this.helpButton.scale = new PIXI.Point(0.6,0.6);
    this.infoButton.scale = this.optionsButton.scale = new PIXI.Point(0.4,0.4);

    this.statisticsButton.position.x = mWidth * 0.25;
    this.startButton.position.x      = mWidth * 0.5;
    this.helpButton.position.x       = mWidth * 0.75;
    this.infoButton.position.x       = mWidth * 0.075;
    this.optionsButton.position.x    = mWidth * 0.925;
    this.startButton.position.y = this.statisticsButton.position.y = this.helpButton.position.y = mHeight * 0.66;
    this.infoButton.position.y = this.optionsButton.position.y = mHeight * 0.9;


    this.startButton.buttonMode  = this.statisticsButton.buttonMode  = this.helpButton.buttonMode  = this.infoButton.buttonMode  = this.optionsButton.buttonMode  = true;
    this.startButton.interactive = this.statisticsButton.interactive = this.helpButton.interactive = this.infoButton.interactive = this.optionsButton.interactive = true;


    this.startButton.click      = this.startButton.tap      = this.play;
    this.statisticsButton.click = this.statisticsButton.tap = this.statistics;
    this.helpButton.click       = this.helpButton.tap       = this.help;
    this.infoButton.click       = this.infoButton.tap       = this.info;
    this.optionsButton.click    = this.optionsButton.tap    = this.options;

    this.addChild(this.startButton);
    this.addChild(this.statisticsButton);
    this.addChild(this.helpButton);
    this.addChild(this.infoButton);
    this.addChild(this.optionsButton);

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
    document.location.href = "html/help.html";
};

Menu.prototype.info = function(data)
{
    main.info.load();
};

Menu.prototype.options = function(data)
{
    //TODO: Go to options
};


