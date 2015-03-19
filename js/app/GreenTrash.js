/* Glass container */

function GreenTrash(x, y)
{
    this.textureSource = createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.GREEN);
}

GreenTrash.constructor = GreenTrash;
GreenTrash.prototype = Object.create(PIXI.Sprite.prototype);

function createRandomTexture()
{

    return "resources/images/sprites/bunny.png";
}

function getBlueElements()
{

    return 0;
}
