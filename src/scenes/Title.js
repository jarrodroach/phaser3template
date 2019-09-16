/*global Phaser*/
export default class Title extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {

    this.load.image("sky", "./assets/sprites/sky.png");

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
    this.startKey;
  }

  create (data) {

    //Create title scene
    this.sky = this.add.image(400, 300, "sky")
    var text = this.add.text(this.centerX - 20, this.centerY - 25, 'Bomb Rush');
    var text = this.add.text(this.centerX - 75, this.centerY + 25, 'Press w key to start');
    this.startKey = this.input.keyboard.addKey('W');
  }

  update (time, delta) {

  if (this.startKey.isDown) {
    this.scene.start('Gameplay')
  }

  }
}
