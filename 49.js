/* Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

let transacoes = [
    {
        id: 1,
        valor: 100,
        data: "2022-01-01",
        categoria: "Alimentação"
    },
    {
        id: 2,
        valor: 200,
        data: "2022-01-02",
        categoria: "Alimentação"
    },
    {
        id: 3,
        valor: 300,
        data: "2022-01-03",
        categoria: "Alimentação"
    },
    {
        id: 4,
        valor: 400,
        data: "2022-01-04",
        categoria: "Lazer"
    },
    {
        id: 5,
        valor: 500,
        data: "2022-01-05",
        categoria: "Lazer"
    }
];

function sumarizarTransacoesPorCategoria(transacoes) {
    const transacoesPorCategoria = {};

    for (const transacao of transacoes) {
        const { categoria, valor } = transacao;

        if (transacoesPorCategoria[categoria]) {
            transacoesPorCategoria[categoria].push(transacao);
            transacoesPorCategoria[categoria].subtotal += valor;
        } else {
            transacoesPorCategoria[categoria] = [transacao];
            transacoesPorCategoria[categoria].subtotal = valor;
        }
    }

    return transacoesPorCategoria;
}

const transacoesPorCategoria = sumarizarTransacoesPorCategoria(transacoes);
console.log(transacoesPorCategoria);