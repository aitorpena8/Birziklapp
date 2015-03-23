function Game()
{
    PIXI.DisplayObjectContainer.call(this);
    this.trashes = [];

    var width = 50;
    var height = 200;
    var x = mWidth - width;
    var y = mHeight / 2 - height / 2;

    this.bins = new BinsContainer(x, y, width, height);
    this.addChild(this.bins);


    this.blue = new BlueTrash(100, 100);
    this.addChild(this.blue);

    this.timer = new Timer(mWidth / 2, 50);
    this.addChild(this.timer);
}

Game.constructor = Game;
Game.prototype   = Object.create(PIXI.DisplayObjectContainer.prototype);

Game.prototype.update = function()
{

};
