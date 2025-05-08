// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")();

let distancia = Number(prompt("Qual a distância que deseja percorrer (em Km)? "));

if (distancia <= 200) {
    let preco = distancia * 0.50;
    console.log(`O preço da passagem será de R$ ${preco.toFixed(2)}`);
} else {
    let preco = distancia * 0.45;
    console.log(`O preço da passagem será de R$ ${preco.toFixed(2)}`);
}