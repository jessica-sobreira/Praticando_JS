/* Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

const prompt = require("prompt-sync")();

const linhas = 30;
const colunas = 30;
const matrizV = [];
const matrizX = [];


console.log(`Digite os elementos da matriz V (${linhas}x${colunas}):`);
for (let i = 0; i < linhas; i++) {
    matrizV[i] = [];
    matrizX[i] = []; 
    for (let j = 0; j < colunas; j++) {
        const valor = Number(prompt(`Elemento V[${i + 1}][${j + 1}]: `));
        matrizV[i][j] = valor;
    }
}

const A = Number(prompt("Digite um número inteiro A para comparar: "));

let contador = 0;
for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        if (matrizV[i][j] === A) {
            contador++;
        } else {
            matrizX[i].push(matrizV[i][j]); 
        }
    }
}

console.log(`\nO número ${A} aparece ${contador} vezes na matriz V.`);

console.log("\nMatriz X (elementos de V diferentes de A):");
if (matrizX.length > 0) {
    for (let i = 0; i < matrizX.length; i++) {
        console.log(matrizX[i].join('\t'));
    }
} else {
    console.log("Todos os elementos da matriz V são iguais a A.");
}