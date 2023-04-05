import Phaser from 'phaser';
import bc from '../assets/img/bg_3.png';
import Player from '../model/player';


export default class ThirdGameScene extends Phaser.Scene {

    constructor(player) {
        super({ key: 'ThirdGameScene' });
        this.player = player;
    }

    preload() {
        this.load.image('bgscene', bc);
        Player.loadAssets(this);


    }

    create() {
 // Creating the scene

 //Style des textes dans les rectangles
 const style = {
  fontFamily: 'Arial',
  fontSize: '24',
  color: '#000000',
  align: 'center',
}

// décalage du texte pour chaque rectangle
const textOffset = 20;

// Création du timer de 3 secondes
this.timer = this.time.addEvent({delay: 3000, loop: true});

this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgDefault');
this.player = new Player(this, 100, 450);
console.log(this.player);
// Création du rectangle de fond pour le texte
const rectMoney = this.add.rectangle(40, 25,  50, 15, 0xffffff);
// Création du texte
const money = this.player.getMoney();
const textMoney = this.add.text(rectMoney.x, rectMoney.y - textOffset, money, style);
// centrer le texte par rapport au rectangle
Phaser.Display.Align.In.Center(textMoney, rectMoney);


// Création du rectangle de fond pour le texte
const rectAge = this.add.rectangle(100, 25,  50, 15, 0xffffff);
// Création du texte
const age = this.player.getAge();
const textAge = this.add.text(rectAge.x, rectAge.y - textOffset, age, style);
// centrer le texte par rapport au rectangle
Phaser.Display.Align.In.Center(textAge, rectAge);

  // here, we create the background image
  // and the player (cf model/player.js)
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgscene');

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