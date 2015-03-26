/* Paper container */

function BlueTrash(x, y)
{
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BLUE);
}

BlueTrash.constructor = BlueTrash;
BlueTrash.prototype = Object.create(Trash.prototype);

BlueTrash.prototype.createRandomTexture = function()
{
    var myItems = this.getElements();

    //TODO: Create the algorithm

    return "resources/images/sprites/trash/blue.png";
};

BlueTrash.prototype.getElements = function()
{
    //TODO Get all BLUE TRASH RUBBISH from the database
    return 0;
};
