/*Class for the cronometer*/

var timerCount = 0;
function Timer(x, y)
{
    timerCount = 5;
    PIXI.Text.call(this, timerCount, {font: "bold italic 6em Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.position.x = x;
    this.position.y = y;
    this.resetTimer();

    setInterval(this.decreaseSeconds, 1000, this);
}

Timer.constructor = Timer;
Timer.prototype = Object.create(PIXI.Text.prototype);

Timer.prototype.resetTimer = function()
{
    timerCount = 5;
};

Timer.prototype.decreaseSeconds = function(ctx)
{
    if(timerCount > 0)
    {
        if(gameStatus == GameStatus.GAME_ONE)
        {
            timerCount --;
            ctx.setText(timerCount);
        }
    }
    else
    {
        // TODO: GAME_OVER
        gameStatus = GameStatus.GAME_OVER;
    }
};
