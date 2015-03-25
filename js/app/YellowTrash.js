/* Plastics container */

function YellowTrash(x, y)
{
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.YELLOW);
}

YellowTrash.constructor = YellowTrash;
YellowTrash.prototype = Object.create(Trash.prototype);

YellowTrash.prototype.createRandomTexture = function()
{
    //TODO: Create the algorithm
    return "resources/images/sprites/bunny.png";
};

YellowTrash.prototype.getElements = function()
{
    //TODO Get all YELLOW TRASH RUBBISH from the database
    return 0;
};
