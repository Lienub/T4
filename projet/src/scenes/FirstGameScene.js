import Phaser from 'phaser';
import { SecondGameScene } from './SecondGameScene';
import background from '../assets/img/background.png';
import button from '../assets/img/button.png';


export class FirstGameScene extends Phaser.Scene {
    constructor() {
        // Nom de la clé qui va permettre de gérer la scène
        super({ key: 'FirstGameScene' });
        console.log('Test Constructor')
    }

    preload() {
        // Chargement des ressources
    
        this.load.image('background', background);
        console.log('Test Preload')

        
        this.load.image('button', button);
    }

    create() {

    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.scene.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

    // Create the PNJ sprite
    // const pnj = this.add.sprite(100, 100, 'pnj');

    // Make the PNJ clickable
    //pnj.setInteractive();
    // pnj.on('pointerdown', () => {
    //   console.log('You clicked the PNJ!');
    //   this.scene.start({SecondGameScene});
    // });
    

    // Afficher le bouton "Lancer la partie"
    const nextScene = this.add.text(centerX, centerY - 50, 'Prochaine Scè,e', { fontFamily: 'Arial', fontSize: 40 })
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => this.scene.start('SecondeGameScene'));
    }

    update() {
        // Mise à jour des éléments de la scène
        console.log('Test Update')
    }
}