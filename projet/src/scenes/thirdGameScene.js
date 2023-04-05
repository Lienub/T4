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
    this.load.image('pnj', pnjImg);
    Player.loadAssets(this);
    PNJ.loadAssets(this);
  }

  init(data) {
    console.log('ThirdGameScene constructor');
    console.log(data.money, data.age);
    this.money = data.money;
    this.age = data.age;
  }

  create() {
    // Creating the scene

    //Style des textes dans les rectangles
    const style = {
      fontFamily: 'Arial',
      fontSize: '24',
      color: '#000000',
      align: 'center',
    };

    // décalage du texte pour chaque rectangle
    const textOffset = 20;

    // Création du timer de 3 secondes
    this.timer = this.time.addEvent({ delay: 3000, loop: true });

    // afficher l'image de fond
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgscene');

    // créer le joueur
    this.player = new Player(this, 100, 450, this.money, this.age,this.noble);
    console.log(this.player.x, this.player.y);
    console.log(this.player);

    // Création du rectangle de fond pour le texte
    const rectMoney = this.add.rectangle(40, 25, 50, 15, 0xffffff);

    // Création du texte
    const money = this.player.getMoney();
    const textMoney = this.add.text(rectMoney.x, rectMoney.y - textOffset, money, style);

    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(textMoney, rectMoney);

    // Création du rectangle de fond pour le texte
    const rectAge = this.add.rectangle(100, 25, 50, 15, 0xffffff);

    // Création du texte
    const age = this.player.getAge();
    const textAge = this.add.text(rectAge.x, rectAge.y - textOffset, age, style);

    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(textAge, rectAge);
  
    this.pnj1 = new PNJ(this,640,450,'pnj',"Me defierez-vous à une partie de pétanque !?",true,1,'petanque');
    this.pnj2 = new PNJ(this,130,250,'pnj',"J'ai entendu dire que vous avez décidé de consacrer votre vie à la spiritualité. Seriez vous intéressé pas le fait de devenir moine ?",true,2);
    this.pnj3 = new PNJ(this,580,235,'pnj',"J'ai entendu dire que vous cherchiez à acquérir le titre de noble. Souhaiteriez vous acheté la terre seigneuriale nouvellement libre ?",true,0,'',this.player);
    this.pnj4 = new PNJ(this,880,240,'pnj',"On dit que Honorable homme chercherait à séduire la fille du roi", false);
    this.pnj5 = new PNJ(this,280,400,'pnj',"J'ai entendu dire que le roi cherchait un chaussetier personne. Se faire engager par le roi ?",true,0,'',this.player);


      // Création du bouton
    const button = this.add.text(400, 50, 'Game Over', { fill: '#0f0' }).setOrigin(0.5);
    button.setInteractive({ useHandCursor: true });
    console.log('After create 3ème scène');
    // Action lors du clic sur le bouton
    button.on('pointerdown', () => {
      this.scene.start('GameOverScene', { message: '' });
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