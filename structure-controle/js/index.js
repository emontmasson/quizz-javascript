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

const joueur = { 
        prenom: "Alex",
        score: 1,
        reponsesFausses: [
            { idQuestion: 1, reponseDonnee: 2 },
            { idQuestion: 2, reponseDonnee: 0 },
            { idQuestion: 3, reponseDonnee: 1 }
        ]
}


/* exercice : Afficher une question avec ses propositions
En utilisant une boucle for classique, afficher la première question du tableau questions ainsi que ses propositions, numérotées de 0 à 3.


*/



/*
exercice :Parcourir toutes les questions avec for...of
En utilisant une boucle for...of, parcourir le tableau questions et affiche pour chaque question son id et son texte.



*/

/* exercice :Compter les bonnes réponses avec forEach
Soit un tableau de réponses données par le joueur (dans l'ordre des questions) :
const reponsesJoueur = [0, 0, 2];


En utilisant forEach, comparer chaque réponse du joueur à la bonneReponse correspondante dans questions, compter le nombre de bonnes réponses et mettre à jour le score du joueur.

*/

/*
Afficher le détail des réponses du joueur pour chaque question
Parcourir le tableau questions 
Pour chaque question :
Rechercher s'il existe une erreur correspondante dans joueur.reponsesFausses et stocker le résultat dans une variable erreur
Vérifier que l'erreur est bien un objet trouvé (et pas undefined) : 
Si oui (le joueur s'est trompé) : afficher "le joueur a répondu à la question ..."
sinon "le joueur a correctement répondu ..."

*/
