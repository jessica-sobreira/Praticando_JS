// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require("prompt-sync")();

let carro = prompt("Qual o carro alugado (popular ou luxo)? ").toLowerCase();
let dias = Number(prompt("Quantos dias de aluguel? "));
let km = Number(prompt("Quantos Km foram percorridos? "));

if (carro === "popular") {
    if (km <= 100) {
        let preco = dias * 90 + km * 0.20;
        console.log(`O preço a ser pago é de R$ ${preco.toFixed(2)}`);
    } else {
        let preco = dias * 90 + km * 0.10;
        console.log(`O preço a ser pago é de R$ ${preco.toFixed(2)}`);
    }
} else if (carro === "luxo") {
    if (km <= 200) {
        let preco = dias * 150 + km * 0.30;
        console.log(`O preço a ser pago é de R$ ${preco.toFixed(2)}`);
    } else {
        let preco = dias * 150 + km * 0.25;
        console.log(`O preço a ser pago é de R$ ${preco.toFixed(2)}`);
    }
}