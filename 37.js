/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const prompt = require("prompt-sync")();

const tamanhoGabarito = 20;
const numeroAlunos = 50;
const gabarito = [];


console.log(`Digite o gabarito da prova (${tamanhoGabarito} caracteres):`);
for (let i = 0; i < tamanhoGabarito; i++) {
    const resposta = prompt(`Resposta da questão ${i + 1}: `).toUpperCase(); 
    gabarito.push(resposta);
}

for (let i = 0; i < numeroAlunos; i++) {
    const respostasAluno = [];
    let acertos = 0;

    console.log(`\nDigite as respostas do aluno ${i + 1} (${tamanhoGabarito} caracteres):`);
    for (let j = 0; j < tamanhoGabarito; j++) {
        const resposta = prompt(`Resposta da questão ${j + 1}: `).toUpperCase(); 
        respostasAluno.push(resposta);
        if (respostasAluno[j] === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Aluno ${i + 1} - Número de acertos: ${acertos}`);

    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}

console.log("\nProcessamento dos resultados concluído.");