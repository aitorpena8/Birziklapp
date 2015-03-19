/* Green container where is thrown every rubbish that can't be recycled*/

function DefaultTrash(x, y)
{
    this.textureSource = createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.DEFAULT);
}

DefaultTrash.constructor = DefaultTrash;
DefaultTrash.prototype = Object.create(PIXI.Sprite.prototype);

function createRandomTexture()
{

    return "resources/images/sprites/bunny.png";
}

function getBlueElements()
{

    return 0;
}

