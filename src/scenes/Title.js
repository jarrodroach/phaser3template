/*global Phaser*/
import * as ChangeScene from './ChangeScene.js';
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
  }

  create (data) {

    //Create title scene
    this.sky = this.add.image(400, 300, "sky").setInteractive();
    var text = this.add.text(this.centerX - 20, this.centerY - 25, 'Bomb Rush');
    var text = this.add.text(this.centerX - 85, this.centerY + 25, 'Click anywhere to start');
    this.sky.on('pointerdown', function(){
      this.scene.start('GameOver');
    });
  }

  update (time, delta) {

  }
}
