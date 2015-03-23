function Menu()
{
    PIXI.DisplayObjectContainer.call(this);

    var width   = mWidth / 4;
    var height  = mHeight / 8;
    var x       = mWidth/2 - width/2;
    var y       = mHeight / 6 - height / 2;
    var offset  = 10;

    //TODO: Add the logo and the info and settings button

    this.startButton        = new Button(x, y, width, height, "Play");
    this.statisticsButton   = new Button(x, y + height + offset, width, height, "Statistics");
    this.helpButton         = new Button(x, y + (height + offset) * 2, width, height, "Help");

    this.startButton.click      = this.startButton.tap      = this.play;
    this.statisticsButton.click = this.statisticsButton.tap = this.statistics;
    this.helpButton.click       = this.helpButton.tap       = this.help;

    this.addChild(this.startButton);
    this.addChild(this.statisticsButton);
    this.addChild(this.helpButton);
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


