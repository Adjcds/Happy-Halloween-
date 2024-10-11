// Função para mostrar a seção correspondente
function showSection(sectionId) {
  // Oculta todas as seções
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });


  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = menuItem.getAttribute('onclick').replace("showSection('", '').replace("')", '');
      showSection(sectionId);
    });
  });

 
   showSection('header-inicio');
  });