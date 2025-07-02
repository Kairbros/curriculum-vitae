document.addEventListener('DOMContentLoaded', () => {

    // --- Traducciones ---
    const translations = {
        es: {
            'resume-title': 'Hoja de Vida - Kevin Daniel Murcia',
            'full-name': 'Kevin Daniel Murcia',
            'job-subtitle': 'Técnico en Sistemas | Desarrollador',
            'location-text': 'Ibagué, Tolima',
            'phone-text': '315 809 6274 | 320 314 8219',
            'email-text': 'kevindanielm2004@gmail.com',
            'github-link-text': 'GitHub',
            'itchio-link-text': 'Itch.io',
            'linkedin-link-text': 'LinkedIn',
            'profile-title': 'Perfil Profesional',
            'profile-text': 'Técnico en Sistemas con formación en Ingeniería en Sistemas y Tecnología en Análisis y Desarrollo de Sistemas de Información. Experiencia práctica en desarrollo web, programación backend y frontend, así como conocimientos en bases de datos y frameworks modernos. Además, experiencia en logística y atención al cliente, reforzando habilidades blandas y liderazgo.',
            'education-title': 'Educación',
            'education-degree-1': 'Ingeniería en Sistemas',
            'in-progress': 'En curso',
            'education-university-1': 'Universidad del Tolima',
            'semester-text': 'semestre',
            'education-date-1': '2025',
            'education-degree-2': 'Tecnología en Análisis y Desarrollo de Sistemas de Información',
            'education-institution-2': 'SENA',
            'education-date-2': '2024',
            'education-degree-3': 'Técnico en Sistemas',
            'education-institution-3': 'SENA',
            'education-date-3': '2021',
            'education-degree-4': 'Bachiller Académico',
            'education-institution-4': 'I.E. Augusto Medina Comfenalco',
            'education-date-4': '2021',
            'experience-title': 'Experiencia Profesional',
            'experience-job-title-1': 'Diseñador y Desarrollador Web',
            'experience-company-1': 'Nikko Sport',
            'experience-date-1': 'Dic 2023 - Nov 2024',
            'experience-description-1-1': 'Diseño gráfico y maquetación web.',
            'experience-description-1-2': 'Mantenimiento de sitios corporativos.',
            'experience-job-title-2': 'Analista de Sistemas',
            'internship-text': 'Práctica',
            'experience-company-2': 'GASCAL',
            'experience-date-2': 'Feb 2023 - Ago 2023',
            'experience-description-2-1': 'Desarrollo en Java y tecnologías web.',
            'experience-description-2-2': 'Análisis de requisitos y pruebas funcionales.',
            'skills-title': 'Habilidades Técnicas',
            'projects-title': 'Proyectos',
            'search-projects-placeholder': 'Buscar proyecto por nombre o descripción en ambos...',
            'github-projects-heading': 'Proyectos de Código (GitHub)',
            'loading-github-projects': 'Cargando proyectos de GitHub...',
            'view-project-link': 'Ver Proyecto', // For dynamically loaded GitHub projects
            'itchio-games-heading': 'Mis Juegos (Itch.io)',
            'bird-happy-game-link': 'Bird Happy by Kevin',
            'ground-apple-game-link': 'Ground Apple Lil Kev by Kevin',
            'languages-title': 'Idiomas',
            'language-spanish': 'Español: Nativo',
            'language-english': 'Inglés: Intermedio (B1)',
            'references-title': 'Referencias',
            'reference-1': 'María Lorena Murcia Álvarez – Docente – 311 464 6986',
            'reference-2': 'Karen Stefany García – Higienista Oral – 310 449 5373',
            'lang-toggle-button-text': 'English' // Text for the button to switch TO English
        },
        en: {
            'resume-title': 'Resume - Kevin Daniel Murcia',
            'full-name': 'Kevin Daniel Murcia',
            'job-subtitle': 'Systems Technician | Developer',
            'location-text': 'Ibagué, Tolima',
            'phone-text': '315 809 6274 | 320 314 8219',
            'email-text': 'kevindanielm2004@gmail.com',
            'github-link-text': 'GitHub',
            'itchio-link-text': 'Itch.io',
            'linkedin-link-text': 'LinkedIn',
            'profile-title': 'Professional Profile',
            'profile-text': 'Systems Technician with a background in Systems Engineering and Information Systems Analysis and Development Technology. Practical experience in web development, backend and frontend programming, as well as knowledge in databases and modern frameworks. In addition, experience in logistics and customer service, strengthening soft skills and leadership.',
            'education-title': 'Education',
            'education-degree-1': 'Systems Engineering',
            'in-progress': 'In progress',
            'education-university-1': 'University of Tolima',
            'semester-text': 'semester',
            'education-date-1': '2025',
            'education-degree-2': 'Technology in Information Systems Analysis and Development',
            'education-institution-2': 'SENA',
            'education-date-2': '2024',
            'education-degree-3': 'Systems Technician',
            'education-institution-3': 'SENA',
            'education-date-3': '2021',
            'education-degree-4': 'Academic High School Diploma',
            'education-institution-4': 'I.E. Augusto Medina Comfenalco',
            'education-date-4': '2021',
            'experience-title': 'Professional Experience',
            'experience-job-title-1': 'Web Designer and Developer',
            'experience-company-1': 'Nikko Sport',
            'experience-date-1': 'Dec 2023 - Nov 2024',
            'experience-description-1-1': 'Graphic design and web layout.',
            'experience-description-1-2': 'Maintenance of corporate websites.',
            'experience-job-title-2': 'Systems Analyst',
            'internship-text': 'Internship',
            'experience-company-2': 'GASCAL',
            'experience-date-2': 'Feb 2023 - Aug 2023',
            'experience-description-2-1': 'Development in Java and web technologies.',
            'experience-description-2-2': 'Requirements analysis and functional testing.',
            'skills-title': 'Technical Skills',
            'projects-title': 'Projects',
            'search-projects-placeholder': 'Search project by name or description in both...',
            'github-projects-heading': 'Code Projects (GitHub)',
            'loading-github-projects': 'Loading GitHub projects...',
            'view-project-link': 'View Project', // For dynamically loaded GitHub projects
            'itchio-games-heading': 'My Games (Itch.io)',
            'bird-happy-game-link': 'Bird Happy by Kevin',
            'ground-apple-game-link': 'Ground Apple Lil Kev by Kevin',
            'languages-title': 'Languages',
            'language-spanish': 'Spanish: Native',
            'language-english': 'English: Intermediate (B1)',
            'references-title': 'References',
            'reference-1': 'María Lorena Murcia Álvarez – Teacher – 311 464 6986',
            'reference-2': 'Karen Stefany García – Oral Hygienist – 310 449 5373',
            'lang-toggle-button-text': 'Español' // Text for the button to switch TO Spanish
        }
    };

    let currentLang = localStorage.getItem('lang') || 'es'; // Default to Spanish if no preference is stored

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.getAttribute('placeholder') !== null) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else if (element.tagName === 'A' && element.hasAttribute('title')) {
                    // For social links, we might want to update the title too, though not strictly textContent
                    // For now, we only update textContent for <a> tags
                    element.textContent = translations[lang][key];
                }
                else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update the button text and flag
        const langToggleButton = document.getElementById('lang-toggle-btn');
        const langTextSpan = document.getElementById('lang-text');
        const flagUS = document.getElementById('lang-flag-us');
        const flagCO = document.getElementById('lang-flag-co');

        if (lang === 'es') {
            langTextSpan.textContent = translations.es['lang-toggle-button-text']; // "English"
            flagCO.style.display = 'inline';
            flagUS.style.display = 'none';
        } else {
            langTextSpan.textContent = translations.en['lang-toggle-button-text']; // "Español"
            flagCO.style.display = 'none';
            flagUS.style.display = 'inline';
        }
        langToggleButton.setAttribute('data-current-lang', lang);
        document.documentElement.lang = lang; // Set HTML lang attribute
        localStorage.setItem('lang', lang); // Save preference
        currentLang = lang; // Update the global currentLang variable
    };

    const detectAndSetInitialLanguage = () => {
        const browserLang = navigator.language.split('-')[0]; // 'es' from 'es-ES' or 'en' from 'en-US'
        let initialLang = 'es'; // Default to Spanish

        if (localStorage.getItem('lang')) {
            // Use stored preference if available
            initialLang = localStorage.getItem('lang');
        } else if (translations[browserLang]) {
            // Use browser language if a translation exists for it
            initialLang = browserLang;
        }
        // If neither, it remains 'es' (our default)
        setLanguage(initialLang);
    };

    // --- GitHub Projects Logic ---
    const githubUser = 'Kairbros'; // Tu usuario de GitHub
    const githubProjectsList = document.getElementById('githubProjectsList');

    if (githubProjectsList) {
        // Clear initial loading message before fetching
        githubProjectsList.innerHTML = `<p class="text-center text-muted" data-key="loading-github-projects">${translations[currentLang]['loading-github-projects']}</p>`;
        
        fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated&per_page=10`)
            .then(response => response.json())
            .then(repos => {
                githubProjectsList.innerHTML = ''; // Clear loading message
                if (repos.length === 0) {
                    githubProjectsList.innerHTML = `<p class="text-center text-muted" data-key="no-github-projects">No hay proyectos de GitHub disponibles.</p>`;
                    // If no projects, ensure translation is applied to this new element
                    setLanguage(currentLang);
                } else {
                    repos.forEach(repo => {
                        const listItem = document.createElement('li');
                        // Use a data-key for the "View Project" link if you want it translated
                        listItem.innerHTML = `
                            <div class="github-project-item card mb-2 p-3">
                                <strong>${repo.name}</strong>
                                <p class="text-muted">${repo.description || 'No description provided.'}</p>
                                <a href="${repo.html_url}" target="_blank" class="project-link">
                                    <i class="bi bi-box-arrow-up-right"></i> <span data-key="view-project-link">${translations[currentLang]['view-project-link']}</span>
                                </a>
                            </div>
                        `;
                        githubProjectsList.appendChild(listItem);
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching GitHub projects:', error);
                githubProjectsList.innerHTML = `<p class="text-danger" data-key="github-load-error">Error al cargar proyectos de GitHub.</p>`;
                // Ensure translation for error message
                setLanguage(currentLang);
            });
    }

    // --- Project Search Logic ---
    const projectSearchInput = document.getElementById('projectSearchInput');
    if (projectSearchInput) {
        projectSearchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const allProjectItems = document.querySelectorAll('.github-project-item, .itch-game-item');

            allProjectItems.forEach(item => {
                const textContent = item.textContent.toLowerCase(); // Search within all text content
                if (textContent.includes(searchTerm)) {
                    item.parentElement.style.display = 'block'; // Show the parent li
                } else {
                    item.parentElement.style.display = 'none'; // Hide the parent li
                }
            });
        });
    }

    // --- Language Switch Button Event Listener ---
    const langToggleButton = document.getElementById('lang-toggle-btn');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // Initialize language on page load
    detectAndSetInitialLanguage();
});