const questions = [
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
    ];

/* exercice : Afficher les infos de base
Afficher le texte de la 2e question.
Afficher la bonne réponse de la 2e question.
Afficher la 2e proposition de la 2e question.
Afficher le nombre total de questions dans le quiz.
Retrouver la question dont l'id est 2
Retrouver dans l'objet joueur, la réponse qu'il avait sélectionné pour la question 2

*/

const joueur = { 
        prenom: "Alex",
        score: 0,
        reponsesFausses: []
}

/*
exercice : Modifier les propriétés
Changer le prénom du joueur en "Sarah".
Augmenter le score du joueur de 1 point (sans boucle, juste directement).
Vérifier que le score a bien été modifié en l'affichant.


*/

/* exercice : Ajouter dans un tableau
Ajouter une nouvelle question au tableau questions avec .push() :
id: 4
texte: "Quelle est la capitale de l'Allemagne ?"
propositions: ["Berlin", "Munich", "Hambourg", "Cologne"]
bonneReponse: "Berlin"
Afficher la nouvelle question ajoutée en accédant au bon index.
*/
