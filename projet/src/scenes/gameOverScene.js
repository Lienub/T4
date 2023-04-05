import Phaser from 'phaser';
import bloodImg from '../assets/img/blood.png';
import porteImg from '../assets/img/door.png';
import petanqueImg from '../assets/img/petanque.png';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    

    init(data) {
        this.message = data.message;
    }

    preload() {
        //si le message de data contient 'porte' alors on affiche l'image de la porte
        if (this.message == 'door') {
            this.load.image('door', porteImg);
        }
        else if(this.message == 'petanque'){
            this.load.image('petanque', petanqueImg);
        }
        this.load.image('blood', bloodImg);
    }

    create() {
        let gameOverText = '';

        //Game over text
        this.add.text(this.cameras.main.centerX-10, -50, 'GAME OVER', {
            fontSize: '128px',
            fill: '#FF0000',
        }).setOrigin(0.5, 0.5);

        //si le message de data contient 'porte' alors on affiche l'image de la porte
        if (this.message === 'door') {
            const door = this.add.image(
              this.cameras.main.centerX,
              this.cameras.main.centerY-50,
              'door'
            );
            // Redimensionner l'image de la porte pour qu'elle s'adapte à la taille de la scène
            const scaleX = this.cameras.main.width / door.width;
            const scaleY = this.cameras.main.height / door.height;
            door.setScale(0.5).setScrollFactor(0);

            gameOverText += 'Vous êtes mort en traversant une porte!';
          }

        //si le message de data contient 'petanque' alors on affiche l'image correspondant
        else if(this.message === 'petanque'){
            const petanque = this.add.image(
                this.cameras.main.centerX,
                this.cameras.main.centerY-40,
                'petanque'
                );
            // Redimensionner l'image pétanque pour qu'elle s'adapte à la taille de la scène
            const scaleX = this.cameras.main.width / petanque.width;
            const scaleY = this.cameras.main.height / petanque.height;
            petanque.setScale(0.5).setScrollFactor(0);
            gameOverText += 'Vous êtes mort en jouant à la pétanque!';
        }

        //on affiche l'image du sang
        const blood = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'blood'
        );

        //on affiche le texte
        this.add
        .text(this.cameras.main.centerX, this.cameras.main.centerY + 150, gameOverText, {
            fontSize: '32px',
            fill: '#fff',
        })
        .setOrigin(0.5);


        
        // Afficher le bouton "RESTART"
        const restartText = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.height - 200,
            'RESTART',
            {
              fontSize: '64px',
              fill: '#EEDF12',
            }
          )
          .setOrigin(0.5)
          .setInteractive()
          .on('pointerover', () => restartText.setScale(1.2))
          .on('pointerout', () => restartText.setScale(1))
          .on('pointerdown', () => location.reload());


    }
}