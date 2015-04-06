/* Paper container */

function BlueTrash(x, y)
{
    this.blue =
    [
        "bloc.png",
        "boleto.png",
        "chequera.png",
        "clasificador.png",
        "comic.png",
        "cuaderno.png",
        "diccionario.png",
        "factura.png",
        "guia_telefonica.png"
    ];

    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BLUE);
}

BlueTrash.constructor = BlueTrash;
BlueTrash.prototype = Object.create(Trash.prototype);

BlueTrash.prototype.createRandomTexture = function()
{
    var myItems = this.getElements();

     //FIXME: ñapa ñapa ñapa ñapa ñapa ñapa ñapa ñapa
    var path = "resources/images/sprites/trash/papel_y_carton/";


    var index = Math.floor(Math.random() * this.blue.length);

    var URI = path + this.blue[index];

    return URI;
};

BlueTrash.prototype.getElements = function()
{
    //TODO Get all BLUE TRASH RUBBISH from the database
    return 0;
};
