// création du joueur
let joueur = creerJoueur("Alex");

// création du jeu
const questions = creerQuizz();

// permet d'avoir l'index de la question à afficher
let indexQuestion = 0;

// sélection de propositionsContainer pour afficher la question dedans
const propositionsContainer = document.querySelector("#propositions-container");

// sélection de la div score pour afficher  le score
const scoreContainer = document.querySelector("#score");

// exercice : ajouter la gestion du clique du bouton 

// sélection de question-texte pour afficher la question
const questionTexte = document.querySelector("#question-texte");

// appel de la fonction afficherQuestion(questions[0])
afficherQuestion(questions[indexQuestion]);

// on modifie l'objet joueur pour tester l'affichage du score
joueur.score = 3;
afficherScore();

