/*global Phaser, window*/
import title from './scenes/title.js';
import game from './scenes/game.js';
import end from './scenes/end.js';

import Config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('title', title);
    this.scene.add('Game', game);
    this.scene.add('End', end);
    this.scene.start('title');
  }
}

window.game = new Game();
