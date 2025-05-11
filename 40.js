/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

const prompt = require("prompt-sync")();

const tamanhoVetor = 5;
const numeroApostadores = 50;
const resultadoOficial = [];

console.log(`Digite o resultado oficial da Loto (${tamanhoVetor} números inteiros):`);
for (let i = 0; i < tamanhoVetor; i++) {
    const numero = Number(prompt(`Número ${i + 1}: `));
    resultadoOficial.push(numero);
}

for (let i = 0; i < numeroApostadores; i++) {
    const aposta = [];
    let acertos = 0;

    console.log(`\nDigite a aposta do apostador ${i + 1} (${tamanhoVetor} números inteiros):`);
    for (let j = 0; j < tamanhoVetor; j++) {
        const numero = Number(prompt(`Número ${j + 1}: `));
        aposta.push(numero);
        if (aposta[j] === resultadoOficial[j]) {
            acertos++;
        }
    }

    if (acertos === tamanhoVetor) {
        console.log(`\nParabéns, apostador ${i + 1}! Você é o GANHADOR (quina)!`);
    } else {
        console.log(`\nApostador ${i + 1} - Número de acertos: ${acertos}`);
    }
}

console.log("\nProcessamento das apostas concluído.");