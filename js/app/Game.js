function Game()
{
    PIXI.DisplayObjectContainer.call(this);
    this.thrashes = [];
}

Game.constructor = Game;
Game.prototype   = Object.create(PIXI.DisplayObjectContainer.prototype);

Game.prototype.update = function()
{

};
