/*global Phaser*/
export default class title extends Phaser.Scene {
  constructor () {
    super('title');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    this.load.spritesheet('alien', "./assets/spriteSheets/player.png",{
      frameHeight: 93,
      frameWidth: 67
    });

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    //Make a title page

    var text = this.add.text(this.centerX - 50, this.centerY - 10, "Welcome")
    var text = this.add.text(this.centerX - 130, this.centerY + 80, "(click anywhere to play)")
    this.cameras.main.setBackgroundColor(0x00aaff)

  }

  update (time, delta) {

  }
}
