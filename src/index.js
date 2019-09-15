/*global Phaser, window*/
import Title from './scenes/Title.js';
import Gameplay from './scenes/Gameplay.js';
import GameOver from './scenes/GameOver.js';
import Config from './config/config.js';
import Scene5 from './scenes/Scene5.js';
class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Title', Title);
    this.scene.add('Gameplay', Gameplay);
    this.scene.add('GameOver', GameOver);
    this.scene.add('Scene5', Scene5);
    this.scene.start('Scene5');
  }
}

window.game = new Game();
