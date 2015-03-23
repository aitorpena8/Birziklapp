function Bin(x, y, imageSource, id)
{
    var texture = PIXI.Texture.fromImage(imageSource);
    PIXI.Sprite.call(this, texture);
    this.position.x  = x;
    this.position.y  = y;
    this.id = id;
}

Bin.constructor = Bin;
Bin.prototype = Object.create(PIXI.Sprite.prototype);
