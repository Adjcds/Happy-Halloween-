// Função para mostrar a seção correspondente
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

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
            e.preventDefault();
            const sectionId = menuItem.getAttribute('onclick').replace("showSection('", '').replace("')", '');
            showSection(sectionId);
        });
    });

    // Inicialmente, mostre a seção "header-inicio"
    showSection('header-inicio');

    // Adiciona um evento de clique ao botão "Não aperte aqui"
    const triggerButton = document.getElementById('triggerGhost');
    const halloweenCanvas = document.getElementById('halloweenCanvas');

    triggerButton.addEventListener('click', function () {
        halloweenCanvas.style.display = 'block'; // Exibe o canvas
        drawGhost(); // Desenha o fantasma
    });

    // Função para verificar o tamanho da tela e exibir a animação automaticamente em dispositivos menores
    function checkScreenSize() {
        if (window.innerWidth < 768 && window.innerHeight < 461) {
            halloweenCanvas.style.display = 'block'; // Exibe o canvas
            drawGhost(); // Desenha o fantasma
        }
    }

    // Verifica o tamanho da tela quando a página carrega
    checkScreenSize();

    // Verifica o tamanho da tela quando a janela é redimensionada
    window.addEventListener('resize', checkScreenSize);
});
