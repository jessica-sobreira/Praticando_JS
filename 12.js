/*Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

let primeiroTermo = 1;
let segundoTermo = 1;

console.log(primeiroTermo);
console.log(segundoTermo);

for (let i = 2; i < 10; i++) {
    let proximoTermo = primeiroTermo + segundoTermo;
    console.log(proximoTermo);
    primeiroTermo = segundoTermo;
    segundoTermo = proximoTermo;
}