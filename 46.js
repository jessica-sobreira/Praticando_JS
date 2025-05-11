/* Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

function sumarizarVendasPorVendedor(vendas) {
  const totalVendasPorVendedor = {};

  for (const venda of vendas) {
    const { vendedor, valor } = venda;

    if (totalVendasPorVendedor[vendedor]) {
      totalVendasPorVendedor[vendedor] += valor;
    } else {
      totalVendasPorVendedor[vendedor] = valor;
    }
  }

  return totalVendasPorVendedor;
}

const vendas = [
  { vendedor: "Joaquim", valor: 100 },
  { vendedor: "Lucas", valor: 200 }
];

const totalVendasPorVendedor = sumarizarVendasPorVendedor(vendas);
console.log(totalVendasPorVendedor);

