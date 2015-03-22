function BinsContainer(x, y, width, height)
{
    PIXI.DisplayObjectContainer.call(this);
}

BinsContainer.constructor = BinsContainer;
BinsContainer.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
