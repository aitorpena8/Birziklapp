function GameOver()
{
    PIXI.DisplayObjectContainer.call(this);
}

GameOver.constructor = GameOver;
GameOver.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
