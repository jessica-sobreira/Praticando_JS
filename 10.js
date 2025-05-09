/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();

let continuar = true;
let somatorio = 0;
let quantidadePares = 0;
let menorValor = 0;
let quantidadeTotal = 0;

while (continuar) {
    let numero = Number(prompt("Digite um número: "));
    somatorio += numero;
    quantidadeTotal++;
    
    if (numero % 2 === 0) {
        quantidadePares++;
    }

    if (menorValor === 0 || numero < menorValor) {
        menorValor = numero;
    }

    continuar = prompt("Deseja continuar? (s/n) ").toLowerCase() === "s";
}

let media = 0;
if (quantidadeTotal > 0) {
    media = somatorio / quantidadeTotal;
}

console.log("------------------");

console.log(`O somatório entre todos os números digitados é de ${somatorio}`);
console.log(`Quantidade de números pares digitados: ${quantidadePares}`);
console.log(`O menor número digitado foi ${menorValor}`);
console.log(`A média entre todos os números digitados é de ${media.toFixed(2)}`);
