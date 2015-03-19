function Menu(stage)
{
    PIXI.DisplayObjectContainer.call(this);
    this.blue = new BlueTrash(100, 100);
    this.addChild(this.blue);
}

Menu.constructor = Menu;
Menu.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
