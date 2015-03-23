/* Glass container */

function GreenTrash(x, y)
{
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.GREEN);
}

GreenTrash.constructor = GreenTrash;
GreenTrash.prototype = Object.create(PIXI.Sprite.prototype);

GreenTrash.prototype.createRandomTexture = function()
{
    //TODO: Create the algorithm
    return "resources/images/sprites/bunny.png";
};

GreenTrash.prototype.getElements = function()
{
    //TODO Get all GREEN TRASH RUBBISH from the database
    return 0;
};
