


function creerQuizz() {
    return [
        {
            id: 1,
            texte: "Capitale de la France ?",
            propositions: ["Paris", "Lyon", "Marseille", "Toulouse"],
            bonneReponse: 0
        },
        {
            id: 2,
            texte: "Capitale de l'Espagne ?",
            propositions: ["Barcelone", "Madrid", "Séville", "Valence"],
            bonneReponse: 1
        },
        {
            id: 3,
            texte: "Capitale du Japon ?",
            propositions: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
            bonneReponse: 2
        },
        {
            id: 4,
            texte: "Quelle est la capitale de l'Allemagne ?",
            propositions: ["Berlin", "Munick", "Hambourg", "Cologne"],
            bonneReponse: 0
        }
    ]
   
}

function creerJoueur(prenomJoueur ) {
    return {
        prenom: prenomJoueur,
        score: 0,
        reponsesFausses: []
        
    }
}

function verifierReponse(choixReponse, question) {
    // conversion des réponses en int
    choixReponse = parseInt(choixReponse);
    const bonneReponse = parseInt(question.bonneReponse)

    // permet de vérifier si le joueur a bien répondu à la question
    if(isNaN(choixReponse) || isNaN(bonneReponse)) {
        return "Réponse invalide";
    }
    else {

        if(choixReponse === bonneReponse) {
            joueur.score += 1;
            // bonne réponse
            return true;
        }
        else {
            joueur.reponsesFausses.push({idQuestion: question.id, choixReponse})
            // mauvaise réponse
            return false
        }
        
    }

}
function afficherQuestion(question) {
    

    // Change son textContent pour y mettre question.texte
    questionTexte.textContent = question.texte;


    question.propositions.forEach((proposition, index) => {
        afficherProposition( proposition, index);

    });
}

function afficherBoutonQuestionSuivante() {
    /* bonus : 
       - afficher le bouton question suivante une fois le résultat affiché
       - gérer le clique du bouton suivant pour faire appel à la fonction afficherQuestion(indexQuestion)
       - s'il n'y a plus de questions, afficher partie terminée et un bouton recommencer
       - au clique du bouton recommencer, réinitialiser le score du joueur et indexQuestion
    */
}

function afficherProposition( proposition, index) {
    // 1. Créer un nouvel élément <button>
    const bouton = document.createElement("button");
    // 2. Lui donner son texte
    bouton.textContent = proposition;
    // 3. Lui ajouter sa classe CSS
    bouton.classList.add("proposition-btn");

    bouton.setAttribute("data-index", index);
    // 4. L'insérer dans le container, SANS toucher aux boutons déjà présents
    propositionsContainer.appendChild(bouton);

    bouton.addEventListener("click", () => {

        const indexChoisi = bouton.dataset.index;  
        
        if(verifierReponse(indexChoisi,question)) {
            bouton.classList.add("correct");
        }
        else {
            bouton.classList.add("incorrect");
            // recherche de la bonne réponse
            const bonneReponse = document.querySelector(`.proposition-btn[data-index="${questions[indexQuestion].bonneReponse}"]`);
            bonneReponse.classList.add("correct");
        }
        desactiverBoutons();
        /* bonus :
            - utiliser indexQuestion pour indiquer que l'on va sur la question suivante
            - afficher le bouton de la question suivante
            - afficher le score 
        
        */
        afficherBoutonQuestionSuivante();
        afficherScore();
    });
}


function afficherScore() {
      // on vide le container pour ne pas avoir le score qui s'ajoute à chaque réponse
    scoreContainer.innerHTML = "";

    // création d'un paragraphe pour afficher le score dedans
    const paragraphe = document.createElement("p");
    paragraphe.textContent = getScore();


    scoreContainer.appendChild(paragraphe);
}


function getScore() {
    return `Votre score est de ${joueur.score}/${questions.length}, soit ${(joueur.score/questions.length)*100}%`;
}

function desactiverBoutons() {
  // on désactive TOUS les boutons de propositions, pas juste celui cliqué
  const tousLesBoutons = document.querySelectorAll(".proposition-btn");
  tousLesBoutons.forEach((btn) => {
    btn.disabled = true;
  });
}
