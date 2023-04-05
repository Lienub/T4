import pnj1 from '../assets/img/pnj.png';
import Bubble from "../model/bubble";

export default class Pnj extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'pnj1');
    this.scene = scene;

    // Add the image to the scene
    this.image = this.scene.add.image(x, y, 'pnj1');

    this.scene.physics.add.existing(this);
    this.body.setSize(70, 70);
    this.body.setOffset(16, 16);

    this.bubble = new Bubble(scene, x, y);

    this.setInteractive();
    this.on('pointerdown', () => {
      this.toggleDialog();
    });

  }
  
  toggleDialog() {
    this.bubble.toggle();
  }

  static loadAssets(scene) {
    scene.load.image('pnj1', pnj1);
    Bubble.loadAssets(scene);
  }
}
