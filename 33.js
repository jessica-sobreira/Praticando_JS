/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

const prompt = require("prompt-sync")();

const linhas = 3;
const colunas = 3;
const matriz = [];

console.log("Digite os elementos da matriz 3x3:");
for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = Number(prompt(`Elemento [${i + 1}][${j + 1}]: `));
        matriz[i][j] = valor;
    }
}

let somaDiagonalSecundaria = 0;
for (let i = 0; i < linhas; i++) {
    somaDiagonalSecundaria += matriz[i][colunas - 1 - i];
}

const mediaDiagonalSecundaria = somaDiagonalSecundaria / linhas;

for (let i = 0; i < linhas; i++) {
    matriz[i][i] *= mediaDiagonalSecundaria;
}

console.log("\nMatriz após a multiplicação da diagonal principal:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].map(elemento => elemento.toFixed(2)).join('\t'));
}
