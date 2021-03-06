/*Class for the cronometer*/

var timerCount = 0;
function Timer(x, y)
{
    timerCount = 3;
    PIXI.Text.call(this, timerCount, {font: "bold italic " + mHeight / 6 + "px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.position.x = x;
    this.position.y = y;
    this.resetTimer();

    setInterval(this.decreaseSeconds, 1000, this);
}

Timer.constructor = Timer;
Timer.prototype = Object.create(PIXI.Text.prototype);

Timer.prototype.resetTimer = function()
{
    timerCount = 4;
};

Timer.prototype.decreaseSeconds = function(ctx)
{
    if(gameStatus === GameStatus.GAME_ONE)
    {
        if(timerCount > 0)
        {
            timerCount --;
            ctx.setText(timerCount);
        }
        else
        {
            // TODO: GAME_OVER
            main.gameOver.setScore(main.game.score);
            ctx.resetTimer();
            gameStatus = GameStatus.GAME_OVER;
        }
    }
};
