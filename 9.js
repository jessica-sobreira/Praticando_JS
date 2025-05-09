/*Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

const prompt = require("prompt-sync")();

let continuar = true;
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (continuar) {
    let salario = Number(prompt("Qual o salário do funcionário? "));
    let sexo = prompt("Qual o sexo do funcionário? (m/f) ").toLowerCase();

    if (sexo === "m") {
        totalSalarioHomens += salario;
    } else if (sexo === "f") {
        totalSalarioMulheres += salario;
    }

    continuar = prompt("Deseja continuar? (s/n) ").toLowerCase() === "s";
    
}

console.log(`Total pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);

