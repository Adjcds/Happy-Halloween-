document.addEventListener('DOMContentLoaded', function() {
    const ghost = document.querySelector('.ghost');

    function fadeOutGhost() {
        // Adiciona a classe que faz o fantasma sumir
        ghost.classList.add('fade-out');
        
        // Após o tempo de animação, remove a classe de desaparecimento
        setTimeout(function() {
            ghost.classList.add('hidden');
        }, 2000); // 2 segundos para o fantasma sumir

        // Faz o fantasma reaparecer após 10 segundos (8 segundos escondido + 2 segundos para sumir)
        setTimeout(function() {
            ghost.classList.remove('hidden', 'fade-out');
        }, 10000); // 10 segundos total até reaparecer
    }

    // Função para fazer o fantasma piscar após clicar no botão
    const button = document.querySelector('button');
    button.addEventListener('click', fadeOutGhost);
});
