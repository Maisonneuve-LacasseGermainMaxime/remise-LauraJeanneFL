class Test {
    constructor(paramNom, paramTaille, conteneurHTML) {
        console.log("Allo dans la classe");
        this.nom = paramNom;
        this.taille = paramTaille;
        this.conteneurHTML = conteneurHTML;
        this.elementHTML;
        this.tableau = [4, 4, 44];
        
        this.afficher();
        let contexte = this;

        this.conteneurHTML.addEventListener(
            "click",
            function () {
                console.log(this.nom);
            }.bind(contexte)
        );

        this.tableau.forEach(function(){
            
        }.bind(contexte));
    }

    afficher() {
        let contenu = `
        <div>
            <h2>${this.nom}</h2>
            <p>${this.taille}</p>
        </div>
        `;

        this.conteneurHTML.insertAdjacentHTML("beforeend", contenu);
        this.elementHTML = this.conteneurHTML.lastElementChild;
    }
}

export default Test;
