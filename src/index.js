/*global Phaser, window*/
import Title from './scenes/Title.js';
import Gameplay from './scenes/Gameplay.js';
import GameOver from './scenes/GameOver.js';
import Config from './config/config.js';
class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Title', Title);
    this.scene.add('Gameplay', Gameplay);
    this.scene.add('GameOver', GameOver);
    this.scene.start('Title');
  }
}

window.game = new Game();
