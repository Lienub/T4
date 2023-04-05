import Phaser from 'phaser';
import bgDefault from '../assets/img/bg_default.png';
import Player from '../model/player';
import Pnj from '../model/pnj';
import Bubble from '../model/bubble';
export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    this.load.image('bgDefault', bgDefault);
    Player.loadAssets(this);
    Pnj.loadAssets(this);
  }

  create() {
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bgDefault');
    this.player = new Player(this, 100, 450);
    this.pnj1 = new Pnj(this, 985,320,Bubble); 
  }

  update() {
    const cursors = this.input.keyboard.createCursorKeys();
    if(cursors.left.isDown) {
      this.player.move('left');
    }
    else if(cursors.right.isDown) {
      this.player.move('right');
    }
    else if(cursors.up.isDown) {
      this.player.move('up');
    }
    else if(cursors.down.isDown) {
      this.player.move('down');
    }
    else {
      this.player.stop();
    }
  }
}
