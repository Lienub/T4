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
    //Recup des images
    this.load.image('bgscene', bc);
    this.load.image('pnj', pnjImg);
    //loadassets player
    Player.loadAssets(this);
    //loadassets pnj
    PNJ.loadAssets(this);
  }

  //Récup des donnés passées en paramètres
  init(data) {
    console.log('ThirdGameScene constructor');
    console.log(data.money, data.age);
    //Récup des données
    this.money = data.money;
    this.age = data.age;
    this.noble = data.noble;
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
    
    //Putb noble a false
    this.noble = false;

    //Si le joueur a plus de 200 euros, il devient noble
    if(this.money >= 200){
      this.noble = true;
    }

    // Création du timer de 3 secondes
    this.timer = this.time.addEvent({ delay: 3000, loop: true });

    // afficher l'image de fond
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgscene');

    // créer le joueur
    this.player = new Player(this, 100, 450, this.money, this.age,this.noble);
    console.log(this.player.x, this.player.y);
    console.log(this.player);

    // Création du rectangle de fond pour le texte
    this.rectMoney = this.add.rectangle(40, 25, 50, 15, 0xffffff);

    // Création du texte
    this.money = this.player.getMoney();
    this.textMoney = this.add.text(this.rectMoney.x, this.rectMoney.y - textOffset, 'Money '+this.money, style);

    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(this.textMoney, this.rectMoney);

    // Création du rectangle de fond pour le texte
    this.rectAge = this.add.rectangle(100, 25, 50, 15, 0xffffff);

    // Création du texte
    this.age = this.player.getAge();
    this.textAge = this.add.text(this.rectAge.x, this.rectAge.y - textOffset, 'Age '+this.age, style);

    // centrer le texte par rapport au rectangle
    Phaser.Display.Align.In.Center(this.textAge, this.rectAge);
  
    this.pnj1 = new PNJ(this,640,450,'pnj',"Me defierez-vous à une partie de pétanque !?",true,1,'petanque');
    this.pnj2 = new PNJ(this,130,250,'pnj',"J'ai entendu dire que vous avez décidé de consacrer votre vie à la spiritualité. Seriez vous intéressé pas le fait de devenir moine ?",true,2);
    this.pnj3 = new PNJ(this,580,235,'pnj',"J'ai entendu dire que vous cherchiez à acquérir le titre de noble. Souhaiteriez vous acheté la terre seigneuriale nouvellement libre ?",true,0,'',this.player);
    this.pnj4 = new PNJ(this,880,240,'pnj',"On dit que Honorable homme chercherait à séduire la fille du roi", false);
    this.pnj5 = new PNJ(this,280,400,'pnj',"J'ai entendu dire que le roi cherchait un chaussetier personne. Se faire engager par le roi ?",true,0,'',this.player);


    //   // Création du bouton
    // const button = this.add.text(400, 50, 'Game Over', { fill: '#0f0' }).setOrigin(0.5);
    // button.setInteractive({ useHandCursor: true });
    // console.log('After create 3ème scène');
    // // Action lors du clic sur le bouton
    // button.on('pointerdown', () => {
    //   this.scene.start('GameOverScene', { message: '' });
    // })

    // Créer une minuterie qui appelle la fonction incrementAge toutes les 2 secondes
    this.time.addEvent({
      delay: 2500, // 2,5 secondes
      callback: this.incrementAge,
      callbackScope: this,
      loop: true // répéter indéfiniment
    });
    }

    // Fonction pour incrémenter le nombre de pièces
    incrementMoney(amount) {
      //Ajout de la
      this.money += amount;
      //Test 
      console.log("Money : " + this.money);
      //Ajout de la money au joueur
      this.player.addMoney(this.money);
      //Mise à jour du texte
      this.textMoney.setText('Money '+this.money);

      // Si 200 > ecu peut devenir noble
      if(this.money >= 200){
        this.noble = true;
      }
      else{
        this.noble = false;
      }
    }

  //Incrémentation de l'âge
  incrementAge() {
    // Age + 1
    this.age += 1;
    console.log("Age : " + this.age);
    //Mise à jour du texte
    this.textAge.setText('Age '+ this.age);
    //Mise à jour de l'âge du joueur
    this.player.setAge(this.age);
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

    //Varibale cursor
    const cursors = this.input.keyboard.createCursorKeys();
    //si flèche gauche
    if(cursors.left.isDown) {
      this.player.move('left');
    }
    //si flèche droite
    else if(cursors.right.isDown) {
      this.player.move('right');
    }
    //si flèche haut
    else if(cursors.up.isDown) {
      this.player.move('up');
    }
    //si flèche bas
    else if(cursors.down.isDown) {
      this.player.move('down');
    }
    //si aucune flèche
    else {
      this.player.stop();
    }

  }
}