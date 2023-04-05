import Phaser from 'phaser';
// Importing all the necessary resources

import bgDefault from '../assets/img/bg_default.png';
import Player from '../model/player';
import HitBox from '../assets/utils/hitBox';



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

    //Creating the hitboxes
    this.hitBox = new HitBox(this, 132, 142, 264, 284, 0x000000, 0);
    this.hitBox2 = new HitBox(this, 467 + (465/2), 2 + (285/2), 495, 285, 0x000000, 0);
    this.hitBox3 = new HitBox(this, 262 + (206/2), 0 + (18/2), 206, 18, 0x000000, 0);
    this.hitBox4 = new HitBox(this, 3 + (959/2), 420 + (280/2), 959, 280, 0x000000, 0);
    
    // Création du bouton
    const button = this.add.text(400, 50, 'Game Over', { fill: '#0f0' }).setOrigin(0.5);
    button.setInteractive({ useHandCursor: true });
    
    // Action lors du clic sur le bouton
    button.on('pointerdown', () => {
      this.scene.start('GameOverScene', { win: 'monk', message: 'door' });
    });

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

    //on click on the screen, print the coordinates of the click
    this.input.on('pointerdown', function (pointer) {
      console.log(pointer.x, pointer.y);
    });
  }
}