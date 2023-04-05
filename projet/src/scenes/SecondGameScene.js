import Phaser from 'phaser';
import ThirdGameScene from './ThirdGameScene';

export class SecondGameScene extends Phaser.Scene {
    constructor() {
        // Nom de la clé qui va permettre de gérer la scène
        console.log('Enter SecondGameScene')
        super({ key: "SecondGameScene" });
    }

    preload() {
    
        this.load.image('background', background);
        console.log('Test Preload')
    }

    create() {


        this.scene.background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        console.log('Enter SecondGameScene create')
        this.add.text(400, 350, 'Cliquez sur le bouton pour passer à la scène suivante', { font: '32px Arial', fill: '#FFFFFF' });
        // Création du bouton de passage à la scène 3, avec le text, la position, la couleur et la taille de la police
        let bouton = this.add.text(200, 200, 'Passer à la scène suivante', { font: '32px Arial', fill: '#ffffff' });
        // Permet de rendre le bouton cliquable
        bouton.setInteractive();
        // Fonction qui permet de passer à la scène suivante
        bouton.on('pointerdown', () => {
        this.scene.start('ThirdGameScene');
    });
    }

    update() {}
}
