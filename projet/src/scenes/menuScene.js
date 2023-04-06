import Phaser from 'phaser';
import MainScene from './mainScene';
import logoImg from '../assets/img/Amboise.png';

// Creating a scene named MenuScene,
// which will be the menu scene of the game
// This scene will contains the logo, the start button and the button parameters
export default class MenuScene extends Phaser.Scene {

    preload() {
        //Charger le logo
        this.load.image('logo', logoImg);
      }

    create ()
    {
        // Récupérer la position du centre de la caméra
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Afficher le logo
        const logo = this.add.image(centerX, centerY - 200, 'logo');

        // Afficher le bouton "Lancer la partie"
        const startButton = this.add.text(centerX, centerY - 20, 'Lancer la partie', { fontFamily: 'Fraktur', fontSize: 40 })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => startButton.setScale(1.2))
        .on('pointerout', () => startButton.setScale(1))
        .on('pointerdown', () => this.scene.start('MainScene'));

        // Afficher le texte de présentation
        const textPresentation = this.add.text(centerX - 450, centerY, 'Bienvenue dans notre Jeu. \nVous allez rentrer dans un univers unique.\nActuellement vous un habitant de la ville d\'Amboise, célèbre ville connue pour son château. \nVotre objectif est d\'intégrer la haute société Amboisienne, \net pour cela il vous faut devenir noble. \nBonne chance à vous !', { fontFamily: 'Fraktur', fontSize: 25, align: 'center' })

        // // Afficher le bouton "Paramètres"
        // const settingsButton = this.add.text(centerX, centerY + 190, 'Paramètres', { fontFamily: 'Fraktur', fontSize: 40})
        // .setOrigin(0.5)
        // .setInteractive({ useHandCursor: true })
        // .on('pointerover', () => settingsButton.setScale(1.2))
        // .on('pointerout', () => settingsButton.setScale(1))
        // .on('pointerdown', () => console.log('Clic sur Paramètres'));
        

        // Changer le curseur de la souris pour un pointeur
        this.input.setDefaultCursor('pointer');

    }
}