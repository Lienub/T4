import Phaser from 'phaser';
import idle from '../assets/img/player/pl_idle.png';
import walkFront from '../assets/img/player/pl_frontWalk.png';
import walkBack from '../assets/img/player/pl_backWalk.png';
import walkLeft from '../assets/img/player/pl_leftWalk.png';
import walkRight from '../assets/img/player/pl_rightWalk.png';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, idle);
    this.scene = scene;

    this.scene.add.existing(this);

    this.scene.physics.add.existing(this);

    this.body.setSize(70, 70);
    this.body.setOffset(16, 16);

    this.scene.anims.create({
        key: 'walkFront_anim',
        frames: this.scene.anims.generateFrameNumbers('walkFront', { start: 0, end: 29 }),
        frameRate: 30,
        repeat: -1
    });

    this.scene.anims.create({
        key: 'walkBack_anim',
        frames: this.scene.anims.generateFrameNumbers('walkBack', { start: 0, end: 29 }),
        frameRate: 30,
        repeat: -1
    });

    this.scene.anims.create({
        key: 'walkLeft_anim',
        frames: this.scene.anims.generateFrameNumbers('walkLeft', { start: 0, end: 29 }),
        frameRate: 30,
        repeat: -1
    });

    this.scene.anims.create({
        key: 'walkRight_anim',
        frames: this.scene.anims.generateFrameNumbers('walkRight', { start: 0, end: 29 }),
        frameRate: 30,
        repeat: -1
    });

    this.scene.anims.create({
        key: 'idleFront_anim',
        frames: [ { key: 'idle', frame: 0 } ],
        frameRate: 30
    });
  }

    static loadAssets(scene) {
        scene.load.image('idle', idle);

        scene.load.spritesheet('walkFront', walkFront, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkBack', walkBack, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkLeft', walkLeft, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkRight', walkRight, { frameWidth: 70, frameHeight: 70 });
    }

    create() {

    }
    
    move(dir) {
        switch (dir) {
            case 'up':
                this.anims.play('walkBack_anim', true);
                this.setVelocityY(-100);
                break;
            case 'down':
                this.anims.play('walkFront_anim', true);
                this.setVelocityY(100);
                break;
            case 'left':
                this.anims.play('walkLeft_anim', true);
                this.setVelocityX(-100);
                break;
            case 'right':
                this.anims.play('walkRight_anim', true);
                this.setVelocityX(100);
                break;
            default:
                this.anims.play('idleFront_anim', true);
                this.setVelocity(0);
                break;
        }
    }

    stop() {
        this.anims.play('idleFront_anim', true);
        this.setVelocity(0);
    }

}