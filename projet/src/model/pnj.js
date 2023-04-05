import pnj from '../assets/img/pnj.png';
import Bubble from "../model/bubble";

export default class Pnj extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, imageKey, dialog) {
    super(scene, x, y, imageKey);
    this.dialog = dialog;
    this.scene = scene;
    this.image = this.scene.add.image(x, y, imageKey);
    this.setInteractive();

    this.on('pointerdown', () => {
      console.log('click');
      console.log(this.dialog);
      const bubble = new Bubble(scene, x, y, dialog);
      scene.add.existing(bubble);
      if (bubble.visible) {
        bubble.hide();
      } else {
        bubble.show();
      }
    });
  }
  

  static loadAssets(scene) {
    Bubble.loadAssets(scene);
  }
}
