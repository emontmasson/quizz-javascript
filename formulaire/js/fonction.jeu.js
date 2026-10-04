


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
    // vidage de la question précédente
    questionTexte.innerHtml = "";
    propositionsContainer.innerHTML = "";

    // Change son textContent pour y mettre question.texte
    questionTexte.textContent = question.texte;

    question.propositions.forEach((proposition, index) => {
        afficherProposition( proposition, index);

    });
}

function afficherBoutonQuestionSuivante() {
    // Vérifier si ce n'est pas la dernière question
  if (indexQuestion < questions.length) {
    const bouton = creerBouton("Question suivante →",["btn-suivant"] )
    
    bouton.addEventListener("click", () => {
      
      afficherQuestion(questions[indexQuestion]);
    });
    
    document.querySelector("#propositions-container").appendChild(bouton);
  } 
  else {
    const afficherMessageFin = document.createElement("p");
    afficherMessageFin.innerText = "Partie terminée !";
    document.querySelector("#propositions-container").appendChild(afficherMessageFin);

    const boutonRecommencer = creerBouton("Recommencer", ["btn-recommencer"]);
    boutonRecommencer.addEventListener("click", () => {
      recommencerPartie();
      console.log(joueur);
      afficherQuestion(questions[indexQuestion]);
    });

    document.querySelector("#propositions-container").appendChild(boutonRecommencer);
  }
}

function creerBouton(text, classes) {
    const bouton = document.createElement("button");
    bouton.textContent = text;
    classes.forEach((classe) => bouton.classList.add(classe));
    
    return bouton;
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
        
        if(verifierReponse(indexChoisi,questions[indexQuestion])) {
            bouton.classList.add("correct");
        }
        else {
            bouton.classList.add("incorrect");
            // recherche de la bonne réponse
            const bonneReponse = document.querySelector(`.proposition-btn[data-index="${questions[indexQuestion].bonneReponse}"]`);
            bonneReponse.classList.add("correct");
        }
        desactiverBoutons();
        indexQuestion += 1;
        afficherBoutonQuestionSuivante();
        afficherScore();
    });
}

function recommencerPartie() {
    indexQuestion = 0;
    joueur.score = 0;
    joueur.reponsesFausses = [];
    // on vide le container du score
    scoreContainer.innerHTML = "";

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
