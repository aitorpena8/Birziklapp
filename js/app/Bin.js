function Bin(x, y, imageSource, id)
{
    var texture = PIXI.Texture.fromImage(imageSource);
    PIXI.Sprite.call(this, texture);
    this.position.x = x;
    this.position.y = y;
    this.id         = id;

    if(mHeight >= 512)
        this.scale.x = this.scale.y = 0.4;
    else
        this.scale.x = this.scale.y = 0.2;

    bins.push(this);
}

Bin.constructor = Bin;
Bin.prototype = Object.create(PIXI.Sprite.prototype);
