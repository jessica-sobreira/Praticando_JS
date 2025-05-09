/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

let matrizM = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let linhas = matrizM.length;
let colunas = matrizM[0].length;

let SL = new Array(linhas).fill(0);
let SC = new Array(colunas).fill(0);

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        SL[i] += matrizM[i][j];
        SC[j] += matrizM[i][j];
    }
}

console.log("Matriz M:");
for (let i = 0; i < linhas; i++) {
    console.log(matrizM[i].join('\t'));
}

console.log("\nVetor SL:");
console.log(SL);
