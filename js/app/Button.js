function Button(x, y, width, height, text)
{
    var texture = PIXI.Texture.fromImage("");
    PIXI.Sprite.call(this, texture);

    this.interactive = true;
    this.buttonMode  = true;

    this.x      = x;
    this.y      = y;
    this.width  = width;
    this.height = height;

    this.text = text;

    this.overTexture = PIXI.Texture.fromImage("");
}

Button.constructor = Button;
Button.prototype = Object.create(PIXI.Sprite.prototype);

Button.prototype.onmouseover = function(data)
{
    this.setTexture(this.overTexture);
};

Button.prototype.onmouseout = function(data)
{
    this.setTexture(this.texture);
};

Button.prototype.setText = function(text)
{
    this.text = text;
};
