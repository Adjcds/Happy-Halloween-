// Função para mostrar a seção correspondente
function showSection(sectionId) {
  // Oculta todas as seções
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  // Mostra a seção correspondente
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}

// Adiciona um evento de clique aos itens do menu
document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const sectionId = menuItem.getAttribute('onclick').replace("showSection('", '').replace("')", '');
      showSection(sectionId);
    });
  });

   // Inicialmente, mostre a seção "header-inicio"
   showSection('header-inicio');
  });