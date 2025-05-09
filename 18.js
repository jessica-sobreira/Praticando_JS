/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require("prompt-sync")();

let funcionario = {
    nome: prompt("Qual o nome do funcionário? "),
    cargo: prompt("Qual o cargo do funcionário? "),
    salario: Number(prompt("Qual o salário do funcionário? "))
};

console.log(funcionario);