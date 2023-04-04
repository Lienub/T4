Document de travail T4

Projet : 
Rédacteurs :  
ABID Julien 
BOUDJI Djelal 
DURIEUX Tristan 
PETT Vincent 
URL GIT :  GIT - JTVD  


Instructions : 
Prendre des notes, identifier des questions et obtenir des réponses lors de la rencontre tuteur.trice. 
Synthétiser les notes la section « Description des objectifs pédagogiques du jeu » 
Réaliser un prototype d’un jeu sérieux à partir de ces notes. 
Compléter les autres sections de ce document de travail 
Copier https://gitlab.unistra.fr/gossa/t432/-/blob/master/Evaluation-T4.md sur votre dépôt GIT. 
Accompagner les étudiants en T2 à remplir cette évaluation puis à améliorer ce document en utilisant la fonction “commentaire” 
Transformer ce document finalisé, sauf les notes de rencontre, en README.md de votre projet avec todo-list (“- [ ]”) pour chaque item. 
Le jeu. 
Description des objectifs pédagogiques du jeu
Objectif pédagogique général
Ce que le joueur doit apprendre, en une seule phrase la plus courte possible.
Comment les habitants d’Amboise et leurs rois cohabitaient dans un contexte économique et social, durant la période de 1450-1574, et de quelle manière leur vie a-t-elle pu être retranscrite ?
Description des objectifs pédagogiques
Comment les habitants d’Amboise pouvaient devenir des nobles, cet objectif est le fil rouge du jeu, de par ce dernier le joueur comprendra l’objectif pédagogique général
Comment les actes, la rang social et l’importance des habitants d’Amboise influent sur le fait que l’on ai encore des archives d’eux ?
Comment les habitants d’Amboise vivaient à leur époque ?
Malgré les opportunités des habitants ces derniers peuvent mourir à tout moment
Apprendre la vie des habitants d’Amboises
Un Amboisien du Tiers-Etat peut avoir pratiqué un métier dans une palette très large, tel que chaussetiers, ou barbier par exemple, qui peuvent mener ou non à des opportunités d'ascensions sociales.
Comprendre comment sont récupérées les informations historiques
Malgré ce que l’on peut penser, les traces écrites de notre passé ne sont pas forcément extravagantes. Dans le cas d’Amboise, la plupart des informations locales tel que les différentes familles leur engagement politique dans la ville, sont répertoriés dans des documents en apparence anodins ; comme des documents administratifs, des titres de propriétés ou même de simples signatures.


Description du jeu
Type de jeu : Jeu d’aventure
Incarnation du joueur : Un chaussetier du tiers-état d’Amboise
Déroulement d’une partie
Description du déroulement d’une partie : début, déroulement et fin
Début : choix de métier
Déroulement : se balader et parler à des PNJ, accepter ou refuser des choix d’activités ou de carrières qu’ils proposent. 3 étapes/scènes de jeu
Scène 1 : des opportunités en rapport avec ton métier qui te permettent d’accéder à la scène suivante
Scène 2 : à partir d’ici, des PNJ peuvent te permettre de devenir ce que tu souhaites (moine, noble) être ou de faire ce que tu souhaites faire (gagner de l’argent, devenir ami du roi)
Scène 3 : dernière scène, le résultat est fixé : en parlant à des PNJ le joueur découvre vers quel résultat il est amené et l’écran de fin s’affiche à un moment donné.
Ecran de fin
Fin : Au bout de 2min de partie le joueur meurt de vieillesse, entre temps plusieurs cas : 
Partie gagnante si le joueur est devenu NOBLE, 
partie nulle si devenue MOINE, 
partie perdante sinon


Paramétrage d’une partie
Description des options permettant de paramétrer une partie.
métier disponible : chaussetier
solde d’argent
une partie dure 3 secondes de jeu est égal à 1 année de vie
 ge du joueur : 15 ans
Modèle conceptuel applicatif
Liste, MCD ou diagramme de classe décrivant le jeu, et en particulier les entités, en séparant ce qui est exposé au joueur de ce qui est interne au jeu.
Description des fonctionnalités 
Actions du joueur
Liste des actions possibles par le joueur. Peut être organisé en module.

Gestion des phases de jeu
Entreprendre une conversation avec un PNJ
Valider le choix/l’opportunité offert par le PNJ et passer à la scène/au tour suivant


Informations au joueur
Liste des informations présentées au joueurs. Peut être organisé en module.
Gestion du temps
Toutes les 3 secondes l'habitant gagne 1 ans, il meurt arrivé à un certain âge
Gestion de l’argent
Une barre correspondant au revenu du joueur est disponible

Moteur interne
Liste des interactions entre les actions du joueurs et les informations

Scénarios
Scénario tutorial
Le joueur passe les différentes phases en parlant aux bonnes personn et en faisait les bons choix puis devient noble

Paramètres :
tableau des objectifs : [<objectif>, devenir noble]
Habitant : <nom>
nombre d’années à vivre : 60
nombre de scènes : 3 
Déroulement gagnant : 
l’habitant passe à la première phase, et parle au bonnes personnes pour avoir les bonnes opportunités
[<nom>]
[<devenir noble>]
l’habitant passe à la phase de jeu suivante, et parle à d’autres personnes avec des opportunités plus concrètes 
[<nom>]
[<devenir noble>]
l’ habitant passe à la dernière phase du jeu, et parle à une personne lui disant qu’il est éligible à être noble. Le roi lui attribue sa noblesse. fin du jeu 
[<nom>]
[<devenir noble>]
Déroulement perdant :

le joueur passe trop de temps dans le jeu, devient trop vieux et meurt de vieillesse (age>60)
l’habitant passe à la première phase, et parle au bonnes personnes pour avoir les bonnes opportunités
[<nom>]
[<devenir noble>]
l’habitant passe à la phase de jeu suivante, et parle à d’autres personnes avec des opportunités plus concrètes 
[<nom>]
[<devenir noble>]
l’ habitant passe à la dernière phase du jeu, et parle à une personne lui proposant de devenir moine. fin du jeu 
[<nom>]
[<devenir noble>]
le joueur meurt par un PNJ d’une mort inévitable
Scénarios complémentaires
Décrire moins précisément d’autres idées de scénarios.


Le joueur souhaite devenir moine
l’habitant passe à la première phase, et parle au bonnes personnes pour avoir les bonnes opportunités
[<nom>]
[<devenir moine>]
l’habitant passe à la phase de jeu suivante, et parle à d’autres personnes avec des opportunités plus concrètes 
[<nom>]
[<devenir moine>]
l’ habitant passe à la dernière phase du jeu, et parle à une personne lui proposant de devenir moine. fin du jeu 
[<nom>]
[<devenir moine>]


Fonctionnalités additionnelles
Décrire ici les idées de fonctionnalités additionnelles. Cette partie ne doit servir qu’en dernier recours, pour transmettre ce qui n’a pas été inclus dans les fonctionnalités faute de temps.

