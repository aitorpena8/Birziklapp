function Game()
{
    PIXI.DisplayObjectContainer.call(this);
    this.trashes = [];

    this.score = 0;

    var width = mWidth / 8;
    var height = mHeight;
    var x = mWidth - width;
    var y = mHeight / 2 - height / 2;

    if(mHeight < 512)
        width = mWidth / 16;


    this.bins = new BinsContainer(x, y, width, height);
    this.addChild(this.bins);

    this.blue    = new BlueTrash(mWidth / 2, mHeight / 2);
    this.brown   = new BrownTrash(mWidth / 2, mHeight / 2);
    this.yellow  = new YellowTrash(mWidth / 2, mHeight / 2);
    this.green   = new GreenTrash(mWidth / 2, mHeight / 2);
    this.default = new DefaultTrash(mWidth / 2, mHeight / 2);

    this.addChild(this.blue);
    this.addChild(this.brown);
    this.addChild(this.yellow);
    this.addChild(this.green);
    this.addChild(this.default);

    this.trashes.push(this.blue);
    this.trashes.push(this.brown);
    this.trashes.push(this.yellow);
    this.trashes.push(this.green);
    this.trashes.push(this.default);

    this.randomTrash();

    this.timer = new Timer(mWidth / 2, 50);
    this.addChild(this.timer);

    this.scoreText = new PIXI.Text(this.score, {font: "bold italic " + mHeight / 6 +"px Arvo", fill: "#3e1707", align: "center", stroke: "#a4410e", strokeThickness: 7});
    this.scoreText.position.x = (mWidth  - this.scoreText.width) / 2;
    this.scoreText.position.y = mHeight - mHeight / 4;
    this.addChild(this.scoreText);

    this.resetScore();
}

Game.constructor = Game;
Game.prototype   = Object.create(PIXI.DisplayObjectContainer.prototype);


Game.prototype.resetScore = function()
{
    this.score = 0;
    this.scoreText.setText(this.score);

};

Game.prototype.addScore = function(score)
{
    this.score += score;
    this.scoreText.setText(this.score);
};

Game.prototype.randomTrash = function()
{
    for(key in this.trashes)
    {
        this.trashes[key].visible = false;
        this.trashes[key].buttonMode = false;
        this.trashes[key].interactive = false;
    }

    var index = Math.floor(Math.random() * this.trashes.length);

    this.trashes[index].createRandomTexture();
    this.trashes[index].visible = true;
    this.trashes[index].buttonMode = true;
    this.trashes[index].interactive = true;
};
