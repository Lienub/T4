import Phaser from 'phaser';
import bc from '../assets/img/bg_3.png';
import Player from '../model/player';


export default class ThirdGameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'ThirdGameScene' });
    }

    preload() {
        this.load.image('bgscene', bc);
        Player.loadAssets(this);


    }

    create() {
 // Creating the scene
  // here, we create the background image
  // and the player (cf model/player.js)
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgscene');
    this.player = new Player(this, 100, 450);

      // Création du bouton
    const button = this.add.text(400, 50, 'Game Over', { fill: '#0f0' }).setOrigin(0.5);
    button.setInteractive({ useHandCursor: true });
    console.log('After create 3ème scène');
    // Action lors du clic sur le bouton
    button.on('pointerdown', () => {
      this.scene.start('GameOverScene', { message: 'petanque' });
    });}

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