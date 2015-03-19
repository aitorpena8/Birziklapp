/* Organic container */

function BrownTrash(x, y)
{
    this.textureSource = createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BROWN);
}

BrownTrash.constructor = BrownTrash;
BrownTrash.prototype = Object.create(PIXI.Sprite.prototype);

function createRandomTexture()
{

    return "resources/images/sprites/bunny.png";
}

function getBlueElements()
{

    return 0;
}
