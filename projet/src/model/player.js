// Description: Player class
// This class is used to create the player
// It contains the player animations
// It contains the player movements
import Phaser from 'phaser';
import idle from '../assets/img/player/pl_idle.png';
import walkFront from '../assets/img/player/pl_frontWalk.png';
import walkBack from '../assets/img/player/pl_backWalk.png';
import walkLeft from '../assets/img/player/pl_leftWalk.png';
import walkRight from '../assets/img/player/pl_rightWalk.png';

// Creating a class named Player
// This class extends the Phaser.Physics.Arcade.Sprite class
// This class contains the player animations
// This class contains the player movements
export default class Player extends Phaser.Physics.Arcade.Sprite {
  // in the constructor, we create the player animations
  // and we add the player to the scene
  constructor(scene, x, y, money, age, texture, frame) {
    super(scene, x, y, idle);
    this.scene = scene;
    this.money = money;
    this.age = age;
    this.noble = false;


    this.scene.add.existing(this);

    this.scene.physics.add.existing(this);

    // Set the hitbox to be the same size as the sprite
    this.body.setSize(this.body.width, this.body.height);

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


     getAge(){
        return this.age;
    }

        
    getMoney(){
        return this.money;
    }

    addMoney(money){
        this.money += money;
    }

    setAge(age){
        this.age = age;
    }

    // This function is used to load the player assets
    // here, we load the player spritesheets composed of 30 frames of 70x70 pixels each
    // and the player idle image
    static loadAssets(scene) {
        scene.load.image('idle', idle);

        scene.load.spritesheet('walkFront', walkFront, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkBack', walkBack, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkLeft', walkLeft, { frameWidth: 70, frameHeight: 70 });
        scene.load.spritesheet('walkRight', walkRight, { frameWidth: 70, frameHeight: 70 });
    }

    create() {

    }
    
    // This function is used to move the player
    // It takes a direction as a parameter
    // It plays the corresponding animation
    // It sets the velocity of the player
    move(dir) {

        switch(dir) {
            case 'left':
                this.anims.play('walkLeft_anim', true);
                this.setVelocityX(-200);
                this.setVelocityY(0);
                break;
            case 'right':
                this.anims.play('walkRight_anim', true);
                this.setVelocityX(200);
                this.setVelocityY(0);
                break;
            case 'up':
                this.anims.play('walkBack_anim', true);
                this.setVelocityY(-200);
                this.setVelocityX(0);
                break;
            case 'down':
                this.anims.play('walkFront_anim', true);
                this.setVelocityY(200);
                this.setVelocityX(0);
                break;
        }

          // Get the bounds of the game world
        const { width, height } = this.scene.scale.gameSize;

        // Check if the player has gone out of bounds
        if (this.x < 0) {
            this.x = width;
        } else if (this.x > width) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = height;
        } else if (this.y > height) {
            this.y = 0;
        }
    }

    // This function is used to stop the player
    // It plays the idle animation
    // It sets the velocity of the player to 0
    stop() {
        this.anims.play('idleFront_anim', true);
        this.setVelocity(0);
    }

}