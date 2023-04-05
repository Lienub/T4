import Phaser from 'phaser';

import { FirstGameScene } from './scenes/FirstGameScene';
import { SecondGameScene } from './scenes/SecondGameScene';
import { ThirdGameScene } from './scenes/ThirdGameScene';
console.log('Test 1')
const config = {

    type: Phaser.AUTO,
    width: 500,
    height: 300,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: {y : 0},
        }
    },
    scene: [FirstGameScene, SecondGameScene, ThirdGameScene]

};
console.log('Test 2')
const game = new Phaser.Game(config);
console.log('Test 3')