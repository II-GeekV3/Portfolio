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
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Changez 2000 pour la durée de chaque image en millisecondes
}


