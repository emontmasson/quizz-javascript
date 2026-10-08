const API_KEY = "445d5fc005e98a6e74e33cacb5d9e1f4";



async function chargerMeteo(ville) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric&lang=fr`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      switch (response.status) {
        case 404:
          throw new Error("Ville introuvable. Vérifiez l'orthographe.");   
   
        case 429:
            throw new Error("Vous avez effectué trop de recherches. Réessayez plus tard.");
        case 401:
            throw new Error("Problème de clé API, contactez l'administrateur.");
        default:
            throw new Error("Il y a un problème interne, l'utilisation du service est indisponible. Veuillez contacter l'administrateur du site.");
           
      }

    }
    else {
        const donnees = await response.json();
        afficherMeteo(donnees);
    }
    

  } catch (erreur) {
    
    afficherErreur(erreur.message);
  }
}

function afficherErreur(message) {
  meteoInfo.innerHTML ="";
  container.style.display = "none";

  const paragrapheErreur = document.createElement("p");
  paragrapheErreur.classList.add("erreur");
  paragrapheErreur.textContent = message;

  meteoInfo.appendChild(paragrapheErreur);
}

function afficherMeteo(donnees) {
    container.innerHTML ="";
    meteoInfo.innerHTML = "";

    const titre = document.createElement("h2");
    titre.textContent = donnees.name;

    const temperature = document.createElement("p");
    temperature.textContent = `Température : ${donnees.main.temp} °C`;

    const description = document.createElement("p");
    description.textContent = `Conditions : ${donnees.weather[0].description}`;

    const icone = document.createElement("img");
    icone.src = `https://openweathermap.org/img/wn/${donnees.weather[0].icon}@2x.png`;
    icone.alt = donnees.weather[0].description;

    container.appendChild(titre);
    container.appendChild(icone);
    container.appendChild(temperature);
    container.appendChild(description);
    container.style.display = "block";
  
}

