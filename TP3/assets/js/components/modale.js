//Variables et sélections HTML
const modale = document.querySelector(".modale-conteneur");
const bouton = document.querySelector(".fermer-modale");

// Fonctions
export function init() {
    bouton.addEventListener("click", cacherModale);
    cacherModale();
}

export function setTitre(nouveauTitre) {
    //changer le texte
    modale.querySelector(".titre").textContent = nouveauTitre;

    //changer le style
    modale.querySelector(".titre").style.color = "red";
    modale.querySelector(".titre").style.fontSize = "2em";
    modale.querySelector(".titre").style.backgroundColor = "yellow";
    modale.querySelector(".titre").style.borderRadius = "10px";
    modale.querySelector(".titre").style.padding = "10px";
    modale.querySelector(".titre").style.display = "block";

}

//Fonction accessible à l'extérieur de ce fichier
export function afficherModale() {
    modale.classList.remove("invisible");

    let utilisateur = {
        nom: "Maxime",
        age: undefined,
    };

    let chaineUtilisateur = JSON.stringify(utilisateur);
    console.log(chaineUtilisateur);
    //Convertir en chaine avant
    localStorage.setItem("utilisateur", chaineUtilisateur);
    localStorage.setItem("modale-ouverte", "true");
}

//Fonction accessible à l'extérieur de ce fichier
function cacherModale() {
    modale.classList.add("invisible");
}

// Exécution
init();
