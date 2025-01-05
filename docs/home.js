const navbarButton = document.querySelector('.navbar-button');
const navbarBackground = document.getElementById('home');
const body = document.body;

const navbarCelular = document.getElementById('navbarNav');
const navClose= document.querySelectorAll('.close-mobile');


//Animaciones del navbar al abrir-cerrar
navbarButton.addEventListener('click', () => {
  toggleNavbar();
});

//Cerrar navbar mobile al darle click a un link del navbar
navClose.forEach(item => {
  item.addEventListener('click', () => {
    if (navbarCelular.classList.contains('show')) {
      navbarCelular.classList.remove('show');
      toggleNavbar();
    }
  });
});

//Diseños del navbar al toggle
function toggleNavbar() {
  navbarButton.classList.toggle('active');
  navbarBackground.classList.toggle('blur');
  body.classList.toggle('overflow');
}

// Bootstrap Modal
document.getElementById('view-cv').addEventListener('click', function() {
    var cvModal = new bootstrap.Modal(document.getElementById('cv-modal'));
    cvModal.show();
  });

  // Texto Inglés
  const enText = {
    "nav-home": "BM",
    "nav-about": "Philosophy",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "language-btn": "ES",
    "home-name": "Belén Mundemurra",
    "home-title": "Web Developer and Junior Tester",
    "home-text": "Explore my portfolio to learn more about my work and experience.",
    "about-title": "My Philosophy",
    "about-text": "I believe web development is a powerful tool to improve digital interaction. I aim to build quality solutions that create intuitive user experiences.",
    "testing-text": "In the world of testing, my goal is to ensure systems work as they should, free from bugs. I love discovering issues and contributing to the product's improvement.",
    "collaboration-text": "I work closely with teams to ensure projects not only get completed but are optimized to reach their full potential.",
    "projects-title": "Projects",
    "project1-title": "E-commerce Website",
    "project1-desc": "I developed an online store using Shopify and WooCommerce for an eco-friendly product company, improving their online shopping experience.",
    "project2-title": "Task Management App",
    "project2-desc": "I built a task management app using React and Firebase to allow users to manage their tasks efficiently.",
    "experience-title": "Work Experience",
    "internship-title": "Internship: IT Development Process Audit",
    "internship-company": "Company: Telefónica (Movistar)",
    "internship-period" : "Period: September 2024 - November 2024",
    "internship-desc": "In this internship, I worked closely with IT departments to conduct a comprehensive survey of information related to project development processes. I was responsible for creating and writing technical documentation, integrating the methodologies used by the company. I also designed flowcharts to optimize key steps in projects and managed tasks using Trello, improving collaboration and team organization.",
    "skills-title": "Skills",
    "web-dev-title": "Web Development",
    "testing-title": "Testing",
    "management-title": "Management and Collaboration",
    "contact-title":"Contact",
    "contact-mail" : "munde.belen@gmail.com",
    "view-cv" : "View Resume",
    "contact-download" : "Download Resume"
  };

  // Texto Español
  const esText = {
    "nav-home": "BM",
    "nav-about": "Filosofía",
    "nav-projects": "Proyectos",
    "nav-experience": "Experiencia",
    "nav-skills": "Habilidades",
    "nav-contact": "Contacto",
    "language-btn": "EN",
    "home-name": "Belén Mundemurra",
    "home-title": "Desarrolladora Web y Tester Junior",
    "home-text": "Explora mi portafolio para conocer más sobre mi trabajo y experiencia.",
    "about-title": "Mi Filosofía",
    "about-text": "Mantener la curiosidad activa ayuda a aprender, mejorar y ejercitar la creatividad. Por lo tanto, siempre busco fortalecer mi conocimiento mediante la curiosidad.",
    "testing-text": "La atención a los pequeños detalles es lo que marca una gran diferencia entre ofrecer un resultado esperado y un resultado de calidad.",
    "collaboration-text": "La diversidad de opiniones y experiencias ayuda a encontrar ideas creativas, soluciones eficientes y nuevos aprendizajes.",
    "projects-title": "Proyectos",
    "project1-title": "Sitio Web de E-commerce",
    "project1-desc": "Desarrollé una tienda online utilizando Shopify y WooCommerce para una empresa de productos ecológicos, mejorando su experiencia de compra en línea.",
    "project2-title": "Aplicación de Gestión de Tareas",
    "project2-desc": "Construí una aplicación de tareas utilizando React y Firebase para permitir a los usuarios gestionar sus actividades de manera eficiente.",
    "experience-title": "Experiencia Laboral",
    "internship-title": "Pasantía: Auditoría en Procesos de Desarrollo TI",
    "internship-desc": "En esta pasantía, trabajé estrechamente con las áreas de TI para realizar un relevamiento exhaustivo de la información relacionada con el proceso de desarrollo de proyectos. Fui responsable de crear y redactar documentación técnica, integrando las metodologías utilizadas por la empresa. Además, diseñé diagramas de flujo para optimizar los pasos clave en los proyectos y gestioné tareas utilizando la herramienta Trello, mejorando la colaboración y la organización del equipo.",
    "skills-title": "Habilidades",
    "web-dev-title": "Desarrollo Web",
    "testing-title": "Testing",
    "management-title": "Gestión y Colaboración",
    "contact-title":"Contacto",
    "contact-mail" : "Correo Electrónico: munde.belen@gmail.com",
    "view-cv" : "Ver currículum",
    "contact-download" : "Descargar Currículum"
  };

  // Botón cambio idiomas
  document.getElementById("language-btn").addEventListener("click", function () {
    const currentLanguage = document.getElementById("language-btn").innerText;
    const newLanguage = currentLanguage === "English" ? enText : esText;

  // Cambiar texto de los elementos
    for (const [key, value] of Object.entries(newLanguage)) {
      document.getElementById(key).innerText = value;
    }

  // Cambiar texto del botón
    document.getElementById("language-btn").innerText = currentLanguage === "English" ? "Español" : "English";

  // Cambiar la imagen y el PDF
    const imgElement = document.getElementById("language-image");
    const pdfElement = document.getElementById("contact-download");

    imgElement.src = currentLanguage === "English" ? "img/cv-ingles.png" : "img/cv-espanol.png";
    pdfElement.href = currentLanguage === "English" ? "files/cv-ingles.pdf" : "files/cv-espanol.pdf";
  });



  // Botón de "subir" cuando se haga scroll hacia abajo
  window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("scroll-top").style.display = "block";
    } else {
      document.getElementById("scroll-top").style.display = "none";
    }
  };

