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

// --- Filtres ---
const boutonFiltre = document.querySelector(".filtres");
const boutonFiltreChaud = document.querySelector(".filtre-chaud");
const boutonFiltreFroid = document.querySelector(".filtre-froid");
const boutonTrierCroissant = document.querySelector(".tri-crois");
const boutonTrierDecroissant = document.querySelector(".tri-decrois");
const boutonReafficher = document.querySelector(".reafficher");

// ------ FONCTIONS -------
/* Fonction pour initialiser la page */
function init() {
  // Afficher la liste des boissons au chargement de la page
  afficherListe(boissons);

  // Afficher une boisson aléatoire au chargement de la page
  const boissonAleatoire = Math.floor(Math.random() * boissons.length);
  afficherDetails(boissons[boissonAleatoire]);

  // Ajout des événements sur les boutons pour filtrer et trier les produits chauds
  boutonFiltreChaud.addEventListener("click", function () {
    let boissonsChaudes = filtrerParType(boissons, "chaude");
    afficherListe(boissonsChaudes);
    enleverSelectionFiltres();
    boutonFiltreChaud.classList.add("selected-filter");
  });

  // Ajout des événements sur les boutons pour filtrer et trier les produits froids
  boutonFiltreFroid.addEventListener("click", function () {
    let boissonsFroides = filtrerParType(boissons, "froide");
    afficherListe(boissonsFroides);
    enleverSelectionFiltres();
    boutonFiltreFroid.classList.add("selected-filter");
  });

  // Ajout des événements sur les boutons pour filtrer et trier les produits
  boutonFiltre.addEventListener("click", function () {
    let boissonsFiltrees = filtrerParPrixMin(boissons, 2.5);
    afficherListe(boissonsFiltrees);
  });

  boutonTrierCroissant.addEventListener("click", function () {
    let boissonsTriees = trierParPrixCroissant(boissons);
    afficherListe(boissonsTriees);
  });

  boutonTrierDecroissant.addEventListener("click", function () {
    let boissonsTriees = trierParPrixDecroissant(boissons);
    afficherListe(boissonsTriees);
  });
}
  
/* Fonction pour afficher une liste des boissons */
function afficherListe(tableauBoissons) {
  conteneurListe.innerHTML = ""; 

  /* const listeBoissonsHTML = document.querySelector(".liste-boissons");
  listeBoissonsHTML.innerHTML = ""; */

  tableauBoissons.forEach(function (boisson) {
    let gabarit = `
            <div class="boisson" data-id="${boisson.id}">
                <h3>${boisson.nom}</h3>
                <img class="produit_img" src="${getNomImage(boisson.src)}" alt="${boisson.nom}">
                <p>${boisson.description}</p>
                <p>Prix: ${boisson.prix}$</p>
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
/* Version corrigé */
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
  const id = parseInt(declencheur.dataset.id); 
  const boissonSelectionnee = boissons.find(boisson => boisson.id === id);
  afficherDetails(boissonSelectionnee);
}

/* Fonction pour filtrer par type (chaud ou froid) */
function filtrerParType(boissons, type) {
  return boissons.filter(function (boisson) {
    return boisson.description.includes(type);
  });
}

function enleverSelectionFiltres() {
  document.querySelectorAll(".filtres > div").forEach(function (bouton) {
    bouton.classList.remove("selected-filter");
  });
}

// Fonction qui trie les boissons par prix croissant
function trierParPrixCroissant(boissons) {
  let copie = [...boissons];
  copie.sort((a, b) => a.prix - b.prix);
  return copie;
}

// Fonction qui trie les boissons par prix décroissant
function trierParPrixDecroissant(boissons) {
  let copie = [...boissons];
  copie.sort((a, b) => b.prix - a.prix);
  return copie;
}

// Initialiser la page
init();

/* Fonction pour vide la liste 
function viderListe(tableauBoissons) {
  listeBoissonsHTML.innerHTML = "";
}
*/

/* 
  /!\ Comm. prof: Attention, tu dédoubles les écouteurs d'événements, 
  tu n'as pas besoin de DomContentLoaded si tu utilises l'attribut defer 
  dans ta balise script. Je n'ai jamais utilisé cet événement en classe 
  depuis le début du cours. 
  document.addEventListener("DOMContentLoaded", function () {
    afficherListe(boissons);

    boutonFiltreChaud.addEventListener("click", function () {
      let boissonsChaudes = filtrerParType(boissons, "chaud");
      afficherListe(boissonsChaudes);
      enleverSelectionFiltres();
      boutonFiltreChaud.classList.add("selected-filter");
    });

    boutonFiltreFroid.addEventListener("click", function () {
      let boissonsFroides = filtrerParType(boissons, "froid");
      afficherListe(boissonsFroides);
      enleverSelectionFiltres();
      boutonFiltreFroid.classList.add("selected-filter");
    });

    boutonTrierCroissant.addEventListener("click", function () {
      let boissonsTriees = trierParPrixCroissant(boissons);
      afficherListe(boissonsTriees);
      enleverSelectionFiltres();
      boutonTrierCroissant.classList.add("selected-filter");
    });

    boutonTrierDecroissant.addEventListener("click", function () {
      let boissonsTriees = trierParPrixDecroissant(boissons);
      afficherListe(boissonsTriees);
      enleverSelectionFiltres();
      boutonTrierDecroissant.classList.add("selected-filter");
    });

    boutonReafficher.addEventListener("click", function () {
      afficherListe(boissons);
      enleverSelectionFiltres();
      boutonReafficher.classList.add("selected-filter");
    });

    boutonBoissonSlectionnee.addEventListener("click", function () {
      let boissonSelectionnee = boissons.find(
        (boisson) => boisson.nom === nomBoissonsHTML.textContent
      );
      afficherDetails(boissonSelectionnee);
    });
  */

  /* // Créer une fonction qui formatter le chemin des images
    function formaterChemin(tableauChemin) {
      let chemin = "";

      // Joindre les éléments du tableau
      chemin = `${tableauChemin.join("/")}/`;

      return chemin;
    } */
