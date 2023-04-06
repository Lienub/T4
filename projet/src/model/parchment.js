import Phaser from "phaser";
import parchemin from "../assets/img/parchment.png";

export default class Parchment extends Phaser.Physics.Arcade.Sprite {
    //affiche un parchemin d'image "parchemin" et de texte passé en paramètre
    constructor(scene, x, y, txt) {
        super(scene, x, y);
        this.scene = scene;
        this.image = this.scene.add.image(x, y, 'parchemin');

        this.image.setScale(0.5);
        this.image.setOrigin(0.5);
        this.image.setDepth(1);
        
        if(txt == "argent"){
            txt = "Grâce à cette offre vous gagnez 100 écus!";
        }
        else if (txt == "pain"){
            txt = "Vous avez accepté d'entreprendre l'ouverture d'une boulangerie pour tout votre argent!";
        }



        this.text = this.scene.add.text(x+10, y-20, txt, {
            fontSize: '16px',
            fill: '#000000',
            wordWrap: {
                width: 180,
                useAdvancedWrap: true
            },
            align: 'center',
        });
        this.text.setOrigin(0.5);
        this.text.setDepth(2);
        this.visible = false;

        this.scene.input.keyboard.on('keydown-ENTER', () => {
            this.destroy();
      });
    }

        // Méthode pour afficher le parchemin
    show() {
        this.visible = true;
    }

    // Méthode pour masquer le parchemin
    hide() {
        this.visible = false;
    }

    preload() {
        this.load.image('parchemin', parchemin);
    }

    static loadAssets(scene) {
        scene.load.image('parchemin', parchemin);
    }

    destroy() {
        this.image.destroy();
        this.text.destroy();
    }
}