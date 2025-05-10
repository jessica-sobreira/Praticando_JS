/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

const prompt = require("prompt-sync")();

const tamanhoGabarito = 13;
const numeroApostadores = 100;
const gabarito = [];

console.log(`Digite o gabarito da loteria esportiva (${tamanhoGabarito} elementos):`);
for (let i = 0; i < tamanhoGabarito; i++) {
    const resposta = Number(prompt(`Resposta da posição ${i + 1}: `));
    gabarito.push(resposta);
}

for (let i = 0; i < numeroApostadores; i++) {
    const numeroCartao = Number(prompt(`\nDigite o número do cartão do apostador ${i + 1}: `));
    const respostasApostador = [];
    let acertos = 0;

    console.log(`Digite as respostas do apostador ${numeroCartao} (${tamanhoGabarito} elementos):`);
    for (let j = 0; j < tamanhoGabarito; j++) {
        const resposta = Number(prompt(`Resposta da posição ${j + 1}: `));
        respostasApostador.push(resposta);
        if (respostasApostador[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Apostador número: ${numeroCartao}`);
    console.log(`Número de acertos: ${acertos}`);

    if (acertos === tamanhoGabarito) {
        console.log("Parabéns, tu foi o GANHADOR!");
    }
}

console.log("\nProcessamento das apostas concluído.");

