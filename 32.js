/* Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

const prompt = require("prompt-sync")();

const linhas = 12;
const colunas = 13;
const matrizM = [];
const matrizModificada = [];

function encontrarMaiorModulo(linha) {
    let maiorModulo = 0;
    for (let i = 0; i < linha.length; i++) {
        const moduloAtual = Math.abs(linha[i]);
        if (moduloAtual > maiorModulo) {
            maiorModulo = moduloAtual;
        }
    }
    return maiorModulo;
}

console.log(`Digite os elementos da matriz M (${linhas}x${colunas}):`);
for (let i = 0; i < linhas; i++) {
    matrizM[i] = [];
    matrizModificada[i] = []; 
    for (let j = 0; j < colunas; j++) {
        const valor = Number(prompt(`Elemento M[${i + 1}][${j + 1}]: `));
        matrizM[i][j] = valor;
    }
}

for (let i = 0; i < linhas; i++) {
    const maiorModuloLinha = encontrarMaiorModulo(matrizM[i]);
    if (maiorModuloLinha !== 0) {
        for (let j = 0; j < colunas; j++) {
            matrizModificada[i][j] = matrizM[i][j] / maiorModuloLinha;
        }
    } else {
        matrizModificada[i] = [...matrizM[i]];
    }
}

console.log("\nMatriz M (lida):");
for (let i = 0; i < linhas; i++) {
    console.log(matrizM[i].join('\t'));
}

console.log("\nMatriz Modificada (dividida pelo maior módulo de cada linha):");
for (let i = 0; i < linhas; i++) {
    console.log(matrizModificada[i].map(elemento => elemento.toFixed(2)).join('\t')); 
}