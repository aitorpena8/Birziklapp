/*Class for the cronometer*/
function Timer(x, y)
{
    this.count = 5;
    PIXI.Text.call(this, this.count, {font: "bold italic 6em Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.position.x = x;
    this.position.y = y;

    this.resetTimer();

    var inter = setInterval(self.decreaseSeconds, 1000);
}

Timer.constructor = Timer;
Timer.prototype = Object.create(PIXI.Text.prototype);

Timer.prototype.resetTimer = function()
{
    this.count = 5;
};

Timer.prototype.decreaseSeconds = function()
{
    if(this.count >= 0)
    {
        this.count --;
        this.setText(this.count);
    }
    console.log(this.count);
};
