// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require("prompt-sync")();

let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let chute = Number(prompt("Chute um número entre 1 e 5: "));

if (chute === numeroSorteado) {
    console.log("Parabéns, você acertou!");
} else {
    console.log("Que pena, você errou!");
}


console.log(`O número sorteado foi ${numeroSorteado}`);
