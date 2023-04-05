import bubbleImage from '../assets/img/bubble.png';

export default class Bubble extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, txt) {
    super(scene, x, y);

    // Ajoute le fond de la bulle
    const bubbleBg = scene.add.image(x+60, y-50, 'bubble');
    bubbleBg.setScale(0.5);

    // Ajoute le texte dans la bulle
    const bubbleText = scene.add.text(x+65, y-55, txt, {
      fontSize: '16px',
      fill: '#ff0000',
      wordWrap: {
        width: bubbleBg.width * 0.8,
      },
      align: 'center',
    });
    bubbleText.setOrigin(0.5);

    // Rend la bulle invisible par défaut
    this.visible = false;
  }

  // Méthode pour afficher la bulle
  show() {
    this.visible = true;
  }

  // Méthode pour masquer la bulle
  hide() {
    this.visible = false;
  }

  // Méthode pour modifier le texte de la bulle
  setText(text) {
    const bubbleText = this.getAt(1);
    bubbleText.setText(text);
  }


  static loadAssets(scene) {
    scene.load.image('bubble', bubbleImage);
  }
}
