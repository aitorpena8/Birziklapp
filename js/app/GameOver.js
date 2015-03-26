function GameOver()
{
    PIXI.DisplayObjectContainer.call(this);

    this.gameOver = new PIXI.Text("GAME OVER", {font: "bold italic " + mHeight / 6 + "px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.gameOver.position.x = (mWidth  - this.gameOver.width) / 2;
    this.gameOver.position.y = mHeight / 100;
    this.addChild(this.gameOver);

    this.score = new PIXI.Text("SCORE: ", {font: "bold italic " + mHeight / 6 + "px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.score.position.x = (mWidth  - this.score.width) / 2;
    this.score.position.y = mHeight / 100 + this.score.height;
    this.addChild(this.score);

    this.restartButton = new Button((mWidth  - this.score.width) / 2, mHeight / 2, mWidth / 4, mHeight / 8, "Restart");
    this.mainMenu      = new Button((mWidth  - this.score.width) / 2, mHeight / 2 + this.restartButton.height, mWidth / 4, mHeight / 8, "Menu"); //FIXME

    this.restartButton.click = this.restartButton.tap = this.restart;
    this.mainMenu.click = this.mainMenu.tap = this.gotoMainMenu;

    this.addChild(this.restartButton);
    this.addChild(this.mainMenu);
}

GameOver.constructor = GameOver;
GameOver.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);

GameOver.prototype.setScore = function(score)
{
    this.score.setText("SCORE: " + score);
};

GameOver.prototype.restart = function()
{
    gameStatus = GameStatus.GAME_ONE;
};

GameOver.prototype.gotoMainMenu = function()
{
    gameStatus = GameStatus.MENU;
};


