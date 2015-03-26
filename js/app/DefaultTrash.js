/* Green container where is thrown every rubbish that can't be recycled*/

function DefaultTrash(x, y)
{
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.DEFAULT);
}

DefaultTrash.constructor = DefaultTrash;
DefaultTrash.prototype = Object.create(Trash.prototype);

DefaultTrash.prototype.createRandomTexture = function()
{
    //TODO: Create the algorithm
    return "resources/images/sprites/trash/default.png";
};

DefaultTrash.prototype.getElements = function()
{
    //TODO Get all DEFAULT TRASH RUBBISH from the database
    return 0;
};

