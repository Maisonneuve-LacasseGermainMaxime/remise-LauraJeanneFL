// --- TABLEAUX ---
const boissons = [
  {
    id: 1,
    nom: "Cafe latte chaud",
    prix: "4.5",
    description: "Boisson chaude",
    src: "assets/img/cafe_latte_chaud.jpg",
  },
  {
    id: 2,
    nom: "Cafe cappuccino chaud",
    prix: "5",
    description: "Boisson chaude",
    src: "assets/img/cafe_cappucinno_chaud.jpg",
  },
  {
    id: 3,
    nom: "Cafe matcha chaud",
    prix: "4.5",
    description: "Boisson chaude",
    src: "assets/img/cafe_matcha_chaud.jpg",
  },
  {
    id: 4,
    nom: "Cafe moka chaud",
    prix: "5",
    description: "Boisson chaude",
    src: "assets/img/cafe_moka_chaud.jpg",
  },
  {
    id: 5,
    nom: "Tisane chaude",
    prix: "3",
    description: "Boisson chaude",
    src: "assets/img/tisane_chaude.jpg",
  },
  {
    id: 6,
    nom: "Cafe filtre",
    prix: "2.5",
    description: "Boisson chaude",
    src: "assets/img/cafe_filtre.jpg",
  },
  {
    id: 7,
    nom: "Smoothie fraise",
    prix: "3.5",
    description: "Boisson froide",
    src: "assets/img/smoothie_fraise.jpg",
  },
  {
    id: 8,
    nom: "Smoothie melon",
    prix: "3.5",
    description: "Boisson froide",
    src: "assets/img/smoothie_melon.jpg",
  },
  {
    id: 9,
    nom: "Cannette collagene",
    prix: "2.5",
    description: "Boisson froide",
    src: "assets/img/cannette_collagene.jpg",
  },
  {
    id: 10,
    nom: "Cafe latte froid",
    prix: "4.5",
    description: "Boisson froide",
    src: "assets/img/cafe_latte_froid.jpg",
  },
  {
    id: 11,
    nom: "Cafe cappuccino froid",
    prix: "5",
    description: "Boisson froide",
    src: "assets/img/cafe_cappucinno_froid.jpg",
  },
  {
    id: 12,
    nom: "Cafe matcha froid",
    prix: "4.5",
    description: "Boisson froide",
    src: "assets/img/cafe_matcha_froid.jpg",
  },
  {
    id: 13,
    nom: "Cafe moka froid",
    prix: "5",
    description: "Boisson froide",
    src: "assets/img/cafe_moka_froid.jpg",
  },
  {
    id: 14,
    nom: "Tisane froide",
    prix: "3",
    description: "Boisson froide",
    src: "assets/img/tisane_froide.jpg",
  },
];

// --- VARIABLES ---
const listeBoissonsHTML = document.querySelectorAll(".liste-boissons");
const nomBoissonsHTML = document.querySelector(".boisson-selection");

// --- Elements HTML ---
const detailHTML = document.querySelector(".detail");
const detailImg = detailHTML.querySelector(".detail_img");
const detailNom = detailHTML.querySelector(".detail_nom");
const detailDescription = detailHTML.querySelector(".detail_description");
const detailPrix = detailHTML.querySelector(".detail_prix");

const conteneurListe = document.querySelector(".grille-produits");


/* const boutonReafficher = document.querySelector(".bouton reafficher"); */

// ------ FONCTIONS -------
/* Fonction pour initialiser la page */
function init() {

  // --- Filtres ---
  const boutonFiltre= document.querySelectorAll(".filtre");
  const boutonTris = document.querySelectorAll(".tri");

  boutonTris.forEach(function (tri) {
    tri.addEventListener("click", trier);
  });
  boutonFiltre.forEach(function (filtre) { 
      filtre.addEventListener("click", filtrer);
  });

  afficherListe(boissons);

  // Afficher une boisson aléatoire au chargement de la page
  const boissonAleatoire = Math.floor(Math.random() * boissons.length);
  afficherDetails(boissons[boissonAleatoire]);
}

  
/* Fonction pour afficher une liste des boissons */
function afficherListe(tableauBoissons) {
  // Réinitialiser la liste
  conteneurListe.innerHTML = ""; 

  tableauBoissons.forEach(function (boisson) {
    let gabarit = `
            <div class="boisson" data-id="${boisson.id}">
                <h2>${boisson.nom}</h2>
                <img class="produit_img" src="${getNomImage(boisson.src)}" alt="${boisson.nom}">
                <p>${boisson.description}</p>
                <p>Prix: ${boisson.prix}$</p>
                <div class="bouton">Ajouter au panier</div>
            </div>`;

    // Ajoutez l'élément dans la liste
    conteneurListe.insertAdjacentHTML("beforeend", gabarit);

    // Ajoutez un écouteur d'évènement sur chaque boisson
    let elementAjoute = conteneurListe.lastElementChild;
    elementAjoute.addEventListener("click", onClicElementListe) 
  });
}

/* Fonction qui récupère le nom de l'image  de la boisson sélectionnée */
// Créer une fonction qui formatter le chemin des images
function getNomImage(boissonSrc) {
  let chemin = boissonSrc.trim().toLowerCase().replaceAll(" ", "_");
  return `${chemin}`;
}

/* Fonction pour afficher les détails d'une boisson */
function afficherDetails(boisson) {
  const chemin = getNomImage(boisson.src);
  detailImg.src = chemin;
  detailNom.textContent = boisson.nom; 
  detailDescription.textContent = boisson.description;
  detailPrix.textContent = `${boisson.prix} $`;
}

/* Fonction captée au clic */
function onClicElementListe(evenement) {
  const declencheur = evenement.currentTarget;
  const id = declencheur.getAttribute('data-id');;

  const boissonSelectionnee = boissons.find(boisson => boisson.id == id);
  afficherDetails(boissonSelectionnee);
}


// Fonction qui trie les boissons par prix croissant/décroissant
function trier(evenement) {
  const copie = [...boissons];
  const boutonTriDeclencheur = evenement.currentTarget;
  const id = boutonTriDeclencheur.id;

  if (id === "tri-crois") {
    copie.sort((boissonA, boissonB) => boissonA.prix - boissonB.prix);
  } else if (id === "tri-decrois") {
    copie.sort((boissonA, boissonB) => boissonB.prix - boissonA.prix);
  }

  // Afficher la liste triée
  afficherListe(copie);
}

/* Fonction pour filtrer par type (chaud ou froid) */
function filtrer(evenement) {
  let tableauFiltre = [];
  const boutonFiltreDeclencheur = evenement.currentTarget;
  const id = boutonFiltreDeclencheur.id;

  if (id === "filtre-froid") {
    tableauFiltre = boissons.filter(boisson => boisson.description === "Boisson froide");
  } else if (id === "filtre-chaud") {
    tableauFiltre = boissons.filter(boisson => boisson.description === "Boisson chaude");
  }

  // Afficher la liste filtrée
  afficherListe(tableauFiltre);
}

function enleverSelectionFiltres() {
  document.querySelectorAll(".filtres > div").forEach(function (bouton) {
    bouton.classList.remove("selected-filter");
  });
}

// Initialiser la page
init();

