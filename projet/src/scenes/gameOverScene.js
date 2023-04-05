import Phaser from 'phaser';
import bloodImg from '../assets/img/blood.png';
import doorImg from '../assets/img/door.png';
import petanqueImg from '../assets/img/petanque.png';
import winImg from '../assets/img/crown.png';
import monkImg from '../assets/img/monk.png';
import ageImg from '../assets/img/age.png';

export default class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    

    init(data) {
        this.win = data.win;
        this.message = data.message;
    }

    preload() {
        //si le message de data contient 'porte' alors on affiche l'image de la porte
        if (this.message == 'door') {
            this.load.image('door', doorImg);
        }
        //si le message de data contient 'petanque' alors on affiche l'image correspondant
        else if(this.message == 'petanque'){
            this.load.image('petanque', petanqueImg);
        }
        else if(this.message == 'age'){
            this.load.image('age', ageImg);
        }

        //si le message de win de data contient 'win' alors on affiche l'image de la couronne
        this.load.image('win', winImg);
        this.load.image('blood', bloodImg);
        this.load.image('monk', monkImg);
    }

    create() {
        console.log(this.win);
        if(this.win === 'win')
            this.winGame();
        else if (this.win === 'monk')
            this.moineGame();
        else 
            this.gameOver();
        

        // Afficher le bouton "RESTART"
        const restartText = this.add.text(
            this.game.config.width * 0.5,
            this.game.config.height * 0.7,
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

    gameOver(){
        let gameOverText = '';

        //Game over text
        this.add.text(this.game.config.width*0.5, this.game.config.height*(-0.2), 'GAME OVER', {
            fontSize: '128px',
            fill: '#FF0000',
        }).setOrigin(0.5, 0.5);

        //si le message de data contient 'porte' alors on affiche l'image de la porte
        if (this.message === 'door') {
            const door = this.add.image(
                this.game.config.width*0.5,
                this.game.config.height*0.5,
              'door'
            );
            door.setScale(0.5).setScrollFactor(0);

            gameOverText += 'Vous êtes mort en traversant une porte!';
          }

        //si le message de data contient 'petanque' alors on affiche l'image correspondant
        else if(this.message === 'petanque'){
            const petanque = this.add.image(
                this.game.config.width*0.5,
                this.game.config.height*0.5,
                'petanque'
                );
            petanque.setScale(0.5).setScrollFactor(0);
            gameOverText += 'Vous êtes mort en jouant à la pétanque!';
        }

        //si le message de data contient 'age' alors on affiche l'image correspondant
        else if(this.message === 'age'){
            const age = this.add.image(
                this.game.config.width*0.5,
                this.game.config.height*0.5,
                'age'
                );
            age.setScale(0.5).setScrollFactor(0);   
            gameOverText += 'Vous êtes mort d\'un arrêt cardiaque!';
        }

        //on affiche l'image du sang
        if(this.message != 'age'){
            const blood = this.add.image(
            0,
            0,
            'blood'
            );
        }
        

        //on affiche le texte
        this.add
        .text(this.game.config.width*0.5, this.game.config.height*0.7, gameOverText, {
            fontSize: '32px',
            fill: '#fff',
        })
        .setOrigin(0.5);

    }

    winGame(){
        let winGameTewt = 'Vous êtes devenu nôble!';

        //Winning game text
        this.add.text(this.game.config.width*0.5, this.game.config.height*0, 'WIN', {
            fontSize: '128px',
            fill: '#00CD60',
        }).setOrigin(0.5, 0.5);

        //on affiche l'image de la couronne
        const crown = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'win'
        );

        //on affiche le texte
        this.add
        .text(this.game.config.width*0.5, this.game.config.height*1.5, winGameTewt, {
            fontSize: '32px',
            fill: '#fff',
        })
        .setOrigin(0.5);
    }

    moineGame(){
        let moineGameText = 'Vous êtes devenu moine!';

        //Winning game text
        this.add.text(this.game.config.width*0.5, this.game.config.height*0.9, 'MOINE', {
            fontSize: '128px',
            fill: '#00B1CD',
        }).setOrigin(0.5, 0.5);

        //on affiche l'image de la couronne
        const crown = this.add.image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        'monk'
        );

        //on affiche le texte
        this.add
        .text(this.game.config.width*0.5, this.game.config.height*1.5, moineGameText, {
            fontSize: '32px',
            fill: '#fff',
        })
        .setOrigin(0.5);
    
    }
}