const ghost = document.querySelector('.ghost');

// Função para mover o fantasma aleatoriamente
function moveGhost() {
    // Define um movimento aleatório
    const x = Math.random() * (window.innerWidth - 50); // Largura do fantasma
    const y = Math.random() * (window.innerHeight - 70); // Altura do fantasma

    // Aplica a nova posição
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
}

// Move o fantasma a cada 2 segundos
setInterval(moveGhost, 2000);

// Mova o fantasma pela primeira vez imediatamente
moveGhost();
