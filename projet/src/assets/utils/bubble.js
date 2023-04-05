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
    this.dialogText = this.scene.add.text(this.dialogBox.x - 350, this.dialogBox.y - 15, text, {
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
      this.option1 = this.scene.add.text(this.dialogBox.x + 150, this.dialogBox.y - 20, 'Oui', {
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

      this.option2 = this.scene.add.text(this.dialogBox.x + 150, this.dialogBox.y + 20, 'Non', {
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
        //start gameover scene
        this.scene.scene.start('GameOverScene', { win: 'win', message: 'door' });
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
        this.scene.scene.start('SecondGameScene', {money : this.player.money, age : this.player.age});
      }
  }
} 

  destroy() {

    Dialog.isOpen = false;
    this.scene.onDialog = false;
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