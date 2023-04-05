import pnj1 from '../assets/img/pnj.png';

export default class Pnj extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, pnj1);
    this.scene = scene;

    // Add the image to the scene
    this.image = this.scene.add.image(x, y, 'pnj1');

    this.scene.physics.add.existing(this);
    this.body.setSize(70, 70);
    this.body.setOffset(16, 16);

    this.setInteractive();
    this.on('pointerdown', () => {
      this.toggleDialog();
    });

    this.dialogText = this.scene.add.text(x + 10, y + 50, 'Bonjour je suis un habitant d\'Amboise', { font: '16px Arial', fill: '#ffffff' });
    this.dialogText.visible = false;
  }

  toggleDialog() {
    this.dialogText.visible = !this.dialogText.visible;
  }

  static loadAssets(scene) {
    scene.load.image('pnj1', pnj1);
  }
}
