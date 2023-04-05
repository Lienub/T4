// Description: This file is the entry point of the game
// It creates the game and the main scene
// It also imports all the necessary resources
import Phaser from 'phaser';
import MenuScene from './scenes/menuScene';
import MainScene from './scenes/mainScene';
import GameOverScene from './scenes/gameOverScene';
import SecondGameScene from './scenes/SecondGameScene';
import ThirdGameScene from './scenes/ThirdGameScene';

// Creating the game
// The game will be 960x720 pixels
// The game will use the WebGL renderer
// The game will use the Arcade physics engine
// The game will use the MainScene scene
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: {y : 0},
        }
    },
    scene: [MenuScene, MainScene, GameOverScene, SecondGameScene, ThirdGameScene]

};


const game = new Phaser.Game(config);
