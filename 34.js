/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

const prompt = require("prompt-sync")();

const linhas = 50;
const colunas = 50;
const matriz = [];

console.log("Digite os elementos da matriz 50x50:");
for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = Number(prompt(`Elemento [${i + 1}][${j + 1}]: `));
        matriz[i][j] = valor;
    }
}

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] *= matriz[i][i];
    }
}

console.log("\nMatriz após as multiplicações:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join('\t'));
}