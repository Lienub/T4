import Phaser from 'phaser';
// Importing all the necessary resources

import bgDefault from '../assets/img/bg_default.png';
import Player from '../model/player';


// Creating a scene named MainScene,
// which will be the main scene of the game
// This scene will contains the player,
// some PNJs and the map
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  // Preloading all the necessary resources
  // here, we preload the background image
  preload() {
    this.load.image('bgDefault', bgDefault);
    Player.loadAssets(this);
  }

  // Creating the scene
  // here, we create the background image
  // and the player (cf model/player.js)
  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgDefault');
    this.player = new Player(this, 100, 450);
  }

  // Updating the scene
  // here, we update the player movements
  // based on the keyboard inputs,
  // we call the player.move() function (cf model/player.js)
  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if(cursors.left.isDown) {
      this.player.move('left');
    }
    else if(cursors.right.isDown) {
      this.player.move('right');
    }
    else if(cursors.up.isDown) {
      this.player.move('up');
    }
    else if(cursors.down.isDown) {
      this.player.move('down');
    }
    else {
      this.player.stop();
    }

  }

}