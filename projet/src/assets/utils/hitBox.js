import phaser from 'phaser';

export default class HitBox extends phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, color, alpha) {
    super(scene, x, y, width, height, color, alpha);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.immovable = true;
    this.body.moves = false;
    this.body.setAllowGravity(false);

    this.scene.physics.add.collider(this.scene.player, this);
  }
}