/**
 * Classe Carrousel
 * Servant à gérer un carrousel d'images
 */
class Carrousel {
    constructor(conteneurHTML, tableauImages) {
        //Variables
        this.position = 0;
        let contexteClasse = this;

        //Liste images a afficher
        this.tableauImages = tableauImages;

        //Sélection HTML
        this.conteneurHTML = conteneurHTML;
        this.imageConteneur = this.conteneurHTML.querySelector(".conteneur-image-principale img");

        this.template = this.conteneurHTML.querySelector("template#conteneur-image-navigation");
        this.listeImages = this.conteneurHTML.querySelector(".carrousel-liste-images");

        //Événements
        this.conteneurHTML.addEventListener("click", this.onClicCarrousel.bind(contexteClasse));
        this.interval = window.setInterval(
            function () {
                this.avancer();
            }.bind(contexteClasse),
            3000
        );

        this.conteneurHTML.addEventListener(
            "mouseenter",
            function () {
                clearInterval(this.interval);
            }.bind(this)
        );

        this.conteneurHTML.addEventListener(
            "mouseleave",
            function () {
                this.interval = window.setInterval(
                    function () {
                        this.avancer();
                    }.bind(contexteClasse),
                    3000
                );
            }.bind(this)
        );
        //Exécution lors de l'instanciation
        this.afficherImage(this.tableauImages[this.position]);
        
        this.init();
    }

    init() {
        this.afficherImage();
        this.avancer();
        this.reculer();

        /*this.setAutomatiqueScroll(); */
    }

    //Fonction qui affiche une image
    afficherImage(source) {
        this.imageConteneur.src = source;   
    }

    //Fonction servant à gérer les clics sur le carrousel
    onClicCarrousel(evenement) {
        //On récupère le bouton cliqué avec closest et on vérifie s'il y a un attribut data-direction
        let bouton = evenement.target.closest("[data-direction]");

        //Si on a trouvé un bouton
        if (bouton != null) {
            let direction = Number(bouton.dataset.direction);

            if (direction == 1) {
                this.avancer();
            } else if (direction == -1) {
                this.reculer();
            }
        }
    }

    //Fonction qui permet de faire avancer le carrousel d'une image
    setAutomatiqueScroll() {
        //Intervalle qui va faire défiler les images automatiquement toutes les 3 secondes
        this.conteneurHTML.addEventListener("click", this.onClicCarrousel.bind(contexteClasse));
        this.interval = window.setInterval(
            function () {
                this.avancer();
            }.bind(contexteClasse),
            2000
        );
    }
    
    //Fonction qui permet de faire avancer le carrousel d'une image
        avancer() {
            //On incrémente la position
            this.position++;
    
            //Si on dépasse la fin du tableau, on revient au début
            if (this.position >= this.tableauImages.length) {
                this.position = 0;
            }
    
            //On récupère l'image à afficher
            let image = this.tableauImages[this.position];
            //On l'affiche
            this.afficherImage(image);
        }
    
        reculer() {
            //On décrémente la position
            this.position--;
            //Si on dépasse le début du tableau, on revient à la fin
            if (this.position < 0) {
                this.position = this.tableauImages.length - 1;
            }
            //On récupère l'image à afficher
            let image = this.tableauImages[this.position];
            //On l'affiche
            this.afficherImage(image);
        }
}
   
export default Carrousel;

