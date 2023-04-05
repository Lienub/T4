import Parchment from "../../model/parchment";

export default class Dialog {
  constructor(scene, pnj, text, isChoice, scenario, death,player) {
    // Store reference to scene and PNJ
    this.scene = scene;
    this.pnj = pnj;
    this.isChoice = isChoice;
    this.scenario = scenario;
    this.death = death;
    this.player = player;

    //set the coordinates of the dialog box
    this.x = 12;
    this.y = 542;

    // Create dialog box sprite
    this.dialogBox = this.scene.add.image(this.x + (768/2), this.y + (185/2), 'dialog-box');
    this.dialogBox.setDepth(1);

    Dialog.isOpen = false;

    // Create dialog text
    this.dialogText = this.scene.add.text(this.dialogBox.x, this.dialogBox.y, text, {
      fontFamily: 'Arial',
      fontSize: '18px',
      color: '#000000',
      wordWrap: { width: 500, useAdvancedWrap: true }
    });
    this.dialogText.setDepth(2);

    // Set the dialog open flag to true
    Dialog.isOpen = true;

    if (this.isChoice) {
      // Create choice options
      this.option1 = this.scene.add.text(this.dialogBox.x, this.dialogBox.y + 20, 'Oui', {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        wordWrap: { width: 500, useAdvancedWrap: true }
      });
      this.option1.setDepth(2);
      this.option1.setInteractive();
      this.option1.on('pointerup', () => {
        this.selectOption(1);
      });

      this.option2 = this.scene.add.text(this.dialogBox.x, this.dialogBox.y + 50, 'Non', {
        fontFamily: 'Arial',
        fontSize: '18px',
        color: '#000000',
        wordWrap: { width: 500, useAdvancedWrap: true }
      });
      this.option2.setDepth(2);
      this.option2.setInteractive();
      this.option2.on('pointerup', () => {
        this.selectOption(2);
      });

      // Set the selected option to null
      this.selectedOption = null;
    } else {
      // Create close button
      this.closeButton = this.scene.add.rectangle(this.x + (768/2), this.y + (185/2), 768, 185, 0x000000, 0);
      this.closeButton.setDepth(2);
      this.closeButton.setInteractive();
      this.closeButton.on('pointerup', () => {
        this.destroy();
      });

      this.scene.input.keyboard.on('keydown-ENTER', () => {
        this.destroy();
      });
    }
  }

  selectOption(option) {
    // Set the selected option and destroy the dialog box
    this.selectedOption = option;
    if(option == 2){
      this.destroy();
    }
    else{
      if(this.scenario == 0){
        console.log("type 0")
        //start gameover scene si le joueur est éligible à devenir noble
        if(this.player.noble == true){
          this.scene.scene.start('GameOverScene', { win: 'win' });
        }
        //sinon il meurt de vieillesse
        else{
          this.scene.scene.start('GameOverScene', { win: 'loose', message: 'age' });
        }
      }
      else if(this.scenario == 1){
        console.log("type 1")
        this.scene.scene.start('GameOverScene', { win: 'dead', message: this.death });
      }
      else if(this.scenario == 2){
        console.log("type 2")
        this.scene.scene.start('GameOverScene', { win: 'monk', message: 'door' });
      } 
      else if(this.scenario == 4){
        console.log("type 4")
        console.log(this.player);
        console.log("44");
        //si la scène est la scène 1, on passe à la scène 2
        if(this.scene.scene.key == "FirstGameScene"){
          this.scene.scene.start('SecondGameScene', {money : this.player.money, age : this.player.age});
        }
        //si la scène est la scène 2, on passe à la scène 3
        if(this.scene.scene.key == "SecondGameScene"){
          this.scene.scene.start('ThirdGameScene', {money : this.player.money, age : this.player.age});
        }
      }
      else if(this.scenario == 5){
        console.log("type 5")
        this.destroy();
        //L'argent est ajouté au joueur
        this.player.money += 100;
        //Le joueur devient éligible à devenir noble
        this.player.noble = true;
        //Un objet Parchemin avec le texte adéquat est affiché
        this.parchemin = new Parchment(this.scene, 480, 360, "parchemin", "noble", this.player);
        //se ferme au click
        this.parchemin.setInteractive();
        this.parchemin.on('pointerup', () => {
          this.parchemin.destroy();
        }, this);
      }
      else if(this.scenario == 6){
        console.log("type 6")
        this.destroy();
        //L'argent est ajouté au joueur
        this.player.money = 0;
        //Un objet Parchemin avec le texte adéquat est affiché 
        this.parchemin = new Parchment(this.scene, 480, 360, "parchemin", "poor", this.player);
        //se ferme au click
        this.parchemin.setInteractive();
        this.parchemin.on('pointerup', () => {
          this.parchemin.destroy();
        }, this);
      }
  }
} 

  destroy() {

    Dialog.isOpen = false;
    // Destroy all dialog elements
    this.dialogBox.destroy();
    this.dialogText.destroy();

    if (this.isChoice) {
      this.option1.destroy();
      this.option2.destroy();
    } else {
      this.closeButton.destroy();
    }

    // Enable PNJ movement
    this.pnj.canMove = true;
  }

}