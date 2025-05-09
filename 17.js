/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

const prompt = require("prompt-sync")();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome: ");
    let idade = Number(prompt("Digite a idade: "));
    nomes.push(nome);
    idades.push(idade);
}

console.log("---------------------");


for (let i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}`);
        console.log(`Idade: ${idades[i]}`);
    }
}

