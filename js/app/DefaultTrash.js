/* Green container where is thrown every rubbish that can't be recycled*/

function DefaultTrash(x, y)
{
    this.default =
    [
        "abrecartas.png",
        "abrelatas.png",
        "aguja.png",
        "aletas.png",
        "algodon.png",
        "alicates.png",
        "antena.png",
        "baston.png"
    ];
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.DEFAULT);
}

DefaultTrash.constructor = DefaultTrash;
DefaultTrash.prototype = Object.create(Trash.prototype);

DefaultTrash.prototype.createRandomTexture = function()
{
     //FIXME: ñapa ñapa ñapa ñapa ñapa ñapa ñapa ñapa
    var path = "resources/images/sprites/trash/rechazo/";


    var index = Math.floor(Math.random() * this.default.length);

    var URI = path + this.default[index];

    return URI;
};

DefaultTrash.prototype.getElements = function()
{
    //TODO Get all DEFAULT TRASH RUBBISH from the database
    return 0;
};

