function Game()
{
    PIXI.DisplayObjectContainer.call(this);
    this.trashes = [];
}

Game.constructor = Game;
Game.prototype   = Object.create(PIXI.DisplayObjectContainer.prototype);

Game.prototype.update = function()
{

};
