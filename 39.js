/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

const prompt = require("prompt-sync")();

const tamanhoVetorA = 100;
const vetorA = [];
const vetorB = [];

console.log(`Digite os ${tamanhoVetorA} elementos do vetor A:`);
for (let i = 0; i < tamanhoVetorA; i++) {
    const elemento = Number(prompt(`Elemento A[${i + 1}]: `));
    vetorA.push(elemento);
}

for (const elemento of vetorA) {
    if (elemento > 0) {
        vetorB.push(elemento);
    }
}

console.log("\nVetor A (original):", vetorA);
console.log("Vetor B (compactado, contendo apenas valores positivos):", vetorB);