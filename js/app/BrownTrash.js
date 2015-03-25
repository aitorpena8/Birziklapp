/* Organic container */

function BrownTrash(x, y)
{
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BROWN);
}

BrownTrash.constructor = BrownTrash;
BrownTrash.prototype = Object.create(Trash.prototype);

BrownTrash.prototype.createRandomTexture = function()
{
    //TODO: Create the algorithm
    return "resources/images/sprites/bunny.png";
};

BrownTrash.prototype.getElements = function()
{
    //TODO Get all BROWN TRASH RUBBISH from the database
    return 0;
};
