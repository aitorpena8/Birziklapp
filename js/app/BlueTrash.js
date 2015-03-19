/* Paper container */

function BlueTrash(x, y)
{
    this.textureSource = createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BLUE);
}

BlueTrash.constructor = BlueTrash;
BlueTrash.prototype = Object.create(Trash.prototype);

function createRandomTexture()
{

    return "resources/images/sprites/bunny.png";
}

function getBlueElements()
{
    //TODO Get all BLUE TRASH RUBBISH from the database
    return 0;
}
