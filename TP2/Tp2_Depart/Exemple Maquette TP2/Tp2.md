# Travail pratique 2 - JavaScript - Validation de formulaire

## Objectifs

Dans ce travail, vous allez bâtir sur ce que vous avez appris dans le travail pratique précédent. Vous allez ajouter un formulaire à votre site web. Vous allez devoir valider les données du formulaire en utilisant les méthodes de validation de formulaire de JavaScript.

### Tâches à réaliser

#### Créer le formulaire

-   Vous devez ajouter un formulaire à votre page. Vous devez utiliser les éléments de formulaire HTML appropriés pour chaque type de données (ex: input, textarea, select, etc.).
-   Vous devez utiliser au moins 5 types de champs différents (ex: texte, email, nombre, etc.).
-   Votre formulaire doit contenir minimalement 3 sections qui seront affichées une à la fois en modifiant les classes CSS des sections:
    -   infos de l'utilisateur
    -   infos de la commande
    -   résumé de la commande
-   Ajoutez les attributs nécessaires pour faciliter la validation du formulaire (ex: required, type, pattern, etc.). Chaque champ doit avoir minimalement 1 attribut de validation mais vous devez en ajouter plus si nécessaire en fonction du type de champ.
-   Chaque champ doit avoir un label associé lié à l'élément de formulaire correspondant.
-   Un des champs doit être activté/désactivé par programmation lors d'un changement de valeur d'un autre champ.

#### Navigation dans le formulaire

-   Vous devez ajouter des boutons pour naviguer entre les sections du formulaire.
-   Vous devez afficher une section à la fois.
-   Les boutons pour continuer doivent être désactivés si les champs de la section ne sont pas valides.

#### Validation

-   Au changement de valeur d'un champ, vous devez valider le champ.
-   Si le champ est valide, vous devez afficher le résultat dans la section résumé.
-   Si le champ n'est pas valide, vous devez afficher un message d'erreur à côté du champ.
-   Le CSS doit permettre de distinguer visuellement les champs valides, invalides et désactivés.
-   Le code utilise les méthodes de validation de formulaire de JavaScript pour valider les champs.
-   Le code utilise la validation personnalisée à un endroit du formulaire.

#### Affichage dynamique

-   Vous devez modifier le contenu texte du formulaire dans la section résumé au changement de valeur de champs.

## Remise

Vous devez remettre votre travail dans un dossier .zip, nommé avec votre nom et prénom, sur Teams dans la section `Devoirs`. Assurez-vous que le dossier contient tous les fichiers nécessaires pour afficher la page dans un navigateur. Vous devez inclure les fichiers HTML, CSS, JavaScript et les images.

## Critères d'évaluation - Compte pour 25% de la note finale

### Contrôle de l'affichage par JavaScript

-   Le code HTML est présent sur la page et toutes les sections sont sur la même page. Il n'y a pas de rechargement de page.
-   Chaque section du formulaire est affichée une à la fois par le clic d'un bouton
-   Il est possible de revenir en arrière pour modifier les informations
-   Au changement de valeur des champs, le résultat est affiché dans le résumé
-   Il est impossible de cliquer un bouton désactivé.
-   Les champs valides, invalides et désactivés sont visuellement distincts grâce au CSS.
-   Le formulaire est bloqué lors de la soumission du formulaire pour éviter le rechargement de la page.

### Utilisation efficace des méthodes de validation de formulaire

-   Les champs de formulaire sont validés correctement
-   Les messages d'erreur sont affichés de façon claire et précise lorsqu'un champ n'est pas valide
-   Les messages d'erreur sont affichés à côté du champ de formulaire concerné
-   Les boutons sont désactivés lorsque les champs dans la section ne sont pas valides

### Structure et qualité de code

-   Le code ne contient pas d'erreur
-   Les console.log() de débogage sont retirés ou commentés
-   Les variables sont nommées de façon explicite
-   Les noms de fonctions sont explicites
-   Le code est bien indenté
-   Le code est facile à lire
-   Le code est structuré de façon logique de façon à éviter la répétition
-   Le code est structuré pour éviter les erreurs d'ordre d'exécution
-   Le code est divisé en fonctions pour éviter la répétition

### Autonomie et attitude professionnelle

-   Les éléments du devis sont présents
-   Le travail est remis à temps
-   Les références à du code externe sont bien documentées
-   Le code n'est pas copié-collé de sources externes ou de générateurs de code ou par intelligence artificielle
-   Le dossier de remise est bien nommé et complet.
-   L'étudiant.e a montré l'avancement de son travail à son enseignant.e
