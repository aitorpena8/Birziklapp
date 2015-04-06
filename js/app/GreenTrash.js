/* Glass container */

function GreenTrash(x, y)
{
    this.green =
    [
        "botella_de_vidrio.png"
    ];
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.GREEN);
}

GreenTrash.constructor = GreenTrash;
GreenTrash.prototype = Object.create(Trash.prototype);

GreenTrash.prototype.createRandomTexture = function()
{
     //FIXME: ñapa ñapa ñapa ñapa ñapa ñapa ñapa ñapa
    var path = "resources/images/sprites/trash/vidrio/";


    var index = Math.floor(Math.random() * this.green.length);

    var URI = path + this.green[index];

    return URI;
};

GreenTrash.prototype.getElements = function()
{
    //TODO Get all GREEN TRASH RUBBISH from the database
    return 0;
};
