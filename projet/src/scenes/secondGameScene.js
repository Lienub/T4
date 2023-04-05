import Phaser from 'phaser';
import bc from '../assets/img/bg_2.png';
import Player from '../model/player';

export default class SecondGameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'SecondGameScene' });
    }

    preload() {
        this.load.image('bg', bc);
        Player.loadAssets(this);


    }

    create() {
 // Creating the scene
  // here, we create the background image
  // and the player (cf model/player.js)
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');
    this.player = new Player(this, 100, 450);


    const nextScene_button = this.add.text(200, 50, 'Next Scene', { fill: '#0f0' }).setOrigin(0.5);
    nextScene_button.setInteractive({ useHandCursor: true });
    console.log('After create 2ème scène');
    
    // Action lors du clic sur le bouton
    nextScene_button.on('pointerdown', () => {
      this.scene.start('ThirdGameScene');
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
  }
}