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

    //Enregistrer une référence aux éléments de diaporama pour les projets Portfolio et Réalisation d'un site web
    const portfolioSlides = document.querySelectorAll('.slideshow-container2 .mySlides');
    const siteWebSlides = document.querySelectorAll('.slideshow-container .mySlides');

    // Fonction pour réinitialiser le diaporama du projet Portfolio
    function resetPortfolioSlides() {
        slideIndex2 = 0;
        showSlides2();
    }

    // Fonction pour réinitialiser le diaporama du projet Réalisation d'un site web
    function resetSiteWebSlides() {
        slideIndex = 0;
        showSlides();
    }

    projectDetails.style.display = 'none';

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
                    showSlides();
                    projectDetails.style.display = 'block';
                    break;
                case '2':
                    projectContent = `
                        <h3>Détails du Projet : TP TodoList</h3>
                        <p>
                        Ce projet consitez a réalisé une TodoList a partir de python: La TodoList, ou liste de tâches, est un outil simple et pratique pour organiser vos activités quotidiennes. En notant vos tâches à accomplir, vous pouvez garder une vue d'ensemble sur vos obligations et rester concentré sur vos priorités.
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
                    projectDetails.style.display = 'block';
                    break;
                case '3':
                    projectContent = `
                        <h3>Détails du Projet : Site web réalisé en groupe</h3>
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
                    projectDetails.style.display = 'block';
                    break;
                case '4':
                    projectContent = `
                        <h3>Détails du Projet : Projet Wordpress</h3>
                        <p>
                        Ce projet est un travail réalisé en groupe, où chacun a contribué avec plusieurs pages créées individuellement, comprenant des liens internes obligatoires, ainsi que la mise en service d'un site sous WordPress.                        </p>
                        <section id="cv">
                             <embed src="DOCUMENTATION WORDPRESS.pdf" type="application/pdf" />
                        </section>
                    `;
                    projectDetails.style.display = 'block';
                    break;
                case '5':
                    projectContent = `
                        <h3>Détails du Projet : Projet Zabbix</h3>
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
                    projectDetails.style.display = 'block';
                    break;
                case '6':
                     projectContent = `
                        <h3>Détails du Projet : Projet Sirotez&Melangez Administrateur</h3>
                        <p>
                        Ce projet est l'un des deux projets que j'ai choisis de présenter lors de mon épreuve E5 pour mon BTS. Je vous prie de consulter le projet directement sur ce lien <a href="E5.html">ici</a>.</p>
                        </p>                       
                    `;
                    projectDetails.style.display = 'block';
                    break;
                case '7':
                    projectContent = `
                        <h3>Détails du Projet : Projet Sirotez&Melangez</h3>
                        <p>
                        Ce projet est l'un des deux projets que j'ai choisis de présenter lors de mon épreuve E5 pour mon BTS. Je vous prie de consulter le projet directement sur ce lien <a href="E5.html">ici</a>.</p> 
                        </p>
                    `;
                    projectDetails.style.display = 'block';
                    break;  
                case '8':
                    projectContent = `
                        <h3>Détails du Projet : Portfolio</h3>
                        <p>
                        Ce projet consitez a réalisé une TodoList a partir de python             
                        </p>
                        <div class="slideshow-container2">
                            <div class="mySlides fade">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                    `;
                    showSlides2();
                    projectDetails.style.display = 'block';
                    break;
                case '9':
                    projectContent = `
                        <h3>Détails du Projet : Projet GLPI</h3>
                        <p>
                        GLPI est une solution logicielle robuste dédiée à la gestion efficace des ressources informatiques au sein des organisations. De la gestion des actifs matériels et logiciels à la prise en charge des tickets d'assistance, GLPI offre une plateforme centralisée pour optimiser les opérations informatiques. Ce projet explore en détail les fonctionnalités clés de GLPI, son déploiement et ses avantages, offrant ainsi un aperçu précieux pour les professionnels cherchant à améliorer leur gestion informatique.
                        </p>
                        <section id="cv">
                             <embed src="TP_GLPI.pdf" type="application/pdf" />
                        </section>
                    `;
                    projectDetails.style.display = 'block';
                    break;
                // Ajoutez les cas pour les autres projets ici
                default:
                    projectContent = '<p>Détails du projet non disponibles pour le moment.</p>';

            if (projectId === '8') {
                resetPortfolioSlides();
            } else if (projectId === '1') {
                resetSiteWebSlides();
            }
            
            }

            // Affiche le contenu spécifique du projet sélectionné
            projectDetails.innerHTML = projectContent;
            projectDetails.style.display = 'block';
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
var slideIndex2 = 0;

function showSlides2() {
    // Fonction pour le diaporama du projet Portfolio
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