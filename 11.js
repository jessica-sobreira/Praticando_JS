/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

const prompt = require("prompt-sync")();

let primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
let razao = Number(prompt("Digite a razão da PA: "));
let soma = 0;

for (let i = 0; i < 10; i++) {
    console.log(primeiroTermo);
    primeiroTermo += razao;
    soma += primeiroTermo;
}

console.log(`A soma dos 10 primeiros termos da PA é ${soma}`);