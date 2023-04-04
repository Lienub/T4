import Phaser from 'phaser';
import MainScene from './scenes/mainScene';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight - 5,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: {y : 0},
        }
    },
    scene: [MainScene]

};


const game = new Phaser.Game(config);

