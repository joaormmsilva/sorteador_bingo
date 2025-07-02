let btn_sortear = document.getElementById('btn');
let btn_resetar = document.getElementById('btn_reset');
let numero_sorteado = document.getElementById('numero_sorteado');
let frase = document.getElementById('jargao');
let b = document.getElementById('b');
let i = document.getElementById('i');
let n = document.getElementById('n');
let g = document.getElementById('g');
let o = document.getElementById('o');
let sorteador = [];

function sortear() {
    let numero;

    // Evita números repetidos
    do {
        numero = Math.floor(Math.random() * 75) + 1;
    } while (sorteador.includes(numero));

    sorteador.push(numero); // Salva no histórico

    let letra = '';
    if (numero >= 1 && numero <= 15) letra = 'B';
    else if (numero >= 16 && numero <= 30) letra = 'I';
    else if (numero >= 31 && numero <= 45) letra = 'N';
    else if (numero >= 46 && numero <= 60) letra = 'G';
    else letra = 'O';

    // Atualiza o campo de letras com os sorteados
    switch (letra) {
        case 'B': 
        b.innerHTML += numero + '; ';
        break;

        case 'I':
        i.innerHTML += numero + '; '; 
        break;

        case 'N': 
        n.innerHTML += numero + '; '; 
        break;

        case 'G': 
        g.innerHTML += numero + '; '; 
        break;

        case 'O': 
        o.innerHTML += numero + '; '; 
        break;
    }

    // Frases divertidas (jargões)
    let jargao = '';
    switch (numero) {
        case 1: jargao = '---Começou o Jogo---'; break;
        case 6: jargao = '---Meia dúzia---'; break;
        case 7: jargao = '---O número da sorte---'; break;
        case 8: jargao = '---O infinito---'; break;
        case 9: jargao = '---O coqueiro---'; break;
        case 10: jargao = '---Craque de Bola---'; break;
        case 11: jargao = '---As pernas da moça---'; break;
        case 22: jargao = '---Dois patinhos na lagoa---'; break;
        case 33: jargao = '---A idade de Cristo---'; break;
        case 45: jargao = '---Fim do Primeiro Tempo---'; break;
        case 51: jargao = '---Uma Boa Ideia---'; break;
        case 66: jargao = '---Um Tapa Atrás da Orelha---'; break;
        case 69: jargao = '---O número do amor---'; break;
        case 75: jargao = '---Terminou o Jogo---'; break;
        default: jargao = '----------------------------'; break;
    }

    numero_sorteado.innerHTML = `${letra} - ${numero}`;
    frase.innerHTML = jargao;
}

function reiniciar() {
    numero_sorteado.innerHTML = 'Jogo reiniciado';
    frase.innerHTML = '';
    sorteador = [];

    b.innerHTML = 'b = ';
    i.innerHTML = 'i = ';
    n.innerHTML = 'n = ';
    g.innerHTML = 'g = ';
    o.innerHTML = 'o = ';
}
