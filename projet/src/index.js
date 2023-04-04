import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight - 5,
    parent: 'divId',
    dom: {createContainer: true,},
    physics: {default: 'arcade',arcade: {gravity: { y: 300 },debug: false,},},
    scene: [MainMenuScene,MainScene,InstructionsScene,GameOverScene,LeaderboardScene,],
};
    
console.log('Hello Word!')
    
const game = new Phaser.Game(config);