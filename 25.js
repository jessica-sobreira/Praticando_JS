/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

const linhas = 15;
const colunas = 20;
const matriz = [];


for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat((Math.random() * 100).toFixed(2)); 
    }
}

const somaColunas = new Array(colunas).fill(0);

for (let j = 0; j < colunas; j++) {
    for (let i = 0; i < linhas; i++) {
        somaColunas[j] += matriz[i][j];
    }
}


console.log("Matriz:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join('\t')); 
}

console.log("\nSoma de cada coluna:");
for (let j = 0; j < colunas; j++) {
    console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}
