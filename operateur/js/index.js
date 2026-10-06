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



/*
    exercice : Calculez le score final en pourcentage du joueur (score total / nombre de questions * 100).


*/
