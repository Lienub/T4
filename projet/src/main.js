console.log("Hello Word!")

// Configuration du j
let config = {
    type: Phaser.AUTO, // Type de rendu
    width: 800, // Largeur
    height: 600, // Hauteur
    scene: [FirstGameScene] // Scène de base
  };


class FirstGameScene extends Phaser.Scene {
    constructor() {
        // Nom de la clé qui va permettre de gérer la scène
        super({ key: 'FirstGameScene' });
    }

    preload() {
        // Chargement des ressources
    }

    create() {
    // Création des éléments de la scène
    // Création du bouton de passage à la scène 2, avec le text, la position, la couleur et la taille de la police
    let bouton = this.add.text(400, 300, 'Passer à la scène suivante', { font: '32px Arial', fill: '#ffffff' });
    // Permet de rendre le bouton cliquable
    bouton.setInteractive();
    // Fonction qui permet de passer à la scène suivante
    bouton.on('pointerdown', () => {
        this.scene.start('SecondGameScene');
    });
    }

    update() {
        // Mise à jour des éléments de la scène
    }
}


class SecondGameScene extends Phaser.Scene {
    constructor() {
        // Nom de la clé qui va permettre de gérer la scène
        super({ key: 'SecondGameScene' });
    }

    create() {
        // Création du texte à la scène 2, avec le text, la position, la couleur et la taille de la police
        let texte = this.add.text(400, 300, 'Bienvenue dans la seconde scène !', { font: '32px Arial', fill: '#ffffff' });
        // Création du bouton de passage à la scène 3, avec le text, la position, la couleur et la taille de la police
        let bouton = this.add.text(200, 200, 'Passer à la scène suivante', { font: '32px Arial', fill: '#ffffff' });
        // Permet de rendre le bouton cliquable
        bouton.setInteractive();
        // Fonction qui permet de passer à la scène suivante
        bouton.on('pointerdown', () => {
        this.scene.start('ThirdGameScene');
    });
    }
}

class ThirdGameScene extends Phaser.Scene {
    constructor() {
        // Nom de la clé qui va permettre de gérer la scène
        super({ key: 'ThirdGameScene' });
    }

    preload() {

    }

    create() {

    }

    update() {

    }
}

// Configuration du jeu
let game = new Phaser.Game(config);