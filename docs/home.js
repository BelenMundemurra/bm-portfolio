const navbarButton = document.querySelector('.navbar-button');
const navbarBackground = document.getElementById('home');
const body = document.body;

const navbarMobile = document.getElementById('navbarNav');
const navClose= document.querySelectorAll('.navClose');

//Animaciones del navbar al abrir-cerrar
navbarButton.addEventListener('click', () => {
  toggleNavbar();
});

//Cerrar navbar mobile al darle click a un link del navbar
navClose.forEach(item => {
  item.addEventListener('click', () => {
    if (navbarMobile.classList.contains('show')) {
      navbarMobile.classList.remove('show');
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
    "nav-about": "My Philosophy",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "home-name": "Hello! I'm Belén Mundemurra.",
    "home-title": "Web Developer & Junior Tester.",
    "home-text": "I invite you to explore my portfolio and learn more about my projects and skills.",
    "about-title": "About My Philosophy",
    "about-title-box": "Curiosity",
    "testing-title-box": "Attention to Detail",
    "collaboration-title-box": "Collaboration",
    "about-text": "Keeping curiosity alive helps me learn, improve, and exercise creativity. Therefore, I always seek to strengthen my knowledge through curiosity.",
    "testing-text": "Attention to the smallest details is what makes the difference between meeting expectations and delivering quality results.",
    "collaboration-text": "The diversity of opinions and experiences helps find creative ideas, efficient solutions, and new learning opportunities.",
    "projects-title": "Some Projects I've Worked On",
    "project1-desc": "I designed and optimized the website layout using Shopify, ensuring that the design aligned with the brand's values.",
    "project2-subtitle": "Testing Project",
    "project2-title": "Veterinaria Guau Guau",
    "project2-desc": "Final project for the Jóvenes a Programar course, where I played the role of tester and developed leadership, communication, and project management skills in a collaborative environment.",
    "project3-subtitle": "Web Portfolio",
    "project3-title": "Belén Mundemurra Portfolio",
    "project3-desc": "This personal portfolio was designed simply using HTML, CSS, and JavaScript, along with the Bootstrap framework. It is also backed up on GitHub and can be viewed through GitHub Pages.",
    "btn-project1": "Visit Website",
    "btn-project2": "View Documentation",
    "btn-project3": "View GitHub",
    "experience-title": "Work Experience",
    "internship-title": "IT Development Process Audit (Internship)",
    "internship-company": "Company: Telefónica (Movistar)",
    "internship-period": "September 2024 - November 2024",
    "internship-desc": "Created the 'Project Development Process' manual for the systems department through information gathering, considering the methodologies used by the company and its needs. Additionally, I designed flowcharts to make key processes more agile and managed tasks using Trello.",
    "skills-title": "Some of the Technologies I Work With",
    "web-dev-title": "Web Development",
    "testing-title": "Testing",
    "management-title": "Management and Collaboration",
    "testing-functional": "Functional and Non-functional Requirement Testing",
    "testing-test-cases": "Test Case Design",
    "testing-black-white": "Black Box and White Box Testing",
    "testing-regression": "Regression Testing",
    "testing-exploratory": "Exploratory Testing",
    "testing-automation": "Test Automation",
    "management-docs": "Technical Documentation",
    "management-diagrams": "Flowchart Creation",
    "management-tools": "Project Management Tools: Trello, Jira",
    "contact-title": "Contact",
    "contact-desc": "I'm ready to contribute my knowledge and skills to new challenges. If you think I can add value to your team, let's get in touch!",
    "view-cv": "View Resume",
    "contact-download": "Download Resume"
  };

  // Texto Español
  const esText = {
    "nav-home": "BM",
    "nav-about": "Mi Filosofía",
    "nav-projects": "Proyectos",
    "nav-experience": "Experiencia",
    "nav-skills": "Habilidades",
    "nav-contact": "Contacto",
    "home-name": "Hola! Soy Belén Mundemurra.",
    "home-title": "Desarrolladora Web & Tester Junior.",
    "home-text": "Te invito a explorar mi portafolio para descubrir más sobre mis proyectos y habilidades.",
    "about-title": "Sobre mi filosofía.",
    "about-title-box": "Curiosidad.",
    "testing-title-box": "Atención al detalle.",
    "collaboration-title-box": "Colaboración.",
    "about-text": "Mantener la curiosidad activa me ayuda a aprender, mejorar y ejercitar la creatividad. Por lo tanto, siempre busco fortalecer mi conocimiento mediante la curiosidad.",
    "testing-text": "La atención en los pequeños detalles es lo que marca la diferencia entre cumplir con un resultado esperado y ofrecer uno con calidad.",
    "collaboration-text": "La diversidad de opiniones y experiencias ayuda a encontrar ideas creativas, soluciones eficientes y nuevos aprendizajes.",
    "projects-title": "Algunos proyectos en los que trabajé.",
    "project1-desc": "Diseñé y optimicé el diseño de la página utilizando la plataforma Shopify, asegurando que el diseño se alineara con los valores de la marca.",
    "project2-subtitle": "Proyecto de Testing",
    "project2-title": "Veterinaria Guau Guau",
    "project2-desc": "Proyecto final del curso Jóvenes a Programar, en el que desempeñé el rol de tester y desarrollé habilidades de liderazgo, comunicación y gestión de proyectos en un entorno colaborativo.",
    "project3-subtitle": "Portafolio Web",
    "project3-title": "Portafolio Belén Mundemurra",
    "project3-desc": "Este portafolio personal fue diseñado de forma sencilla utilizando HTML, CSS y JavaScript, junto con el framework Bootstrap. Además, cuenta con un respaldo en GitHub y puede visualizarse mediante GitHub Pages.",
    "btn-project1" : "Visitar Sitio Web",
    "btn-project2" : "Ver Documentación",
    "btn-project3" : "Ver GitHub",  
    "experience-title": "Experiencia Laboral",
    "internship-title": "Auditoría en Procesos de Desarrollo TI (Pasantía).",
    "internship-company" : "Empresa: Telefónica (Movistar).",
    "internship-period" : "Septiembre 2024 - Noviembre 2024",
    "internship-desc": "Elaboración del manual 'Proceso de Desarrollo de Proyectos' para el área de sistemas mediante relevamiento de información teniendo en cuenta las metologías utilizadas por la empresa y necesidad. Además, diseñé diagramas de flujo para visualizar de manera más ágil los procesos clave y gestioné tareas utilizando la herramienta Trello.",
    "skills-title": "Algunas de las tecnologías que manejo.",
    "web-dev-title": "Desarrollo Web",
    "testing-title": "Testing",
    "management-title": "Gestión y Colaboración",
    "testing-functional": "Pruebas de requerimientos funcionales y no funcionales",
    "testing-test-cases": "Diseño de casos de prueba.",
    "testing-black-white": "Testing de caja negra y caja blanca",
    "testing-regression": "Pruebas de regresión",
    "testing-exploratory": "Testing exploratorio",
    "testing-automation": "Automatización de pruebas",
    "management-docs": "Documentación técnica.",
    "management-diagrams": "Creación de diagramas de flujo.",
    "management-tools": "Herramientas de gestión de proyectos: Trello, Jira.",
    "contact-title":"Contacto",
    "contact-desc": "Estoy lista para aportar mis conocimientos y habilidades a nuevos desafíos. Si crees que puedo sumar valor a tu equipo, ¡Hablemos!",
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


  // Alerta mail copiado
  const emailParagraphs = document.querySelectorAll('.email'); // Nota: NodeList
  const alertBox = document.getElementById('alert');
  
  // Función para copiar texto al portapapeles
  emailParagraphs.forEach(emailParagraph => {
      emailParagraph.addEventListener('click', () => {
          const textToCopy = emailParagraph.textContent;
  
          // Copiar el texto al portapapeles
          navigator.clipboard.writeText(textToCopy).then(() => {
              // Mostrar la alerta personalizada
              alertBox.classList.add('show');
  
              // Ocultar la alerta después de 2 segundos
              setTimeout(() => {
                  alertBox.classList.remove('show');
              }, 2000);
          }).catch(err => {
              console.error('Error al copiar: ', err);
          });
      });
  });
  