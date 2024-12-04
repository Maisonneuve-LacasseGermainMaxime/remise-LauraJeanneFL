export function init () {}



/* Créer une boite modale de votre choix qui s'affiche après 5 secondes. Vous n'avez pas à
gérer la donnée qu'elle contient (ex: abonnement infolettre). Elle doit minimalement contenir un bouton
pour la fermer et pouvoir se cacher au clic */
function boitePopUp(event) {
    let modaleConteneur = document.querySelector("modale-conteneur")
    let fermer = document.querySelecto("fermer-modale");

    setTimeout(function () {
        afficherModale(modaleConteneur);
    }, 5000);

    //Fermer la boite quand bouton fermer est cliqué
    fermer.addEventListener("click", function () {
        modaleConteneur.classList.add("invisible");
    });
}

function afficherModale(modaleConteneur){
    modaleConteneur.classList.remove("invisible");
}

//Execution
boitePopUp();