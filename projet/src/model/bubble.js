import bubbleImage from '../assets/img/bubble.png';

export default class Bubble extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'bubble');
    this.scene = scene;
    this.image = this.scene.add.image(x, y, 'bubble');

    this.dialogText = this.scene.add.text(x - 50, y + 10, '', { font: '16px Arial', fill: '#ffffff' });
    this.dialogText.visible = false;
  }

  setText(text) {
    this.dialogText.setText(text);
    this.dialogText.visible = true;
  }

  toggle() {
    this.dialogText.visible = !this.dialogText.visible;
  }

  static loadAssets(scene) {
    scene.load.image('bubble', bubbleImage);
  }
}
