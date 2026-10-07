

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
        score: 0
        
    }
}

function verifierReponse(choixReponse, bonneReponse) {
    // conversion des réponses en int
    choixReponse = parseInt(choixReponse);
    bonneReponse = parseInt(bonneReponse)

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
           
            // mauvaise réponse
            return false
        }
        
    }

}


function afficherQuestion(question) {
    // utiliser  l'élément #question-texte et stocker-le dans une constante

    // Mettre dedans le texte de la question passée en paramètre

    // Pour chaque proposition, créer un bouton  <button class="proposition-btn">${proposition}</button>


    propositionsContainer.innerHTML = "";
    // évolution de l'exercice avec createElement : 
    // appel de la fonction afficherProposition( proposition, index). 
    // pour chaque proposotion
    questionTexte.textContent = question.texte;

    question.propositions.forEach((proposition, index) => {
        afficherProposition(proposition,index, question);
    });



}

function creerBouton(texte, classes, parent) {
    const bouton = document.createElement("button");
    bouton.textContent = texte;
    bouton.classList = classes;

    parent.appendChild(bouton);

    return bouton;
}

function recommencerJeu() {
    indexQuestion = 0;
    joueur.score = 0;
    scoreContainer.innerHTML = "";
    afficherQuestion(questions[indexQuestion]);
}

function afficherQuestionSuivante() {    
    indexQuestion++;
    if(indexQuestion == questions.length) {
        const boutonRecommencer = creerBouton("Recommencer", ["btn-recommencer"], propositionsContainer);
        boutonRecommencer.addEventListener("click", () => {
            recommencerJeu();
        });


    }
    else {
        const boutonSuivant = creerBouton("Question suivante", ["btn-suivant"], propositionsContainer);
        boutonSuivant.addEventListener("click", () => {
             afficherQuestion(questions[indexQuestion]);
        });
       
    }

}



function afficherProposition( proposition, index, question) {
    // fonction qui affiche chaque proposition en utilisant createElement 

    /* évolution de l'exercice avec data-* : 
    - ajout du code de la diapo 109
    - lors de l'appel de verifierReponse :
       - si elle retourne vraie, ajouter la classe correct
       - si elle retourne faux, ajouter la classe incorrect sur la proposition sélectionnée et la classe correct sur la bonne réponse

    Bonus : appel d'une fonction pour désactiver tous les boutons
    */

    // 1. Créer un nouvel élément <button>
    const bouton = document.createElement("button");
    // 2. Lui donner son texte
    bouton.textContent = proposition;
    bouton.setAttribute("data-index", index);
    // 3. Lui ajouter sa classe CSS
    bouton.classList.add("proposition-btn");
    // 4. L'insérer dans le container, SANS toucher aux boutons déjà présents
    propositionsContainer.appendChild(bouton);

    bouton.addEventListener("click", () => {

        const indexChoisi = bouton.dataset.index;  
        
        if(!verifierReponse(indexChoisi,question.bonneReponse)) {
            bouton.classList.add("incorrect");
           
        }
        const boutonCorrect = document.querySelector(`.proposition-btn[data-index="${question.bonneReponse}"]`);
        boutonCorrect.classList.add("correct");

        desactiverBouton();
        afficherScore();
        afficherQuestionSuivante();
    });

        
    
}

function desactiverBouton() {
    const boutonsReponse = document.querySelectorAll(".proposition-btn");
    boutonsReponse.forEach(boutonReponse => {
        boutonReponse.setAttribute("disabled", true);
    });
}

function afficherScore() {
    scoreContainer.innerHTML = "";
    const pScore = document.createElement("p");
    pScore.textContent = getScore();
    scoreContainer.appendChild(pScore);
    
}

function getScore() {
    return `Votre score est de ${joueur.score}/${questions.length}, soit ${(joueur.score/questions.length)*100}%`;
}
