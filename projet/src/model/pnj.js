import Phaser from 'phaser';
import pnj1 from '../assets/img/pnj.png';
import Dialog from '../assets/utils/bubble';

export default class Pnj extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, dialog, choice, w_type, d_type,player) {
    super(scene, x, y, texture);
    this.dialogText = dialog;
    this.scene = scene;
    this.choice = choice;
    this.w_type = w_type;
    this.d_type = d_type;
    this.player = player;

    this.scene.add.existing(this);

    this.scene.physics.add.existing(this);

    // Set the hitbox to be the same size as the sprite
    this.body.setSize(this.width, this.height);
    this.body.setOffset(0, 0);
    // Set the hitbox to be a circle with a radius of half the sprite width
    this.body.immovable = true;

    // Add an event listener to the Update event
    this.scene.events.on('update', this.update, this);

    this.setInteractive();
    this.onDialog = false;

    this.keyImage = this.scene.add.image(this.x, this.y - 50, 'key').setOrigin(0.5, 0.5).setVisible(false);

  }
  static loadAssets(scene, type) {
    switch (type) {
      case 'pnj1':  
        scene.load.image('pnj', pnj1);
        break;
      default:
        scene.load.image('pnj', pnj1);
    }
  }

  update() {
     // Check if the player is close enough to the Pnj sprite
     const distance = Phaser.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y);
     if (distance < 50 && !this.onDialog) { // Adjust the distance as needed
      //display key image
      this.keyImage.setVisible(true);
       // Check if the player presses Enter
       if (this.scene.input.keyboard.checkDown(this.scene.input.keyboard.addKey('E'), 250) && !this.onDialog) {
        this.onDialog = true;  
        // Show the dialog
          this.dialog = new Dialog(this.scene, this, this.dialogText, this.choice, this.w_type, this.d_type,this.player);
          this.scene.player.immovable = true;
        } 
        this.onDialog = false;
     }
     else{
      this.keyImage.setVisible(false);
     }
   }
 
   static loadAssets(scene, type) {
     switch (type) {
       case 'pnj1':  
         scene.load.image('pnj', pnj1);
         break;
       default:
         scene.load.image('pnj', pnj1);
     }
   }

}


