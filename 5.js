// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

let jogador1 = prompt("Jogador 1, escolha Pedra, Papel ou Tesoura: ").toLowerCase();
let jogador2 = prompt("Jogador 2, escolha Pedra, Papel ou Tesoura: ").toLowerCase();


if (jogador1 === jogador2) {
    console.log("Empate!");
} else if (
    (jogador1 === "pedra" && jogador2 === "tesoura") ||
    (jogador1 === "tesoura" && jogador2 === "papel") ||
    (jogador1 === "papel" && jogador2 === "pedra")
) {
    console.log("Jogador 1 ganhou!");
} else {
    console.log("Jogador 2 ganhou!");
}