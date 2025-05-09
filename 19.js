/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

const prompt = require("prompt-sync")();

let horarios = [];

for (let i = 0; i < 5; i++) {
    let horario = prompt("Digite um horário no formato HH:MM:SS: ");
    horarios.push(horario);
}

console.log(horarios);