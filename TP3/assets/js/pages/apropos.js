import { init as initNavigation } from "../components/navigation.js";
import { init as initModale, afficherModale } from "../components/modale.js";
import Test from "../classes/Test.js";
import Carrousel from "../classes/carroussel.js";
import ScrollAnimator from "../classes/scrollAnimation.js";
let compteur = 0;
let header = document.querySelector("header");

function init() {
    initNavigation();

    let body = document.body;

    let navigation = document.querySelector("nav");
    let logo = navigation.querySelector("nav img");
    logo.addEventListener("click", function() {
        logo.classList.add("anime");
    });

    //Permet d'enlever l'animation
    logo.addEventListener("animationend", function () {
        logo.classList.remove("anime");
    });

    // Animation test pour le logo
    function testAnimation() {
        let tempsActuel = performance.now();
        let tempsEcoule = tempsActuel - compteur;

        if (tempsEcoule < 5000) {
            document.querySelector("h2").style.left = tempsEcoule / 10 + "px";
            requestAnimationFrame(testAnimation);
        }
    }

    // Lancer l'animation quand on clique sur le logo
    logo.addEventListener("click", testAnimation);

    let carrouselConteneur = document.querySelector("[data-carrousel]");
    let tableauImages = 
    [
        "assets/img/img-page-apropos/cafe-et-grains.jpg",
        "assets/img/img-page-apropos/cafe-fenetre.jpg",
        "assets/img/img-page-apropos/cafe-seul.jpg",
        "assets/img/img-page-apropos/machine-cafe.jpg"
    ];

    let carrousel = new Carrousel(carrouselConteneur, tableauImages);

    let zone = null;
    let cibles = document.querySelectorAll(".section");
    new ScrollAnimator(zone, cibles);

    let soustitres = document.querySelectorAll("h2");

    soustitres.forEach(function (soustitre, index) {
        let animation;

        soustitre.addEventListener("mouseenter", function () {

           if (!animation || animation.playState !== "running") {
            let clesAnimation = [
                {offset: 0 , color:"#4128C5", opacity: 1,},
                {offset: 0.5, color: "#732BF3", opacity: 1,},
                {offset: 1., color:  "#586DD6", opacity: 1,},
            ];
            let options = {
                duration: 5000,
                fill: "backwards",
                easing: "ease-in-out",
                delay: 1000 * index,
            };
            animation = soustitre.animate(clesAnimation, options);

            }
        });

    });

    document.addEventListener("DOMContentLoaded", () => {
        const modalContainer = document.querySelector('.modale-conteneur');
        const closeModal = document.querySelector('.fermer-modale');
    
        // Show the modal after 5 seconds
        setTimeout(() => {
            modalContainer.classList.remove('invisible');
        }, 5000);
    
        // Close modal on click
        closeModal.addEventListener('click', () => {
            modalContainer.classList.add('invisible');
        });
    });

    const modeToggle = document.querySelectorAll("[data-mode]");

    modeToggle.forEach(button => {
        button.addEventListener("click", () => {
            const currentTheme = document.body.getAttribute("data-theme");
            if (currentTheme === "nuit") {
                document.body.setAttribute("data-theme", "jour");
            } else {
                document.body.setAttribute("data-theme", "nuit");
            }
        });
    });
}

function testAnimation() {
    // Calcul du temps écoulé entre deux appels à requestAnimationFrame.
    let tempsActuel = performance.now();
    let tempsEcoule = tempsActuel - compteur;

    if (tempsEcoule < 5000) {
        //Ou titre.style.left < window.innerWidth

        document.querySelector("h2").style.left = tempsEcoule / 10 + "px";
        // On rappelle la fonction pour boucler l'animation tant que la condition n'est pas remplie.
        requestAnimationFrame(testAnimation);
    }
}
function onClicElement(event) {
    let currentTarget = event.currentTarget; //L'élément attaché au AddEventListener
    let target = event.target; //Le VRAI déclencheur

    let paragraphe = target.closest("p");
    if (paragraphe !== null) {
    compteur++;
    if (compteur >= 5) {
    header.removeEventListener("dblclick", onClicElement);
    }
   
    }
}

init();