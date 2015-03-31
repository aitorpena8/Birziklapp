/* The parent class for every rubbis.
Here goes all the functionalities for drag and drop and creation*/

function Trash(imageSource, x, y, id)
{
    var texture = PIXI.Texture.fromImage(imageSource);
    PIXI.Sprite.call(this, texture);

    this.initialX = x;
    this.initialY = y;

    this.position.x = x;
    this.position.y = y;

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.id = id;

    this.scale.y = this.scale.x = this.initialScale = 0.4;
    if(mHeight <= 768)
        this.initialScale = this.scale.y = this.scale.x = 0.2;
}

Trash.constructor = Trash;
Trash.prototype = Object.create(PIXI.Sprite.prototype);

Trash.prototype.setPosition = function(x, y)
{
    this.position.x = x;
    this.position.y = y;
};


Trash.prototype.mousedown = Trash.prototype.touchstart = function(data)
{
    data.originalEvent.preventDefault();
    // store a refference to the data
    // The reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = data;
    this.scale.x = this.scale.y += 0.1;
    this.dragging = true;
};

// set the callbacks for when the mouse or a touch moves
Trash.prototype.mousemove = Trash.prototype.touchmove = function(data)
{
    if(this.dragging)
    {
        // need to get parent coords..
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
};

Trash.prototype.mouseup = Trash.prototype.mouseupoutside = Trash.prototype.touchend = Trash.prototype.touchendoutside = function(data)
{
    this.alpha = 1;
    this.scale.x = this.scale.y = this.initialScale;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
    if(this.position.x >= main.game.bins.position.x)
    {
        for(index in bins)
        {
            if(COLLIDER.checkCollision(this, bins[index]))
            {
                main.game.timer.resetTimer();
                //TODO: create new trash, set it at initial position and add score
                this.position.x = this.initialX;
                this.position.y = this.initialY;

                main.game.addScore(1);
                main.game.randomTrash();

                return;
            }
        }
        //TODO: Set at initial position and decrease life
        main.game.addScore(-1);
    }
    //TODO: if this.x > window width < binscontainer offset
    this.position.x = this.initialX;
    this.position.y = this.initialY;

};
