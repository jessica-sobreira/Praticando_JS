/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a 
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

const prompt = require("prompt-sync")();

function analisarDados() {
    let salarios = [];
    let filhos = [];
    let continuar = true;

    while (continuar) {
        const salario = Number(prompt("Informe o salário da pessoa: "));
        const numFilhos = Number(prompt("Informe o número de filhos dessa pessoa: "));

        salarios.push(salario);
        filhos.push(numFilhos);

        const resposta = prompt("Deseja cadastrar mais uma pessoa? (s/n) ").toLowerCase();
        continuar = resposta === "s";
    }

    if (salarios.length === 0) {
        console.log("Nenhum dado foi inserido.");
        return;
    }

    const mediaSalarioPop = calcularMedia(salarios);
    const mediaFilhosPop = calcularMedia(filhos);
    const maiorSalarioPop = encontrarMaiorSalario(salarios);
    const percentualSalarioBaixo = calcularPercentualSalarioBaixo(salarios);

    console.log("\--- Resultados da Pesquisa ---");
    console.log(`Média de salário da população: R$ ${mediaSalarioPop.toFixed(2)}`);
    console.log(`Média do número de filhos por habitante: ${mediaFilhosPop.toFixed(2)}`);
    console.log(`Maior salário encontrado: R$ ${maiorSalarioPop.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualSalarioBaixo.toFixed(2)}%`);
}

function calcularMedia(lista) {
    if (lista.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total / lista.length;
}

function encontrarMaiorSalario(lista) {
    if (lista.length === 0) {
        return 0;
    }
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}

function calcularPercentualSalarioBaixo(lista) {
    if (lista.length === 0) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] <= 350) {
            count++;
        }
    }
    return (count / lista.length) * 100;
}

analisarDados();