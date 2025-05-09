/* Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

let matrizM = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTodosElementos = 0;

for (let i = 0; i < matrizM.length; i++) {
    for (let j = 0; j < matrizM[i].length; j++) {
        if (i === 3) {
            somaLinha4 += matrizM[i][j];
        }
        if (j === 1) {
            somaColuna2 += matrizM[i][j];
        }
        if (i === j) {
            somaDiagonalPrincipal += matrizM[i][j];
        }
        somaTodosElementos += matrizM[i][j];
    }
}

console.log("Soma da linha 4:", somaLinha4);
console.log("Soma da coluna 2:", somaColuna2);
console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("Soma de todos os elementos:", somaTodosElementos);
console.log("\nMatriz M:");
for (let i = 0; i < matrizM.length; i++) {
    console.log(matrizM[i].join('\t'));
}

