const canvas = document.getElementById('halloweenCanvas');
const ctx = canvas.getContext('2d');

function drawFatGhost() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    // Corpo do fantasma
    ctx.beginPath();
    ctx.moveTo(150, 300); // Ponto de início
    ctx.quadraticCurveTo(170, 150, 230, 150); //    
    ctx.quadraticCurveTo(300, 150, 250, 320); // Curva superior direita
    ctx.quadraticCurveTo(250, 350, 220, 330); // Curva inferior direita
    ctx.quadraticCurveTo(200, 370, 180, 330); // Curva inferior esquerda
    ctx.quadraticCurveTo(150, 350, 150, 300); // Fecha o caminho
    ctx.closePath(); // Fecha o caminho do corpo

    ctx.fillStyle = '#FFF'; // Cor de preenchimento
    ctx.fill(); // Preenche o corpo do fantasma

 // Olhos
 ctx.beginPath();
 ctx.arc(200, 200, 10, 0, 2 * Math.PI); // Olho esquerdo
 ctx.arc(230, 200, 10, 0, 2 * Math.PI); // Olho direito
 ctx.fillStyle = '#000';
 ctx.fill();

 // Boca
 ctx.beginPath();
 ctx.arc(216, 220, 4, 0, Math.PI, false); // Boca redonda
 ctx.strokeStyle = '#000';
 ctx.lineWidth = 8;
 ctx.stroke();
}

drawFatGhost();
