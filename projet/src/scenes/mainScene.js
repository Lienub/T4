import Phaser from 'phaser';
import bgDefault from '../assets/img/bg_default.png';
import Player from '../model/player';
import PNJ from '../model/pnj';
import HitBox from '../assets/utils/hitBox';
import box from '../assets/img/msgBox.png';
import key from '../assets/img/e-key.png';
import Parchment from '../model/parchment';



// Creating a scene named MainScene,
// which will be the main scene of the game
// This scene will contains the player,
// some PNJs and the map
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
    //age de départ
    this.age = 12;
    //argent de départ
    this.money = 0;
  }
  preload() {
    this.load.image('bgDefault', bgDefault);
    this.load.image('dialog-box', box)
    this.load.image('key', key)
  
    Player.loadAssets(this);
    PNJ.loadAssets(this, "pnj1");
    Parchment.loadAssets(this);
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


    this.onDialog = false;
    this.boulangerie = false;
    this.chaussure = false;

    // Création du timer de 3 secondes
    this.timer = this.time.addEvent({delay: 2000, loop: true});

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgDefault');

    //this.pnjDemo = new PNJ(this, 493, 316, 'pnj', "Bonjour, je suis un PNJ", true, 1, 'door');

    this.player = new Player(this, 100, 400, this.money, this.age,false);
    //console.log(this.player);
    // Création du rectangle de fond pour le texte
    this.rectMoney = this.add.rectangle(40, 25,  50, 15, 0xffffff);
    // Création du texte
    this.money = this.player.getMoney();
    this.textMoney = this.add.text(this.rectMoney.x, this.rectMoney.y - textOffset, 'Money ' + this.money, style);
    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(this.textMoney, this.rectMoney);


    // Création du rectangle de fond pour le texte
    this.rectAge = this.add.rectangle(100, 25,  50, 15, 0xffffff);
    // Création du texte
    this.age = this.player.getAge();
    this.textAge = this.add.text(this.rectAge.x, this.rectAge.y - textOffset, 'Age ' + this.age, style);
    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(this.textAge, this.rectAge);

    //this.player = new Player(this, 400, 350);
    this.pnj = new PNJ(this, 70, 300, 'pnj', "Saviez vous que nous étions près de 4000 habitants, ici même, à Amboise.",false);
    this.pnj2 = new PNJ(this, 400, 250, 'pnj', "Vous avez remarqué, la vie d'un moine se concentre sur ce qu'il y a de réellement essentiel dans la vie.",false);
    this.pnj3 = new PNJ(this, 300, 100, 'pnj', "Un petit tour à cheval, cela vous dit ?",true,4,'',this.player);
    this.pnj4 = new PNJ(this, 600, 300, 'pnj', "Un nouveau marché s'offre à moi. Souhaite tu me rejoindre dans la fabrication du pain ? L'accompagner afin de devenir boulanger ?",true,6,'',this.player);
    this.pnj5 = new PNJ(this, 700, 400, 'pnj', "J'aimerais vous acheter 5 chaussures, est-ce possible ?",true, 5,'',this.player);

    //Creating the hitboxes
    this.hitBox = new HitBox(this, 132, 142, 264, 284, 0x000000, 0);
    this.hitBox2 = new HitBox(this, 467 + (465/2), 2 + (285/2), 495, 285, 0x000000, 0);
    this.hitBox3 = new HitBox(this, 262 + (206/2), 0 + (18/2), 206, 18, 0x000000, 0);
    this.hitBox4 = new HitBox(this, 3 + (959/2), 420 + (280/2), 959, 280, 0x000000, 0);
    

    // Créer une minuterie qui appelle la fonction incrementAge toutes les 2 secondes
    this.time.addEvent({
      delay: 2500, // 2,5 secondes
      callback: this.incrementAge,
      callbackScope: this,
      loop: true // répéter indéfiniment
    });
}

incrementAge() {
  this.age += 1;
  console.log("Age : " + this.age);
  this.textAge.setText('Age '+this.age);
  this.player.setAge(this.age);
}

incrementMoney(amount, type) {
  this.money += amount;
  console.log("Money : " + this.money);
  this.player.addMoney(this.money);
  
  if(type == 1){
    this.boulangerie = true;
  }
  if(type == 2){
    this.chaussure = true;
  }
  this.textMoney.setText('Money '+ this.money);
}



update() {
    this.money = this.player.getMoney();
    console.log(this.player.getAge());
    if (this.player.getAge() > 62){
      this.scene.start('GameOverScene', { win: 'false', message: 'age' });
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
  }

  
}
