/* Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

let dados = {
    nome: "Lucas",
    filhos: ["Lucas", "Joaquim"],
    pets: ["Cachorro", "Gato"]
};

function transformarObjeto(objeto, funcao) {
    const novoObjeto = {};
    for (const chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            novoObjeto[chave] = funcao(objeto[chave]);
        }
    }
    return novoObjeto;
}

function minhaFuncaoDeTransformacao(valor) {
    if (typeof valor === 'string') {
        return valor.toUpperCase();
    }
    return valor;
}

const objetoTransformado = transformarObjeto(dados, minhaFuncaoDeTransformacao);
console.log(objetoTransformado);

function adicionarExclamacao(valor) {
    if (typeof valor === 'string') {
        return valor + "!";
    }
    return valor;
}

const objetoComExclamacao = transformarObjeto(dados, adicionarExclamacao);
console.log(objetoComExclamacao);
