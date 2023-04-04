import Phaser from 'phaser';
import bgDefault from '../assets/img/bg_default.png';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('bgDefault', bgDefault);
  }

  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgDefault');
  }
}