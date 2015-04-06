/* Organic container */

function BrownTrash(x, y)
{
    this.brown =
    [
        "achicoria.png",
        "bolsa_de_infusion.png",
        "caramelos.png",
        "cascara_de_marisco.png",
        "comida_de_animales_domesticos.png",
        "comida_de_animales_domesticos2.png",
        "embutido.png",
        "frutos_secos.png",
        "frutos_secos2.png",
        "hueso.png"
    ];

    this.textureSource = this.createRandomTexture();
    Trash.call(this, this.textureSource, x, y, RecycleBins.BROWN);
}

BrownTrash.constructor = BrownTrash;
BrownTrash.prototype = Object.create(Trash.prototype);

BrownTrash.prototype.createRandomTexture = function()
{
     //FIXME: ñapa ñapa ñapa ñapa ñapa ñapa ñapa ñapa
    var path = "resources/images/sprites/trash/organico/";


    var index = Math.floor(Math.random() * this.brown.length);

    var URI = path + this.brown[index];

    return URI;
};

BrownTrash.prototype.getElements = function()
{
    //TODO Get all BROWN TRASH RUBBISH from the database
    return 0;
};
