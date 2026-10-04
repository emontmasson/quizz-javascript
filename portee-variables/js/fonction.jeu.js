

function creerQuizz() {
    return  [
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

function verifierReponse(joueur,choixReponse, question) {
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
           
        }
        else {
            joueur.reponsesFausses.push({idQuestion: question.id, choixReponse})
            
        }

        return joueur;
        
    }
}


function getScore(joueur, questions) {
    return `Votre score est de ${joueur.score}/${questions.length}, soit ${(joueur.score/questions.length)*100}%`;
}


