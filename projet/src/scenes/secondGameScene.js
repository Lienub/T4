import Phaser from 'phaser';
import bc from '../assets/img/bg_2.png';
import PNJ from '../model/pnj';
import Player from '../model/player';
import pnjImg from '../assets/img/pnj.png';


export default class SecondGameScene extends Phaser.Scene {

    constructor() {
        super({ key: 'SecondGameScene' });
    }

    init(data) {
      console.log('SecondGameScene constructor');
      console.log('SecondGameScene constructor 2');
      console.log(data.money, data.age);
      this.money = data.money;
      this.age = data.age;
      this.noble = data.noble;
    }


    preload() {
        this.load.image('bg', bc);
        Player.loadAssets(this);
        this.load.image('pnj', pnjImg);
        PNJ.loadAssets(this);
    }

    create() {
 // Creating the scene
// Style des textes dans les rectangles
const style = {
  fontFamily: 'Arial',
  fontSize: '24',
  color: '#000000',
  align: 'center',
};


// décalage du texte pour chaque rectangle
const textOffset = 20;

// Adding the background image
const background = this.add.image(0, 0, 'bg').setOrigin(0, 0);
background.setScale(
  this.game.config.width / background.width,
  this.game.config.height / background.height
);

// Creating the player (cf model/player.js)
this.player = new Player(this, 100, 450, this.money, this.age,this.noble);
console.log(this.player);

// Création du rectangle de fond pour le texte
this.rectMoney = this.add.rectangle(40, 25, 50, 15, 0xffffff);
// Création du texte
this.money = this.player.getMoney();
this.textMoney = this.add.text(this.rectMoney.x, this.rectMoney.y - textOffset, 'Money ' +this.money, style);
// centrer le texte par rapport au rectangle
Phaser.Display.Align.In.Center(this.textMoney, this.rectMoney);

// Création du rectangle de fond pour le texte
this.rectAge = this.add.rectangle(100, 25, 50, 15, 0xffffff);
// Création du texte
this.age = this.player.getAge();
this.textAge = this.add.text(this.rectAge.x, this.rectAge.y - textOffset, 'Age ' + this.age, style);
// centrer le texte par rapport au rectangle
Phaser.Display.Align.In.Center(this.textAge, this.rectAge);

console.log('After create 2ème scène');

this.pnj1 = new PNJ(this,860,500,'pnj',"Il se déroule, demain, un séminaire d'apprentissage de la vie spirituel des moines. Souhaitez vous vous y rendre ?",true,2,);
this.pnj2 = new PNJ(this,130,250,'pnj',"Oh, l'ami, ça fait longtemps, voulez-vous passer boire le thé chez moi ?",true, 1, 'door');
this.pnj3 = new PNJ(this,580,235,'pnj',"Lors du marché de demain, de nombreuses familles de noble des terres voisines arriveront, si j'étais vous, je préparerais mes meilleurs création afin de leur vendre. Se préparer pour le marché ?",true,5,'',this.player);
this.pnj4 = new PNJ(this,880,300,'pnj',"On dit que le fils du roi n'est guère intéressé par sa succession", false);
this.pnj5 = new PNJ(this,350,400,'pnj',"Un petit tour de cheval, cela vous dit ?",true,4,'', this.player);



    // Créer une minuterie qui appelle la fonction incrementAge toutes les 2 secondes
    this.time.addEvent({
      delay: 2500, // 2 secondes
      callback: this.incrementAge,
      callbackScope: this,
      loop: true // répéter indéfiniment
    });

    }

    incrementAge() {
      this.age += 1;
      console.log("Age : " + this.age);
      this.textAge.setText('Age '+ this.age);
      this.player.setAge(this.age);
    }

    incrementMoney(amount) {
      this.money += amount;
      console.log("Money : " + this.money);
      this.player.addMoney(this.money);
      this.textMoney.setText('Money ' +this.money);
    }


    // Updating the scene
    // here, we update the player movements
    // based on the keyboard inputs,
    // we call the player.move() function (cf model/player.js)
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