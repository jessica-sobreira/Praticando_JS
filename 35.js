/* Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

const prompt = require("prompt-sync")();

const totalValores = 30;
const tamanhoVetor = 5;
const vetorPares = [];
const vetorImpares = [];

console.log(`Digite ${totalValores} valores inteiros:`);

for (let i = 0; i < totalValores; i++) {
    const valor = Number(prompt(`Digite o valor ${i + 1}: `));

    if (valor % 2 === 0) {
        vetorPares.push(valor);
        if (vetorPares.length === tamanhoVetor) {
            console.log("\nVetor de Pares (cheio):", vetorPares);
            vetorPares.length = 0; 
        }
    } else {
        vetorImpares.push(valor);
        if (vetorImpares.length === tamanhoVetor) {
            console.log("\nVetor de Ímpares (cheio):", vetorImpares);
            vetorImpares.length = 0; 
        }
    }
}


console.log("\nConteúdo final do Vetor de Pares:", vetorPares);
console.log("Conteúdo final do Vetor de Ímpares:", vetorImpares);