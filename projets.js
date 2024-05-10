// Script JavaScript pour l'effet d'apparition de la liste de projets
window.addEventListener('load', function() {
    const projects = document.getElementById('projects');
    projects.style.opacity = '0'; // Définit l'opacité initiale de la section à 0

    // Ajoute une classe pour l'effet de transition
    projects.classList.add('fade-in');

    // Active la transition une fois que la page est complètement chargée
    setTimeout(function() {
        projects.style.opacity = '1';
    }, 300);
});
document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.querySelectorAll('#projects ul li');
    const projectDetails = document.getElementById('project-details');

    projectList.forEach(function(project) {
        project.addEventListener('click', function() {
            const projectId = project.getAttribute('data-project-id');

            // Détermine le contenu spécifique du projet sélectionné
            let projectContent = '';
            switch (projectId) {
                case '1':
                    projectContent = `
                        <h3>Détails du Projet : Réalisation d'un site web</h3>
                        <p>
                        Ceci est le premier site et projet réalisé au cours de mes 2 années en BTS. Ce site est un site vitrine qui décrit le jeu Overwatch. On y retrouve la description de toutes les cartes, de tous les personnages (Heal, DPS ou Tank), et bien sûr tous les modes de jeux possibles, avec une vidéo de visite de chaque carte et un gameplay de chaque personnage. PS : (Les images de fond n'ont rien à voir avec le thème, je le reconnais).
                        </p>
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                    `;
                    showSlides(); // Ajoutez l'appel à showSlides() ici
                    projectDetails.style.display = 'block';
                    break;
                case '2':
                    projectContent = `
                        <h3>Détails du Projet : TP TodoList</h3>
                        <p>
                        Ce projet consitez a réalisé une TodoList a partir de python 

                        </p>
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                    `;
                    showSlides(); // Ajoutez l'appel à showSlides() ici
                    projectDetails.style.display = 'block';
                    break;
                case '3':    
                // Ajoutez les cas pour les autres projets ici
                default:
                    projectContent = '<p>Détails du projet non disponibles pour le moment.</p>';
            }

            // Affiche le contenu spécifique du projet sélectionné
            projectDetails.innerHTML = projectContent;
        });
    });
});
var slideIndex = 0;

function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); //
}