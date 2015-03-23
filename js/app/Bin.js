function Bin(x, y, imageSource, id)
{
    var texture = PIXI.Texture.fromImage(imageSource);
    PIXI.Sprite.call(this, texture);
    this.x  = x;
    this.y  = y;
    this.id = id;
}

Bin.constructor = Bin;
Bin.prototype = Object.create(PIXI.Sprite.prototype);
