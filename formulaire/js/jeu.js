// création du joueur
let joueur = creerJoueur("Alex");

// création du jeu
const questions = creerQuizz();

// permet d'avoir l'index de la question à afficher
let indexQuestion = 0;

// sélection de propositionsContainer pour afficher la question dedans
const propositionsContainer = document.querySelector("#propositions-container");

// sélection de question-texte pour afficher la question
const questionTexte = document.querySelector("#question-texte");

// sélection de la div score pour afficher  le score
const scoreContainer = document.querySelector("#score");

// gestion du bouton "Démarrer le quizz"
const boutonDemarrerQuizz = document.querySelector("#btn-demarrer");

// sélection de l'écran d'accueil et du quizz
const ecranAccueil = document.querySelector("#ecran-accueil");
const ecranQuiz = document.querySelector("#ecran-quiz");

boutonDemarrerQuizz.addEventListener("click", () => {
    // on cache l'écran d'accueil
    ecranAccueil.setAttribute('style', 'display:none');
    // on affiche le quizz
    ecranQuiz.setAttribute('style', 'display:block');
    
    // appel de la fonction afficherQuestion(questions[0])
    afficherQuestion(questions[indexQuestion]);
    

    

})



