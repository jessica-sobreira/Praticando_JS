/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require("prompt-sync")();

const tamanhoVetor = 6;
const vetor = [];

console.log(`Digite os ${tamanhoVetor} elementos do vetor:`);
for (let i = 0; i < tamanhoVetor; i++) {
    const elemento = Number(prompt(`Elemento ${i + 1}: `));
    vetor.push(elemento);
}

console.log("\nEscolha a operação a ser realizada:");
console.log("1 - Soma dos elementos");
console.log("2 - Produto dos elementos");
console.log("3 - Média dos elementos");
console.log("4 - Ordene os elementos em ordem crescente");
console.log("5 - Mostre o vetor");

const operacao = Number(prompt("Digite o número da operação desejada: "));

switch (operacao) {
    case 1:
        let soma = 0;
        for (const elemento of vetor) {
            soma += elemento;
        }
        console.log(`\nSoma dos elementos: ${soma}`);
        break;
    case 2:
        let produto = 1;
        for (const elemento of vetor) {
            produto *= elemento;
        }
        console.log(`\nProduto dos elementos: ${produto}`);
        break;
    case 3:
        if (vetor.length > 0) {
            let somaMedia = 0;
            for (const elemento of vetor) {
                somaMedia += elemento;
            }
            const media = somaMedia / vetor.length;
            console.log(`\nMédia dos elementos: ${media.toFixed(2)}`);
        } else {
            console.log("\nO vetor está vazio, não é possível calcular a média.");
        }
        break;
    case 4:
        const vetorOrdenado = [...vetor].sort((a, b) => a - b);
        console.log("\nVetor em ordem crescente:", vetorOrdenado);
        break;
    case 5:
        console.log("\nVetor:", vetor);
        break;
    default:
        console.log("\nOperação inválida!");
}