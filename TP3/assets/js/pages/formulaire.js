// Variables
let sectionActuelle = 0;
let formulaireValide = false;

// Elements HTML
const formulaire = document.querySelector('#formulaire');
const champs = document.querySelectorAll("input, textarea");
const sections = formulaire.querySelectorAll("section[data-page]");
const sectionResume = document.querySelector('.resume');

const typeCommandeRadios = document.querySelectorAll('input[name="radio"]');
const champAdresse = document.getElementById('adresse');
const champVille = document.getElementById('ville');
const champCodePostal = document.getElementById('code-postal');

// Boutons
const boutonSuivant = document.querySelectorAll("[data-direction='1']");
const boutonPrecedent = document.querySelectorAll("[data-direction='-1']");

// Fonctions
function init (){
    // Ajoute un écouteur d'événements pour soumettre le formulaire 
    formulaire.addEventListener("submit", onSubmit);
    
    // Ajoute un écouteur pour chaque changement de champ du formulaire
    champs.forEach(function (champ) {
        champ.addEventListener("input", onChangementChamp);
        champ.addEventListener("change", onChangementChamp);
    });

    // Ajoute des écouteurs d'événements pour les boutons suivant et précédent
    boutonSuivant.forEach(bouton => bouton.addEventListener("click", onSuivant));
    boutonPrecedent.forEach(bouton => bouton.addEventListener("click", onPrecedent));


    // Ajoute des écouteurs d'événements aux boutons radio pour activer la fonction lors de chaque changement
    typeCommandeRadios.forEach(radio => {
        radio.addEventListener('change', activerDesactiverAdresse);
    });

    // Appel initial pour désactiver l'adresse si "Ramassage" est sélectionné au départ
    activerDesactiverAdresse();
    
    // Affiche la section actuelle
    afficherSection(); 

    const modeToggle = document.querySelectorAll("[data-mode]");
    console.log("Boutons mode trouvés :", modeToggle);

    modeToggle.forEach(button => {
        button.addEventListener("click", () => {
            const currentMode = document.body.getAttribute("data-mode");
            const backgroundElement = document.querySelector('.anime-grad-couleur');

            if (currentMode === "nuit") {
                document.body.setAttribute("data-mode", "jour");
                backgroundElement.classList.remove("anime-grad-couleur-nuit");
                backgroundElement.classList.add("anime-grad-couleur-jour");
            } else {
                document.body.setAttribute("data-mode", "nuit");
                backgroundElement.classList.remove("anime-grad-couleur-jour");
                backgroundElement.classList.add("anime-grad-couleur-nuit");
            }
            console.log("Thème actuel :", document.body.getAttribute("data-mode"))
        });
    });
}


// Fonction appelée lorsque l'utilisateur passe à la section suivante
function onSuivant() {
    // Vérifie que tous les champs de la section actuelle sont valides
    if (verifierSection()) {
        sectionActuelle++;
        afficherSection();
    } else {
        alert("Veuillez corriger les erreurs avant de continuer.");
    }
}


// Fonction appelée lorsque l'utilisateur revient à la section précédente
function onPrecedent() {
    sectionActuelle--;
    afficherSection();
}


// Fonction appelée lors de la soumission du formulaire
function onSubmit(evenement) {

    // Empêche le comportement par défaut de soumission du formulaire
    evenement.preventDefault();

    // Vérifie si tous les champs du formulaire sont valides
    if (formulaire.reportValidity()) {
        // Le formulaire est marqué comme valide
        formulaireValide = true; 
        alert("Formulaire soumis avec succès !");
    }else {
        // Affiche une alerte si des champs sont manquants
        alert("Veuillez compléter tous les champs obligatoires.");
    }
}


// Fonction appelée à chaque changement dans un champ de formulaire
function onChangementChamp(evenement) {
    // Champ qui a déclenché l'événement
    const champ = evenement.currentTarget;
    const type = champ.type;
    const name = champ.name;
    const valeur = champ.value;

    // Eviter les espace vides par erreurs
    champ.value = champ.value.trim();

    // Vérification du champs "code-postal"
    if (name == "code-postal"){
        champ.value = champ.value.replace(/([A-z][0-9][A-z])\s?([0-9][A-z][0-9])/, "$1 $2").toUpperCase()
    }

   // Vérifie si le champ courriel est valide
    if (type == "courriel") {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(champ.valeur)) {
            champ.setCustomValidity("Adresse courriel invalide");
        } else {
            champ.setCustomValidity("");
        }
    }

    //Validation du champs 
    const estValide = champ.checkValidity();

    if (!estValide) {
        champ.classList.add("invalid");
    } else {
        champ.classList.remove("invalid");
    }

    const sectionParent =  champ.closest("section");
    const champsSection = sectionParent.querySelectorAll("[name");
    const tableauValidation = [];

    champsSection.forEach(function (champ) {
        const estValide = champ.checkValidity();
        tableauValidation.push(estValide);
    });
    const sectionInvalide = tableauValidation.includes(false);

    const boutonSuivant = sectionParent.querySelector(".bouton[data-direction='1']");
    if (sectionInvalide) {
        boutonSuivant.classList.add("disabled");
    } else {
        boutonSuivant.classList.remove("disabled");
    }
}


// Fonction pour activer/désactiver le champ adresse
function activerDesactiverAdresse() {
    let livraisonChoisie = false;

        // Parcourt chaque bouton radio
        for (let i = 0; i < typeCommandeRadios.length; i++) {
        
            if (typeCommandeRadios[i].checked && typeCommandeRadios[i].value !== 'Ramassage') {
            livraisonChoisie = true;
            break; 
            }
        }
    // Active ou désactive les champs en fonction du choix
    champAdresse.disabled = !livraisonChoisie;
    champVille.disabled = !livraisonChoisie;
    champCodePostal.disabled = !livraisonChoisie;

    // Retire les attributs "required" si "Ramassage" est sélectionné
    champAdresse.required = livraisonChoisie;
    champVille.required = livraisonChoisie;
    champCodePostal.required = livraisonChoisie;
}


// Met à jour le résumé avec les données du champ 
function afficherResume(nomChamp, valeur) {
    const champResume = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
    if (champResume !== null) {
        champResume.textContent = valeur;
    }
}


// Affiche la section actuelle et cache les autres
function afficherSection() {
    sections.forEach((section, index) => {
        section.style.display = index === sectionActuelle ? "block" : "none";

         // Met à jour le résumé pour la section actuelle
        if (sectionActuelle === sections.length - 1) {
        mettreAJourResume();
        }

        // 1. Trouver le bouton Suivant dans la section
        const boutonSuivant = section.querySelectorAll(".bouton[data-direction='1']");

        // 2. Vérifie que le bouton existe avant de le désactiver
        if (boutonSuivant) {
            boutonSuivant.disabled = !verifierSection();
        }

        
        if (!verifierSection()) {
            section.querySelectorAll(".bouton[data-direction='1']").disabled = true;
        } else {
            section.querySelectorAll(".bouton[data-direction='1']").disabled = false;
        }
    });
}

function mettreAJourResume() {
    const champsForm = formulaire.querySelectorAll("input, textarea");
    
    champsForm.forEach(champ => {
        const nomChamp = champ.name;
        const valeur = champ.value;
        afficherResume(nomChamp, valeur);
    });

    // Met à jour le type de commande
    const typeCommande = Array.from(typeCommandeRadios).find(radio => radio.checked)?.value || "";
    afficherResume("radio", typeCommande);
}


// Vérifie si la section actuelle est valide en testant tous ses champ
function verifierSection() {
    let sectionValide = true;
    const champsSection = sections[sectionActuelle].querySelectorAll("input, textarea");

     // Vérifier chaque champ
    champsSection.forEach(champ => {
        if (!champ.reportValidity()) {
            sectionValide = false;
            champ.classList.add("invalide");
        } else {
            champ.classList.remove("invalide");
        }
    });
    return sectionValide;
}


// Exécution
init();