// Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
// podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
// sistema funciona assim:
// - até 10 h de atividade no mês: ganha 2 pontos por hora
// - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
// - acima de 20 h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
// Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require("prompt-sync")();

let horas = Number(prompt("Quantas horas de atividade fiz no mês? "));

if (horas <= 10) {
    let pontos = horas * 2;
    let dinheiro = pontos * 0.05;
    console.log(`Voce teve ${pontos} pontos e conseguiu ganhar R$ ${dinheiro.toFixed(2)}`);
} else if (horas <= 20) {
    let pontos = horas * 5;
    let dinheiro = pontos * 0.05;
    console.log(`Voce teve ${pontos} pontos e conseguiu ganhar R$ ${dinheiro.toFixed(2)}`);
} else {
    let pontos = horas * 10;
    let dinheiro = pontos * 0.05;
    console.log(`Voce teve ${pontos} pontos e conseguiu ganhar R$ ${dinheiro.toFixed(2)}`);
}