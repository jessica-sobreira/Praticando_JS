/* Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. */

const matrizA = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

const matrizB = [
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

const matrizP = [];
const linhas = matrizA.length;
const colunas = matrizA[0].length;

for (let i = 0; i < linhas; i++) {
    matrizP[i] = [];
    for (let j = 0; j < colunas; j++) {
        matrizP[i][j] = matrizA[i][j] * matrizB[i][j];
    }
}

console.log(matrizP);