// --- TABLEAUX ---
const boissons = [
  {
    id: 1,
    nom: "Cafe latte chaud",
    prix: "4.5",
    description: "Boisson chaud",
    src: "assets/img/cafe_latte_chaud.jpg",
  },
  {
    id: 2,
    nom: "Cafe cappuccino chaud",
    prix: "5",
    description: "Boisson chaud",
    src: "assets/img/cafe_cappuccino_chaud.jpg",
  },
  {
    id: 3,
    nom: "Cafe matcha chaud",
    prix: "4.5",
    description: "Boisson chaud",
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
    src: "assets/img/cafe_cappuccino_froid.jpg",
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

// --- BOUTONS ---
const boutonFiltreChaud = document.querySelector(".filtre-chaud");
const boutonFiltreFroid = document.querySelector(".filtre-froid");
const boutonTrierCroissant = document.querySelector(".tri-crois");
const boutonTrierDecroissant = document.querySelector(".tri-decrois");
const boutonReafficher = document.querySelector(".reafficher");

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
});

// --- INITIALISATION DE LA PAGE ---- //
function init() {
  // Afficher la liste des boissons au chargement de la page
  afficherListe(boissons);

  // Ajout des événements sur les boutons pour filtrer et trier les produits
  boutonFiltre.addEventListener("click", function () {
    let boissonsFiltrees = filtrerParPrixMin(boissons, 2.5);
    afficherListe(boissonsFiltrees);
  });

  boutonsTrierCroissant.addEventListener("click", function () {
    let boissonsTriees = trierParPrixCroissant(boissons);
    afficherListe(boissonsTriees);
  });

  boutonTrierDecroissant.addEventListener("click", function () {
    let boissonsTriees = trierParPrixDécroissant(boissons);
    afficherListe(boissonsTriees);
  });
}

// --- FONCTIONS ---
/* Fonction pour afficher une liste des boissons */
function afficherListe(tableauBoissons) {
  viderListe();

  const listeBoissonsHTML = document.querySelector(".liste-boissons");
  listeBoissonsHTML.innerHTML = "";

  tableauBoissons.forEach(function (boisson) {
    let gabarit = `
            <div class="boisson" data-id="${boisson.id}">
                <h3>${boisson.nom}</h3>
                <img src="${boisson.src}" alt="${boisson.nom}">
                <p>${boisson.description}</p>
                <p>Prix: ${boisson.prix}$</p>
            </div>`;

    // Ajoutez l'élément dans la liste
    listeBoissonsHTML.insertAdjacentHTML("beforeend", gabarit);

    // Ajoutez un écouteur d'évènement sur chaque boisson
    let elementAjoute = listeBoissonsHTML.lastElementChild;

    elementAjoute.addEventListener("click", function () {
      afficherDetails(boisson);
    });
  });
}
/* Fonction pour vide la liste */
function viderListe(tableauBoissons) {
  listeBoissonsHTML.innerHTML = "";
}

/* Fonction pour afficher les détails d'une boisson */
function afficherDetails(boisson) {
  const detailSelction = document.querySelector(".boisson-selection");
  // Retirer la classe active de toutes les boissons
  const boissons = document.querySelectorAll('.boisson');
  boissons.forEach(boisson => boisson.classList.remove('active'));

  // Ajouter la classe active à l'élément cliqué
  element.classList.add('active');

  // Obtenir les données de l'élément cliqué
  let { nom, description, prix } = boissons;

  // Afficher les détails dans la section aside
  const detailContainer = boissons;
  detailContainer.innerHTML = `
      <h3>${nom}</h3>
      <p>${description}</p>
      <p>Prix: ${prix}</p>
  `;
}

// Créer une fonction qui formatter le chemin des images
function formaterChemin(tableauChemin) {
  let chemin = "";

  // Joindre les éléments du tableau
  chemin = `${tableauChemin.join("/")}/`;

  return chemin;
}

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

init();
