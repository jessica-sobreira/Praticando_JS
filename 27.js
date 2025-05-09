/* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

const prompt = require("prompt-sync")();

const matrizM = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

const linhas = matrizM.length;
const colunas = matrizM[0].length;

const vetorV = [];

const valorA = Number(prompt("Digite o valor A pelo qual a matriz será multiplicada: "));

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        const valorMultiplicado = matrizM[i][j] * valorA;
        vetorV.push(valorMultiplicado);
    }
}

console.log("\nVetor V (após a multiplicação):");
console.log(vetorV);