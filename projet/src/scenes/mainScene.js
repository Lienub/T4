import Phaser from 'phaser';
import bgDefault from '../assets/img/bg_default.png';
import Player from '../model/player';
import PNJ from '../model/pnj';
//import Bubble from '../model/bubble';
import pnjImg from '../assets/img/pnj.png';
import HitBox from '../assets/utils/hitBox';



// Creating a scene named MainScene,
// which will be the main scene of the game
// This scene will contains the player,
// some PNJs and the map
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('bgDefault', bgDefault);
    
    Player.loadAssets(this);
    this.load.image('pnj', pnjImg);
    PNJ.loadAssets(this);
  }

  create() {
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
    this.money = this.player.getMoney();
    const textMoney = this.add.text(rectMoney.x, rectMoney.y - textOffset, this.money, style);
    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(textMoney, rectMoney);


    // Création du rectangle de fond pour le texte
    const rectAge = this.add.rectangle(100, 25,  50, 15, 0xffffff);
    // Création du texte
    this.age = this.player.getAge();
    const textAge = this.add.text(rectAge.x, rectAge.y - textOffset, this.age, style);
    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(textAge, rectAge);

    this.player = new Player(this, 400, 350);
    this.pnj = new PNJ(this, 70, 300, 'pnj', "Saviez vous que nous étions près de 4000 habitants, ici même, à Amboise.");
    this.pnj2 = new PNJ(this, 400, 250, 'pnj', "Vous avez remarqué, la vie d'un moine se concentre sur ce qu'il y a de réellement essentiel dans la vie.");
    this.pnj3 = new PNJ(this, 300, 100, 'pnj', "Un petit tour à cheval, cela vous dit ?");
    this.pnj4 = new PNJ(this, 600, 300, 'pnj', "Un nouveau marché s'offre à moi. Souhaite tu me rejoindre dans la fabrication du pain ? L'accompagner afin de devenir boulanger ?");
    this.pnj5 = new PNJ(this, 700, 400, 'pnj', "J'aimerais vous acheter 5 chaussures, est-ce possible ?");

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
      this.scene.start('GameOverScene', { win: 'false', message: 'age' });
    });


    const nextScene_button = this.add.text(200, 50, 'Next Scene', { fill: '#0f0' }).setOrigin(0.5);
    nextScene_button.setInteractive({ useHandCursor: true });
    
    // Action lors du clic sur le bouton
    nextScene_button.on('pointerdown', () => {
      this.scene.start('SecondGameScene', {player : this.player});});
  }
    

  // Updating the scene
  // here, we update the player movements
  // based on the keyboard inputs,
  // we call the player.move() function (cf model/player.js)
  update(time,delta) {
    this.money = this.player.getMoney();

    // Si le time est à 3
    if (this.timer.getProgress() === 3) {
      // On reset le timer
      this.timer.reset();
      this.age = this.age+1;
      // On ajoute 1 à l'âge du joueur
    }

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
