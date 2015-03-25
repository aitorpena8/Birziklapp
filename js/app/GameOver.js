function GameOver()
{
    PIXI.DisplayObjectContainer.call(this);

    this.gameOver = new PIXI.Text("GAME OVER", {font: "bold italic 6em Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.gameOver.position.x = (mWidth  - this.gameOver.width) / 2;
    this.gameOver.position.y = (mHeight  - this.gameOver.height) / 2;
    this.addChild(this.gameOver);

    this.score = new PIXI.Text("SCORE: ", {font: "bold italic 6em Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.score.position.x = (mWidth  - this.score.width) / 2;
    this.score.position.y = (mHeight  - this.score.height) / 2 + this.score.height;
    this.addChild(this.score);

    this.restartButton = new Button((mWidth  - this.score.width) / 2, 0, 500, 100, "Restart");
    this.mainMenu      = new Button((mWidth  - this.score.width) / 2, 100, 500, 100, "Menu"); //FIXME

    this.restartButton.click = this.restartButton.tap = this.restart;
    this.mainMenu.click = this.mainMenu.tap = this.gotoMainMenu;

    this.addChild(this.restartButton);
    this.addChild(this.mainMenu);

    // TODO: Add button for reset game or go to menu.
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


