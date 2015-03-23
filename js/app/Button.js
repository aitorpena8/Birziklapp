function Button(x, y, width, height, text)
{
    PIXI.DisplayObjectContainer.call(this);

    this.interactive = true;
    this.buttonMode  = true;

    this.position.x = x;
    this.position.y = y;
    this.width      = width;
    this.height     = height;

    this.text = text;

    this.loadButton(this, width, height, text);
}

Button.constructor = Button;
Button.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

Button.prototype.loadButton = function(cxt, width, height, text)
{
    var textStyle  = {font: "bold italic "+ height / 1.5 + "px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 4};

    var buttonText = new PIXI.Text(text, textStyle);
    var ninepatch  = new PIXI.NinePatch(width, height, "resources/images/nine_patch/yellow_button_0*.png", false);

    buttonText.position.x = width / 2 - buttonText.width / 2;

    cxt.addChild(ninepatch);
    cxt.addChild(buttonText);
};

