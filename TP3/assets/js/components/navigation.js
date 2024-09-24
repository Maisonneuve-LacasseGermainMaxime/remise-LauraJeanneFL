
// FONCTIONS
// Fonction pour générer les éléments de navigation
export function init(){
  // VARIABLES HTML 
  const conteneuModeNuit = document.querySelector(".conteneur-mode-nuit");
  
  conteneuModeNuit.addEventListener("click", changerModeNuit);
  
  let theme = localStorage.getItem("theme");
  document.body.dataset.theme = theme || "jour";

  // Mettre en évidence le lien de la page courante
  mettreEnEvidenceLienPageCourante();
}

// Fonction pour changer mode (sombre ou clair)
function changerModeNuit(evenement) {
  let target = evenement.target;
  let bouton = target.closest("[data-mode]");

  if (bouton !== null) {
      document.body.dataset.theme = bouton.dataset.mode;
      localStorage.setItem("theme", bouton.dataset.mode);
  }
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

/*   // VARIABLES POUR LA NAVIGATION
  const liensNavigation = [
    { 
      nom: "Accueil", 
      texte: "index.html" 
    },
    { 
      nom: "Apropos", 
    texte: "apropos.html" 
    },
    { 
      nom: "Contact", 
      texte: "formulaire.html" 
    },
  ]; */

/* Fonction pour la navigation *//* 
 function formatterLienNav(lien) {
  //Nettoyer le texte + Mettre en minuscules + Enlever les accents et remplacer les espaces par des tirets
  console.log(lien);
  let lienFormatter = (lien.toLowerCase().trim().replace(/\s+/g, "-"));
  return lienFormatter;
} */


