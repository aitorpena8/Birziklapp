function BinsContainer(x, y, width, height)
{
    PIXI.DisplayObjectContainer.call(this);
    this.position.x     = x;
    this.position.y     = y;
    this.width          = width;
    this.height         = height;

    var offset = mHeight / 100;

    this.yellow  = new Bin(0, offset, "resources/images/sprites/yellow.png", RecycleBins.YELLOW);
    this.blue    = new Bin(0, height/5 + offset, "resources/images/sprites/blue.png", RecycleBins.BLUE);
    this.green   = new Bin(0, (height/5 + offset) * 2, "resources/images/sprites/green.png", RecycleBins.GREEN);
    this.brown   = new Bin(0, (height/5 + offset) * 3, "resources/images/sprites/brown.png", RecycleBins.BROWN);
    this.default = new Bin(0, (height/5 + offset) * 4, "resources/images/sprites/default.png", RecycleBins.DEFAULT);

    this.addChild(this.yellow);
    this.addChild(this.blue);
    this.addChild(this.green);
    this.addChild(this.brown);
    this.addChild(this.default);
}

BinsContainer.constructor = BinsContainer;
BinsContainer.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
