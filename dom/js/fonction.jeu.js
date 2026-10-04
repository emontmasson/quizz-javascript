

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
    // Sélectionner l'élément #question-texte et stocker-le dans une variable

    // Mettre dedans le texte de la question passée en paramètre

    // Pour chaque proposition, créer un bouton  <button class="proposition-btn">${proposition}</button>

    // évolution de l'exercice avec createElement : 
    // appel de la fonction afficherProposition( proposition, index). 
    // pour chaque proposotion

 


}

function afficherProposition( proposition, index) {
    // fonction qui affiche chaque proposition en utilisant createElement 

    /* évolution de l'exercice avec data-* : 
    - ajout du code de la diapo 109
    - lors de l'appel de verifierReponse :
       - si elle retourne vraie, ajouter la classe correct
       - si elle retourne faux, ajouter la classe incorrect sur la proposition sélectionnée et la classe correct sur la bonne réponse

    Bonus : appel d'une fonction pour désactiver tous les boutons
    */

    
    
}

function afficherScore() {
    
    // à faire évoluer avec createElement
    scoreContainer.innerHTML = getScore();
    
}

function getScore() {
    return `Votre score est de ${joueur.score}/${questions.length}, soit ${(joueur.score/questions.length)*100}%`;
}
