function BinsContainer(x, y, width, height)
{
    PIXI.DisplayObjectContainer.call(this);
    this.x      = x;
    this.y      = y;
    this.width  = width;
    this.height = height;

    this.yellow  = new Bin(0, 0, "resources/images/sprites/yellow.png", RecycleBins.YELLOW);
    this.blue    = new Bin(0, 50, "resources/images/sprites/blue.png", RecycleBins.BLUE);
    this.green   = new Bin(0, 100, "resources/images/sprites/green.png", RecycleBins.GREEN);
    this.brown   = new Bin(0, 150, "resources/images/sprites/brown.png", RecycleBins.BROWN);
    this.default = new Bin(0, 200, "resources/images/sprites/default.png", RecycleBins.DEFAULT);

    this.addChild(this.yellow);
    this.addChild(this.blue);
    this.addChild(this.green);
    this.addChild(this.brown);
    this.addChild(this.default);
}

BinsContainer.constructor = BinsContainer;
BinsContainer.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
