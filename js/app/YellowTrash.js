/* Plastics container */


function YellowTrash(x, y)
{

    this.yellow =
    [
        "bandeja_de_aluminio.png",
        "bolsa_de_caramelos.png",
        "bolsa_de_plastico.png",
        "dosificador_de_botella.png",
        "film_transparente.png",
        "interruptor.png",
        "lata.png",
        "papel_aluminio.png"
    ];
    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.YELLOW);
}

YellowTrash.constructor = YellowTrash;
YellowTrash.prototype = Object.create(Trash.prototype);

YellowTrash.prototype.createRandomTexture = function()
{
    //FIXME: ñapa ñapa ñapa ñapa ñapa ñapa ñapa ñapa
    var path = "resources/images/sprites/trash/plastico/";


    var index = Math.floor(Math.random() * this.yellow.length);

    var URI = path + this.yellow[index];

    return URI;
};

YellowTrash.prototype.getElements = function()
{
    //TODO Get all YELLOW TRASH RUBBISH from the database
    return 0;
};
