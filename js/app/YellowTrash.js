/* Plastics container */

function YellowTrash(x, y)
{
    this.textureSource = createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.YELLOW);
}

YellowTrash.constructor = YellowTrash;
YellowTrash.prototype = Object.create(PIXI.Sprite.prototype);

function createRandomTexture()
{

    return "resources/images/sprites/bunny.png";
}

function getBlueElements()
{

    return 0;
}
