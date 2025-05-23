/* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */

const prompt = require("prompt-sync")();

let funcionarios = [];

for (let i = 0; i < 80; i++) {
    let matricula = prompt("Digite a matricula: ");
    let nome = prompt("Digite o nome: ");
    let salarioBruto = Number(prompt("Digite o salário bruto: "));

    let inss = salarioBruto * 0.12;
    let salarioLiquido = salarioBruto - inss;

    let funcionario = {
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto,
        inss: inss,
        salarioLiquido: salarioLiquido
    };

    funcionarios.push(funcionario);
}