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

    let slideIndex = 0;
    let slideIndex2 = 0;
    let slideIndex3 = 0;

    // Fonction pour afficher les diapositives du projet Réalisation d'un site web
    function showSlides() {
        let slides = document.querySelectorAll('.slideshow-container .mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 4000); // Changez 4000 pour la durée de chaque image en millisecondes
    }

    // Fonction pour afficher les diapositives du projet Portfolio
    function showSlides2() {
        let slides = document.querySelectorAll('.slideshow-container2 .mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex2++;
        if (slideIndex2 > slides.length) { slideIndex2 = 1; }
        slides[slideIndex2 - 1].style.display = 'block';
        setTimeout(showSlides2, 4000); // Changez 4000 pour la durée de chaque image en millisecondes
    }

    function showSlides3() {
        let slides = document.querySelectorAll('.slideshow-container3 .mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex3++;
        if (slideIndex3 > slides.length) { slideIndex3 = 1; }
        slides[slideIndex3 - 1].style.display ='block';
        setTimeout(showSlides3, 4000);
    }

    function resetSlides(){
        slideIndex = 0;
        slideIndex2 = 0;
        slideIndex3 = 0;
    }

    function afficherProjet(id) {
        const Projet = document.querySelector(`#projects ul li[data-project-id="${id}"]`);    
    }

    projectDetails.style.display = 'none';

    projectList.forEach(function(project) {
        project.addEventListener('click', function() {
            const projectId = project.getAttribute('data-project-id');
            afficherProjet(projectId);
            resetSlides();
            // Détermine le contenu spécifique du projet sélectionné
            let projectContent = '';
            switch (projectId) {
                case '1':
                    projectContent = `
                        <div class="project-content">
                            <h3 style="text-align: center;">Détails du Projet : Réalisation d'un site web</h3>
                            <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                            Ceci est le premier site et projet réalisé au cours de mes 2 années en BTS. Ce site est un site vitrine qui décrit le jeu Overwatch. On y retrouve la description de toutes les cartes, de tous les personnages (Heal, DPS ou Tank), et bien sûr tous les modes de jeux possibles, avec une vidéo de visite de chaque carte et un gameplay de chaque personnage. PS : (Les images de fond n'ont rien à voir avec le thème, je le reconnais).
                            </p>
                            <div class="slideshow-container">
                                <div class="mySlides fade">
                                    <img src="images/P1.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade">
                                    <img src="images/P1.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade">
                                    <img src="images/P1.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade">
                                    <img src="images/P1.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade">
                                    <img src="images/P1.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade">
                                    <img src="images/P1.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                            </div>
                            <div class="slideshow-container2" style="display: none;">
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                                </div>
                            </div>
                            <div class="slideshow-container3" style="display: none;">
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                                <div class="mySlides fade" style="display: none;">
                                    <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                            </div>
                        </div>
                    `;
                    showSlides();
                    projectDetails.style.display = 'block';
                    break;
                case '2':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : TP TodoList</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Ce projet consitez a réalisé une TodoList a partir de python: La TodoList, ou liste de tâches, est un outil simple et pratique pour organiser vos activités quotidiennes. En notant vos tâches à accomplir, vous pouvez garder une vue d'ensemble sur vos obligations et rester concentré sur vos priorités.
                        </p>
                        <a href="https://github.com/II-GeekV3/TodoList">
                            <img class="github-logo" src="images/LogoGithub.png" alt="Voir plus" />
                        </a>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;

                    break;
                case '3':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Site web réalisé en groupe</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Site web speed run rétro est un projet réalisé en équipe de trois (2 développeurs, 1 expert réseau), nous avons créé un site web de speed run sur le thème rétro. Utilisant HTML, CSS et PHP, nous avons conçu une plateforme présentant les jeux populaires, les classements des meilleurs temps et des guides pour les passionnés. Le site offre une esthétique rétro immersive, capturant l'essence des jeux classiques.
                        </p>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3">
                            <div class="mySlides fade">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    showSlides3();
                    projectDetails.style.display = 'block';
                    break;
                case '4':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Projet Wordpress</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Ce projet est un travail réalisé en groupe, où chacun a contribué avec plusieurs pages créées individuellement, comprenant des liens internes obligatoires, ainsi que la mise en service d'un site sous WordPress.                        </p>
                        <section id="cv">
                             <embed src="DOCUMENTATION WORDPRESS.pdf" type="application/pdf" />
                        </section>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    projectDetails.style.display = 'block';
                    break;
                case '5':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Projet Zabbix</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Notre projet Zabbix vise à garantir la stabilité et la performance des réseaux informatiques. En utilisant la puissance de Zabbix, une solution de surveillance open-source, nous avons mis en place un système robuste de supervision en temps réel. Grâce à des fonctionnalités avancées telles que la collecte de données, l'analyse des performances et les alertes personnalisables, notre projet offre une visibilité complète sur l'état de santé du réseau. En collaborant avec des équipes de gestion IT, nous avons mis en œuvre des solutions proactives pour résoudre les problèmes de manière efficace, minimisant ainsi les temps d'arrêt et optimisant les performances du réseau.
                        </p>
                        <section id="cv">
                             <embed src="" type="application/pdf" />
                        </section>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2"style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    projectDetails.style.display = 'block';
                    break;
                case '6':
                     projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Projet Sirotez&Melangez Administrateur</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Ce projet est l'un des deux projets que j'ai choisis de présenter lors de mon épreuve E5 pour mon BTS. Je vous prie de consulter le projet directement sur ce lien <a href="E5.html">ici</a>.</p>
                        </p>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2"style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>                       
                    `;
                    projectDetails.style.display = 'block';
                    break;
                case '7':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Projet Sirotez&Melangez</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Ce projet est l'un des deux projets que j'ai choisis de présenter lors de mon épreuve E5 pour mon BTS. Je vous prie de consulter le projet directement sur ce lien <a href="E5.html">ici</a>.</p> 
                        </p>

                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">Ce projet est aussi disponible avec une base de données mysql (hébergement nécessaire en local)</p>
                        <a href="https://github.com/II-GeekV3/Sirotez-Melangez">
                            <img class="github-logo" src="images/LogoGithub.png" alt="Voir plus" />
                        </a>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2"style="display: none;">
                            <div class="mySlides fade">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    projectDetails.style.display = 'block';
                    break;  
                case '8':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Portfolio</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        Le projet Portfolio est bien plus qu'un simple site web ; c'est votre carte de visite numérique, votre vitrine professionnelle en ligne. Conçu avec soin et attention aux détails, ce portfolio met en valeur vos compétences, vos réalisations et votre parcours professionnel de manière attrayante et professionnelle. Avec une conception responsive et une navigation intuitive, ce site offre une expérience utilisateur fluide sur tous les appareils. Que vous soyez un développeur, un designer, un écrivain ou tout autre professionnel créatif, ce portfolio est l'outil idéal pour présenter votre travail au monde entier.     
                        </p>
                        <div class="slideshow-container2">
                            <div class="mySlides fade">
                                <img src="images/P8.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade">
                                <img src="images/P8.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    projectDetails.style.display = 'block';
                    showSlides2();
                    break;
                case '9':
                    projectContent = `
                        <h3 style="text-align: center;">Détails du Projet : Projet GLPI</h3>
                        <p style="text-align: justify; margin: 0 auto; max-width: 800px;">
                        GLPI est une solution logicielle robuste dédiée à la gestion efficace des ressources informatiques au sein des organisations. De la gestion des actifs matériels et logiciels à la prise en charge des tickets d'assistance, GLPI offre une plateforme centralisée pour optimiser les opérations informatiques. Ce projet explore en détail les fonctionnalités clés de GLPI, son déploiement et ses avantages, offrant ainsi un aperçu précieux pour les professionnels cherchant à améliorer leur gestion informatique.
                        </p>
                        <section id="cv">
                             <embed src="TP_GLPI.pdf" type="application/pdf" />
                        </section>
                        <div class="slideshow-container" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P1.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container2"style="display: none;">
                            <div class="mySlides fade">
                                <img src="images/P8.0.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.2.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.3.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.4.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.5.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                            <div class="mySlides fade"style="display: none;">
                                <img src="images/P8.6.png" style="width:100%; height:300px; object-fit: cover;">
                            </div>
                        </div>
                        <div class="slideshow-container3" style="display: none;">
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.0.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.1.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.2.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.3.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.4.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.5.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                            <div class="mySlides fade" style="display: none;">
                                <img src="images/P3.6.png" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;">
                            </div>
                        </div>
                    `;
                    projectDetails.style.display = 'block';
                    break;
                // Ajoutez les cas pour les autres projets ici
                default:
                    projectContent = '<p>Détails du projet non disponibles pour le moment.</p>';
            
            }
            // Affiche le contenu spécifique du projet sélectionné
            projectDetails.innerHTML = projectContent;
            projectDetails.style.display = 'block';
        });
    });
});
