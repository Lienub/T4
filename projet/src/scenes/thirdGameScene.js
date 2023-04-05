import Phaser from 'phaser';
import bc from '../assets/img/bg_3.png';
import Player from '../model/player';
import PNJ from '../model/pnj';
import pnjImg from '../assets/img/pnj.png';



export default class ThirdGameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'ThirdGameScene' });
    }

    preload() {
        this.load.image('bgscene', bc);
        Player.loadAssets(this);
        this.load.image('pnj', pnjImg);
        PNJ.loadAssets(this);
    }

    create() {
 // Creating the scene
  // here, we create the background image
  // and the player (cf model/player.js)
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgscene');
    this.player = new Player(this, 100, 450);

    this.pnj6 = new PNJ(this,640,450,'pnj',"Me defierez-vous à une partie de pétanque !?");
    this.pnj6 = new PNJ(this,130,250,'pnj',"J'ai entendu dire que vous avez décidé de consacrer votre vie à la spiritualité. Seriez vous intéressé pas le fait de devenir moine ?");
    this.pnj6 = new PNJ(this,580,235,'pnj',"J'ai entendu dire que vous cherchiez à acquérir le titre de noble. Souhaiteriez vous acheté la terre seigneuriale nouvellement libre ?");
    this.pnj6 = new PNJ(this,880,240,'pnj',"On dit que Honorable homme chercherait à séduire la fille du roi");
    this.pnj6 = new PNJ(this,280,400,'pnj',"J'ai entendu dire que le roi cherchait un chaussetier personne. Se faire engager par le roi ?");


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