// Sélection des éléments du DOM
const formulaire = document.getElementById("formulaire-meteo");
const inputVille = document.getElementById("input-ville");
const container = document.getElementById("meteo-container");
const meteoInfo = document.getElementById("meteo-info");

// Écoute de la soumission du formulaire

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();

  const ville = inputVille.value.trim();

  if (ville === "") {
    afficherErreur("Veuillez saisir le nom d'une ville.");
    return;
  }

  chargerMeteo(ville);
});