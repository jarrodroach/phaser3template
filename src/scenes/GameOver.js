/*global Phaser*/
export default class GameOver extends Phaser.Scene {
  constructor () {
    super('GameOver');
  }

  init (data) {
    // Initialization code goes here
    this.score = data.score;
  }

  preload () {

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    this.startKey;
    this.endKey;
  }

  create (data) {

    //Create the scene
    var score = this.add.text(this.centerX - 20, this.centerY, this.score);
    var scoreText = this.add.text(this.centerX - 100, this.centerY, "Score: ")
    var text = this.add.text(this.centerX - 100, this.centerY + 25, 'Play Again? Press Y/N');
    this.startKey = this.input.keyboard.addKey('Y');
    this.titleKey = this.input.keyboard.addKey('N');

  }

  update (time, delta) {
    // Update the scene
    if (this.startKey.isDown) {
      this.scene.start('Scene5')
    } else if (this.titleKey.isDown) {
      this.scene.start('Title')
    }
  }
}
