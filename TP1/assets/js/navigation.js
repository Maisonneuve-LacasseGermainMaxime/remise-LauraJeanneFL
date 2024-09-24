document.addEventListener("DOMContentLoaded", function () {
  genererNavigation();
});

// VARIABLES
const liensNavigation = [
  { nom: "Accueil", texte: "Accueil" },
  { nom: "Apropos", texte: "A propos" },
  { nom: "Contact", texte: "Contact" },
];
// FONCTIONS

// Fonction pour générer les éléments de navigation
function genererNavigation(lien) {
  const navLinks = document.querySelector(".nav-links ul");

  liensNavigation.forEach(function (lien) {
    // Création de l'élément <li> pour le lien
    let gabarit = `
            <li>
                <a href="${lien.nom.toLowerCase()}.html">${lien.texte}</a>
            </li>`;
    //On ajoute le lien sur la page
    navLinks.insertAdjacentElement("beforeend", gabarit);
  });
  // Mettre en évidence le lien de la page courante
  mettreEnEvidenceLienPageCourante();
}

/* Fonction pour la navigation */
function formatterLienNav(lien) {
  //Nettoyer le texte + Mettre en minuscules + Enlever les accents et remplacer les espaces par des tirets
  let lienFormatter = lien.trim().toLowerCase().replace(/\s+/g, "-");
  return lienFormatter;
}

function mettreEnEvidenceLienPageCourante() {
  // Récupérer le nom de la page courante à partir de l'URL
  let cheminActuel = window.location.pathname;
  let pageCourante = cheminActuel.split("/").pop().toLowerCase();

  // Sélectionner tous les liens de la navigation
  const liens = document.querySelectorAll(".nav-links a");

  liens.forEach(function (lien) {
    // Récupérer le nom de la page liée au lien
    let lienHref = lien.getAttribute("href");
    let nomPageLiee = lienHref.split("/").pop().toLowerCase();

    // Comparer avec la page courante et mettre en évidence si c'est la même page
    if (pageCourante === nomPageLiee) {
      lien.classList.add("lien-actif");
    }
  });
}

// Appeler la fonction de génération de la navigation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  genererNavigation();
});
