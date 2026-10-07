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

// sélection de question-texte pour afficher la question
const questionTexte = document.querySelector("#question-texte");


// exercice : ajouter la gestion du clique du bouton 
document.querySelector("#btn-demarrer").addEventListener("click", () =>  {
    document.querySelector("#ecran-accueil").style.display = "none";
    document.querySelector("#ecran-quiz").style.display = "block";
    // appel de la fonction afficherQuestion(questions[0])
    afficherQuestion(questions[indexQuestion]);

   
})



