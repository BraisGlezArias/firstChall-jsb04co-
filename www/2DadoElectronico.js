'use strict';

function dadoElectronico() {
    let totalScore = 0;
    for (let i = 0; i <= 50; i++) {
        let dado = Math.ceil(Math.random() * 6);
        if (totalScore < 50) {
            totalScore += dado;
            console.log(`Tirada nº ${i + 1}:`, dado);
            console.log('Puntuación total: ', totalScore)
        }
    }
    return 'Final de la partida';
}

const tirarElDado = dadoElectronico();

console.log(tirarElDado);