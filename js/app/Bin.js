function Bin(x, y, image1, image2, id)
{
    var texture1 = PIXI.Texture.fromImage(image1);
    var texture2 = PIXI.Texture.fromImage(image2);
    PIXI.Sprite.call(this, texture1);
    this.position.x = x;
    this.position.y = y;
    this.id         = id;

    this.scale.set(0.4,0.4);

    this.interactive = true;
    this.mouseover = function(data) {console.log("mouse over");this.setTexture(texture2);};
    this.mouseout = function(data) {console.log("mouse out");this.setTexture(texture1);};

    bins.push(this);
}

Bin.constructor = Bin;
Bin.prototype = Object.create(PIXI.Sprite.prototype);
