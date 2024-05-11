// Récupération de tous les éléments d'accordéon
const accordions = document.querySelectorAll('.accordion-item');

// Parcours de chaque élément d'accordéon
accordions.forEach(accordion => {
    // Écouteur d'événement de clic sur chaque titre d'accordéon
    accordion.addEventListener('click', () => {
        // Basculement de l'état actif de l'accordéon
        accordion.classList.toggle('active');
        // Sélection de la section de contenu correspondante
        const content = accordion.nextElementSibling;
        // Basculement de la visibilité du contenu
        content.classList.toggle('active');
    });
});
// Récupération de l'élément BTS SIO dropdown
const btsSioDropdown = document.getElementById('bts-sio-dropdown');

// Récupération de l'élément du menu déroulant BTS SIO
const btsSioMenu = document.getElementById('bts-sio-menu');

// Ajout d'un écouteur d'événement pour le survol de l'élément BTS SIO
btsSioDropdown.addEventListener('mouseover', () => {
    // Affichage du menu déroulant
    btsSioMenu.style.display = 'block';
});

// Ajout d'un écouteur d'événement pour quitter l'élément BTS SIO
btsSioDropdown.addEventListener('mouseout', () => {
    // Masquage du menu déroulant
    btsSioMenu.style.display = 'none';
});
var slideIndex1 = 0;
var slideIndex2 = 0;

showSlides1();
showSlides2();

function showSlides1() {
    var i;
    var slides = document.querySelectorAll('.slideshow-container .mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    slides[slideIndex1 - 1].style.display = "block";
    setTimeout(showSlides1, 4000); // Changez 4000 pour la durée de chaque image en millisecondes
}

function showSlides2() {
    var i;
    var slides = document.querySelectorAll('.slideshow-container2 .mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    setTimeout(showSlides2, 4000); // Changez 4000 pour la durée de chaque image en millisecondes
}


// Récupération de tous les éléments de texte des options
const optionTexts = document.querySelectorAll('#debouches ul li');

// Parcours de chaque élément de texte des options
optionTexts.forEach(option => {
    // Ajout d'un écouteur d'événement pour le survol de chaque élément de texte
    option.addEventListener('mouseover', () => {
        // Changement de la couleur de fond lors du survol
        option.style.backgroundColor = 'lightgray';
    });

    // Ajout d'un écouteur d'événement pour le départ du survol de chaque élément de texte
    option.addEventListener('mouseout', () => {
        // Rétablissement de la couleur de fond d'origine
        option.style.backgroundColor = 'transparent';
    });
});
// Récupération de tous les paragraphes dans la section de veille
const paragraphs = document.querySelectorAll('#veille p');

// Ajout d'un écouteur d'événement pour chaque paragraphe
paragraphs.forEach(paragraph => {
    // Ajout d'un écouteur d'événement pour le survol de chaque paragraphe
    paragraph.addEventListener('mouseover', () => {
        // Ajout d'une classe pour appliquer un effet supplémentaire si nécessaire
        paragraph.classList.add('hover-effect');
    });

    // Ajout d'un écouteur d'événement pour la fin du survol de chaque paragraphe
    paragraph.addEventListener('mouseout', () => {
        // Suppression de la classe pour réinitialiser l'effet
        paragraph.classList.remove('hover-effect');
    });
});
