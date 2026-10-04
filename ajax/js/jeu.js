let joueur  ;
let questions = creerQuizz();
let indexQuestion = 0;


const questionTexte = document.querySelector("#question-texte");
const ecranAccueil = document.querySelector("#ecran-accueil");
const ecranQuiz = document.querySelector("#ecran-quiz");
const btnDemarrer = document.querySelector("#btn-demarrer");
const formulaire = document.querySelector("#formJoueur");
const scoreContainer = document.querySelector("#score");
// Sélectionne l'élément #propositions-container
const propositionsContainer = document.querySelector("#propositions-container");
   

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement de la page
    traiterFormulaireJoueur(formulaire)
    
    
});